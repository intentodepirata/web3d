import * as THREE from "three";

export const CURVE = new THREE.CatmullRomCurve3([
  new THREE.Vector3(0, 30, 60),
  new THREE.Vector3(0, 30, 65),
  new THREE.Vector3(60, 30, 45),
  new THREE.Vector3(80, 30, 0),
  new THREE.Vector3(60, 30, -45),
  new THREE.Vector3(0, 30, -65),
  new THREE.Vector3(0, 30, -60),
  new THREE.Vector3(0, 30, -50),
  new THREE.Vector3(0, 30, -40),
  new THREE.Vector3(0, 20, -30),
  new THREE.Vector3(0, 10, -20),
  new THREE.Vector3(0, 5, -10),
]);
