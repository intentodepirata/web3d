import { RoundedBox } from "@react-three/drei";
import { Suspense, useRef } from "react";
import {
  useBox,
  useSphere,
  useCylinder,
  useConvexPolyhedron,
} from "@react-three/cannon";
import { Mesh } from "three";
import { useMesh } from "@/contexts/MeshContext";
import { useMouseOverlay } from "@/contexts/MouseOverlayContexts";

export const Decorations = () => {
  const { setHovered, setMousePosition } = useMouseOverlay();
  const { showNextMesh } = useMesh();

  const handlClick = () => {
    console.log("click");
    showNextMesh();
  };
  const [roundedBox] = useBox(
    () => ({
      args: [4.2, 2, 2], // Dimensiones de colisión
      position: [-7, 1, 2.2], // Centrar la geometría de colisión
      type: "Static", // La mesa se moverá
      mass: 1,
    }),
    useRef<Mesh>(null)
  );
  const [icosahedroBox] = useBox(
    () => ({
      args: [1, 1, 1], // Dimensiones de colisión
      position: [5, 0.9, 5], // Centrar la geometría de colisión
      type: "Static", // La mesa se moverá
      mass: 1,
    }),
    useRef<Mesh>(null)
  );

  const [wireframe] = useBox(
    () => ({
      args: [1, 1, 1], // Tamaño de la caja de colisión
      position: [8, 1.1, 2], // Posición
      type: "Static", // Objeto estático, no se moverá
    }),
    useRef<Mesh>(null)
  );

  return (
    <>
      {/* Elementos decorativos en la base del cilindro */}
      <RoundedBox
        onClick={() => handlClick()}
        onPointerEnter={() => {
          setHovered(true);
        }}
        onPointerLeave={() => {
          setHovered(false);
        }}
        onPointerMove={(event) => {
          setMousePosition(event.clientX, event.clientY);
        }}
        ref={roundedBox}
        receiveShadow
        castShadow
        smoothness={10}
        radius={0.025}
        position={[-7, 1, 2.2]}
        scale={[4.2, 2, 2]}
      >
        <meshStandardMaterial
          color={"yellow"}
          envMapIntensity={0.5}
          roughness={0}
          metalness={0}
        />
      </RoundedBox>

      <mesh ref={icosahedroBox} position={[5, 0.9, 5]} castShadow>
        <icosahedronGeometry />
        <meshStandardMaterial
          color="magenta"
          envMapIntensity={0.8}
          roughness={0.2}
          metalness={1}
        />
      </mesh>

      <mesh
        ref={wireframe}
        receiveShadow
        castShadow
        rotation-x={-Math.PI / 2}
        position={[8, 1.1, 2]}
        scale={[2, 2, 2]}
      >
        <boxGeometry args={[1, 1, 1, 3, 3, 3]} />
        <meshStandardMaterial
          color="#2d2d2d"
          envMapIntensity={0.5}
          roughness={0}
          metalness={0}
          wireframe
        />
      </mesh>
    </>
  );
};
