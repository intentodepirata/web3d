import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Keyboard(props) {
  const { nodes, materials } = useGLTF("models/keyboard.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Case.geometry}
        material={materials["Black rubber"]}
        position={[0.592, 0, 0]}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Keycaps.geometry}
        material={materials["Keycap material"]}
        position={[0.592, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("models/keyboard.gltf");
