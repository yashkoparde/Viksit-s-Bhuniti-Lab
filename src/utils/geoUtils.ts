export function calculateBoundingBox(coords: { lat: number; lng: number }[]) {
  if (coords.length === 0) return { minLat: 0, maxLat: 0, minLng: 0, maxLng: 0 };
  let minLat = coords[0].lat, maxLat = coords[0].lat, minLng = coords[0].lng, maxLng = coords[0].lng;
  for (const c of coords) {
    if (c.lat < minLat) minLat = c.lat;
    if (c.lat > maxLat) maxLat = c.lat;
    if (c.lng < minLng) minLng = c.lng;
    if (c.lng > maxLng) maxLng = c.lng;
  }
  return { minLat, maxLat, minLng, maxLng };
}
