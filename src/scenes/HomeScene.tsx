import {
  Decorations,
  Lights,
  VideoPlane,
  VideoText,
  Sphere,
  VideoWall,
  GroundReflector,
  Ground,
} from "@/components";
import {
  Environment,
  OrbitControls,
  Stars,
  useScroll,
} from "@react-three/drei";

import { Debug, Physics } from "@react-three/cannon";

import * as THREE from "three";

import { Chair, Computer, Desktop, Avatar, AvatarAndAnimation } from "@/models";
import { useFrame } from "@react-three/fiber";
import { Suspense } from "react";

const CURVE = new THREE.CatmullRomCurve3([
  new THREE.Vector3(0, 30, 60),
  new THREE.Vector3(0, 30, 80),
  new THREE.Vector3(60, 30, 45),
  new THREE.Vector3(80, 30, 0),
  new THREE.Vector3(60, 30, -45),
  new THREE.Vector3(0, 30, -80),
  new THREE.Vector3(0, 30, -60),
]);

export default function HomeScene({ renderNextMesh, animateCamera }) {
  const scroll = useScroll();
  useFrame(({ camera }) => {
    const positionPoint = CURVE.getPoint(scroll.offset);

    camera.position.set(positionPoint.x, positionPoint.y, positionPoint.z);
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <color attach="background" args={["#151520"]} />
      <Environment preset="sunset" />

      {/* <OrbitControls /> */}
      <Lights />
      <VideoPlane />
      <Physics iterations={15} gravity={[0, -27, 0]} allowSleep={false}>
        {/* <Debug color={"white"}> */}

        {renderNextMesh()}

        <VideoWall />

        <Ground />

        <Sphere />

        <Decorations />

        {/* </Debug> */}
      </Physics>

      <VideoText position={[0, 5, -0.52]} />
      <GroundReflector />

      <group position={[-4, 1.5, -1.5]}>
        <Desktop rotation-y={Math.PI / -2} />
        <Computer position={[0.15, -1.4, 0.3]} rotation-y={Math.PI / 2} />
        <Chair position={[0.0, 0.07, -1.5]} rotation-x={Math.PI * 1.98} />

        <Avatar
          position={[0, -1.4, -1.3]}
          rotation-y={Math.PI * 2}
          scale={[2, 2, 2]}
        />
      </group>

      <Stars
        radius={50}
        count={5000}
        depth={50}
        factor={20}
        saturation={0}
        fade
        speed={1}
      />
    </>
  );
}
