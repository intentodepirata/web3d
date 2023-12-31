/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("models/chair.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={[0.404, 0.527, 0.527]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_1.geometry}
          material={materials["Material.017"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_2.geometry}
          material={materials["Material.018"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("models/chair.glb");
