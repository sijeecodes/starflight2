const updateStars = function (starGeoAndVelo) {
  const positions = starGeoAndVelo.starGeo.attributes.position.array;
  const velocities = starGeoAndVelo.starVelo;

  for (let i = 2; i < positions.length + 1; i += 3) {
    for (let j = 0; j < velocities.length; j++) {
      if (positions[i] < -10) {
        velocities[j] = 0;
        positions[i] = 1000;
      } else {
        velocities[j] -= 0.00007;
        positions[i] += velocities[j];
      }
    }
  }
  starGeoAndVelo.starGeo.attributes.position.needsUpdate = true;
};

export default updateStars;

