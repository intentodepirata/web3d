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
import { Avatar } from "@/models/Avatar";
import {
  Environment,
  OrbitControls,
  Stars,
  useScroll,
} from "@react-three/drei";
import { HomeSceneProps } from "@/interfaces";
import { Debug, Physics } from "@react-three/cannon";
import { Suspense, useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useControls } from "leva";

const CURVE = new THREE.CatmullRomCurve3([
  new THREE.Vector3(0, 30, 60),
  new THREE.Vector3(0, 30, 80),
  new THREE.Vector3(60, 30, 45),
  new THREE.Vector3(80, 30, 0),
  new THREE.Vector3(60, 30, -45),
  new THREE.Vector3(0, 30, -80),
  new THREE.Vector3(0, 30, -60),
]);

export const HomeScene: React.FC<HomeSceneProps> = ({
  // videoSelected,
  // setVideoProgress,
  renderNextMesh,
  animateCamera,
  animation,
}) => {
  // const scroll = useScroll();
  // useFrame(({ camera }) => {
  //   const positionPoint = CURVE.getPoint(scroll.offset);

  //   camera.position.set(positionPoint.x, positionPoint.y, positionPoint.z);
  //   camera.lookAt(0, 0, 0);
  // });

  // console.log(animation);
  return (
    <>
      <Suspense fallback={null}>
        <Avatar
          position={[-4, 0, -4.9]}
          rotation-y={Math.PI / -0.31}
          scale={[2, 2, 2]}
          animation={animation}
        />
      </Suspense>
      <color attach="background" args={["#151520"]} />
      <Environment preset="sunset" />

      <OrbitControls />
      <Lights />

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
};
