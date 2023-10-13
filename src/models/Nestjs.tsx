import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";
import { Group } from "three";
import { calculateAumentedDimensions } from "@/utils/calculateAumentedDimensions";

export const Nestjs = ({ position, rotation }) => {
  const { nodes, materials } = useGLTF("models/nestjs.glb");

  //   Obtener tamano exacto para pasarselo como args a la colision
  const dimension = calculateAumentedDimensions(nodes.Object_23.geometry);

  const [colision] = useBox(
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
    <group ref={colision}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object.geometry}
        material={materials["NESTJS.001"]}
        position={[0.055, 0.637, 0.791]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_23.geometry}
        material={materials.BORDAS_CROMADO}
        position={[0.055, 0.637, 0.791]}
      />
    </group>
  );
};

useGLTF.preload("models/nestjs.glb");
