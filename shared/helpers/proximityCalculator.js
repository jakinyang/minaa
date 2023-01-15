// Function that takes three arguments: an array of coordinate objects, and an current position coordinate object, and a radius. It filters through the array and returns an array of objects that are within the radius from the current position coordinate object.

function getDistance({ latitude: lat1, longitude: lon1 }, { latitude: lat2, longitude: lon2 }) {
  const R = 6371e3; // metres
  const φ1 = lat1 * Math.PI / 180; // φ, λ in radians
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const d = R * c; // in metres
  return d;
}

export default function proximityCalculator(array, currentCoords, radius) {

  let distanceArray = array.map((obj) => {
    let distance = getDistance(
      { latitude: obj.latitude, longitude: obj.longitude },
      { latitude: currentCoords.latitude, longitude: currentCoords.longitude }
    );
    return { ...obj, distance: distance };
  });

  let filteredArray = distanceArray.filter((obj) => {
    return obj.distance <= radius;
  });
  return filteredArray;
}