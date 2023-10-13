import { useEffect, useState } from "react";
import * as THREE from "three";
import { Reflector, Text, useTexture, useGLTF } from "@react-three/drei";

export const VideoText = (props) => {
  const [video] = useState(() =>
    Object.assign(document.createElement("video"), {
      src: "/videos/drei.mp4",
      crossOrigin: "Anonymous",
      loop: true,
      muted: true,
    })
  );
  useEffect(() => void video.play(), [video]);
  return (
    <Text
      font="textures/Inter-Bold.woff"
      fontSize={3}
      letterSpacing={-0.06}
      rotation={[0, Math.PI, 0]}
      {...props}
    >
      Lucatoni
      <meshBasicMaterial toneMapped={false}>
        <videoTexture
          attach="map"
          args={[video]}
          encoding={THREE.sRGBEncoding}
        />
      </meshBasicMaterial>
    </Text>
  );
};
