export function locationValid(p, now = Date.now()) {
  return p && ['latitude', 'longitude', 'accuracy', 'timestamp'].every(k => Number.isFinite(p[k]))
    && Math.abs(p.latitude) <= 90 && Math.abs(p.longitude) <= 180
    && p.accuracy >= 0 && p.accuracy <= 150
    && now - p.timestamp >= -5000 && now - p.timestamp <= 30000;
}
export function freshLocation(p, now = Date.now()) {
  return !!p && p.expires > now && Number.isFinite(p.timestamp) && now - p.timestamp <= 45000 && now - p.timestamp >= -5000;
}
