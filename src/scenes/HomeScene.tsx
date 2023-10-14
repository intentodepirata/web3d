import {
  Decorations,
  Lights,
  VideoPlane,
  VideoText,
  Sphere,
  VideoWall,
  GroundReflector,
  Ground,
  Screen1,
  Screen2,
} from "@/components";
import { Environment, Stars, useScroll } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { Chair, Computer, Desktop, Avatar, Keyboard, Mouse } from "@/models";
import { useFrame } from "@react-three/fiber";
import { CURVE } from "@/utils/cameraCurve";
import { useRef } from "react";
import { useCamera } from "@/contexts/CameraContexts";
import * as THREE from "three";

export default function HomeScene({ renderNextMesh }) {
  const scroll = useScroll();
  const { isMoving } = useCamera();

  const desktopPosition = useRef(
    new THREE.Vector3(0, 4.9988507732916565, -9.980576498219193)
  );

  useFrame(({ camera }) => {
    let positionPoint;

    if (isMoving) {
      positionPoint = desktopPosition.current;
      camera.position.lerp(desktopPosition.current, 0.055);
      camera.lookAt(0, 0, 0);
    } else {
      positionPoint = CURVE.getPoint(scroll.offset);
      camera.position.set(positionPoint?.x, positionPoint?.y, positionPoint?.z);
      camera.lookAt(0, 0, 0);
    }
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

      <group position={[0, 1.5, -4]} rotation-y={Math.PI / 0.5}>
        <Desktop rotation-y={Math.PI / -2} />
        <Computer position={[0.15, -1.4, 0.3]} rotation-y={Math.PI / 2} />

        <Keyboard
          scale={[0.22, 0.1, 0.22]}
          position={[0.2, 0.04, 0.2]}
          rotation-y={Math.PI / 1}
        />

        <Mouse position={[-1.193, 0.06, 0.8]} />

        <Chair position={[0.0, 0.07, -1.5]} rotation-x={Math.PI * 1.98} />

        <Avatar
          position={[0, -1.4, -1.3]}
          rotation-y={Math.PI * 2}
          scale={[2, 2, 2]}
        />
        <Screen1
          position={[0.64, 0.63, 0.39]}
          rotation-y={Math.PI / -1.017}
          scale={[0.074, 0.064, 0.001]}
        />
        <Screen2
          position={[-0.59, 0.63, 0.38]}
          rotation-y={Math.PI / 1.017}
          scale={[0.074, 0.064, 0.001]}
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
