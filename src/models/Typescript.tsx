import { useRef } from "react";
import { useBox } from "@react-three/cannon";
import { Group } from "three";
import { useGLTF } from "@react-three/drei";
import { calculateAumentedDimensions } from "@/utils/calculateAumentedDimensions";

export const Typescript = ({ position, rotation }) => {
  const { nodes, materials } = useGLTF("models/typescript.glb");

  const dimension = calculateAumentedDimensions(nodes.Object_23.geometry);

  //   console.log(dimension);
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
        material={materials.TYPESCRIPT}
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

useGLTF.preload("models/typescript.glb");
