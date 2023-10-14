import { useGLTF } from "@react-three/drei";

export function Mouse(props) {
  const { nodes, materials } = useGLTF("models/mouse.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, Math.PI * 1.5]} scale={0.15}>
        <group scale={0.28}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pasted__polySurface314.geometry}
            material={materials.lambert1}
          />
        </group>
      </group>
      <group
        position={[0, 0.006, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface2.geometry}
          material={materials.lambert1}
          position={[0, 0, 1.276]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("models/mouse.glb");
