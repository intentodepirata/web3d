import { sRGBEncoding } from "three";
import { useElapsedTime } from "../contexts/ElapsedTimeContext";

export const VideoPlane = () => {
  const { video } = useElapsedTime();

  return (
    <mesh castShadow receiveShadow position={[0, 5, 0.51]} scale={[16, 9, 1]}>
      <planeGeometry />
      <meshBasicMaterial toneMapped={false}>
        <videoTexture attach="map" args={[video]} encoding={sRGBEncoding} />
      </meshBasicMaterial>
    </mesh>
  );
};
