import {
  Decorations,
  Lights,
  VideoPlane,
  Ground,
  VideoText,
  GroundMaterial,
  Sphere,
} from "@/components";
import CyberTruck from "@/models/CyberTruck";
import { Environment, OrbitControls, Stars } from "@react-three/drei";
import { Suspense } from "react";
import { HomeSceneProps } from "@/interfaces";
import { Physics } from "@react-three/cannon";

export const HomeScene: React.FC<HomeSceneProps> = ({
  videoSelected,
  setVideoProgress,
  renderNextMesh,
}) => {
  return (
    <>
      <color attach="background" args={["#151520"]} />

      <OrbitControls />

      <Lights />

      <Environment preset="city" />
      <Physics iterations={15} gravity={[0, -25, 0]} allowSleep={false}>
        {renderNextMesh()}

        <VideoPlane
          videoUrl={videoSelected}
          setVideoProgress={setVideoProgress}
        />

        <VideoText position={[0, 5, -0.52]} />

        {/* Video Wall */}
        <mesh castShadow receiveShadow position={[0, 5, 0]}>
          <boxGeometry args={[17, 10, 1]} />
          <meshStandardMaterial
            color={"black"}
            envMapIntensity={0.5}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>

        {/* Base */}
        <mesh position={[0, -5, 0]}>
          <cylinderGeometry args={[10, 10, 10, 64]} />
          <meshStandardMaterial
            color={"black"}
            envMapIntensity={0.5}
            roughness={0}
            metalness={0}
          />
        </mesh>
        <GroundMaterial position={[0, 0, 0]} />

        <Sphere />

        <Ground />

        <Decorations />
        <Suspense fallback={null}>
          <CyberTruck
            position={[4, 0, -4.9]}
            rotation-y={Math.PI / 0.31}
            scale={1.5}
          />
        </Suspense>
      </Physics>
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
