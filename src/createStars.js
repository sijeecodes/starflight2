import * as THREE from 'three';

// var createStarGeo = function() {
//   var starGeo = new THREE.Geometry();

//   for( var i = 0 ; i < 1000 ; i++ ) {
//     var star = new THREE.Vector3(
//       Math.random() * 1000 - 500,
//       Math.random() * 1000 - 500,
//       - Math.random() * 1000
//     );
//     star.velocity = 0;
//     starGeo.vertices.push( star );
//   }

//   return starGeo;
// };

// var createStarMaterial = function() {
//   var sprite = new THREE.TextureLoader().load( '3DSrc/star.png' );
//   return new THREE.PointsMaterial( {
//     color: 0xaaaaaa,
//     size: 2,
//     map: sprite
//   } );
// };

const createStarGeo = function() {
  const starCount = 500;
  const starGeo = new THREE.BufferGeometry();
  const positions = new Float32Array(starCount * 3);

  for (let i = 0; i < starCount; i++) {
    positions[i * 3] = Math.random() * 50 - 25; // x: ±500
    positions[i * 3 + 1] = Math.random() * 50 - 25; // y: ±500
    positions[i * 3 + 2] = Math.random() * 100; // z: 0 to -1000
  }

  return starGeo.setAttribute(
    'position', new THREE.BufferAttribute(positions, 3)
  );
};

const createStarMaterial = function() {
  return new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.7,
    transparent: true,
    map: new THREE.TextureLoader().load('../3DSrc/star.png'),
  });
};

export { createStarGeo, createStarMaterial };