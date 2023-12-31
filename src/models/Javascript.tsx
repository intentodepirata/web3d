/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";
import { Group } from "three";
import { calculateAumentedDimensions } from "@/utils/calculateAumentedDimensions";

export const Javascript = ({ position, rotation }) => {
  const { nodes, materials } = useGLTF("models/javascript_only.glb");

  //   Obtener tamano exacto para pasarselo como args a la colision
  const dimension = calculateAumentedDimensions(nodes.Object_23.geometry);

  const [javascript] = useBox(
    () => ({
      args: dimension, // Dimensiones de colisión
      type: "Dynamic",
      mass: 1,
      position,
      rotation,
    }),
    useRef<Group>(null)
  );

  return (
    <group ref={javascript}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_22.geometry}
        material={materials.JAVASCRIPT}
        position={[0.05, 0.65, 0.8]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_23.geometry}
        material={materials.BORDAS_CROMADO}
        position={[0.05, 0.65, 0.8]}
      />
    </group>
  );
};

useGLTF.preload("models/javascript_only.glb");
