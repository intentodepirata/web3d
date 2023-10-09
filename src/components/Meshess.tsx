import { Suspense, useRef } from "react";
import { useBox, useSphere, useCylinder } from "@react-three/cannon";
import { Mesh } from "three";

export const Mesh1 = ({ position }: { position: [number, number, number] }) => {
  const [mesh1] = useBox(
    () => ({
      args: [2, 2, 2], // Dimensiones de colisión
      position, // Utiliza la posición pasada como prop
      type: "Dynamic", // La mesa se moverá
      mass: 1,
    }),
    useRef<Mesh>(null)
  );

  return (
    <>
      <mesh ref={mesh1} castShadow receiveShadow>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color={"green"} />
      </mesh>

      <Suspense fallback={null}>
        {/* Agrega aquí cualquier otro contenido que desees en la mesa */}
      </Suspense>
    </>
  );
};

export const Mesh2 = ({ position }: { position: [number, number, number] }) => {
  const [mesh2] = useBox(
    () => ({
      args: [2, 4, 2], // Dimensiones de colisión
      position, // Centrar la geometría de colisión
      type: "Dynamic", // La mesa se moverá
      mass: 1,
    }),
    useRef<Mesh>(null)
  );

  return (
    <>
      <mesh ref={mesh2} castShadow receiveShadow>
        <boxGeometry args={[2, 4, 2]} />
        <meshStandardMaterial color={"red"} />
      </mesh>

      <Suspense fallback={null}>
        {/* Agrega aquí cualquier otro contenido que desees en la mesa */}
      </Suspense>
    </>
  );
};

export const Mesh3 = ({ position }: { position: [number, number, number] }) => {
  const [mesh3] = useSphere(
    () => ({
      args: [1], // Radio de colisión
      position, // Posición
      type: "Dynamic", // La mesa se moverá
      mass: 1,
    }),
    useRef<Mesh>(null)
  );

  return (
    <>
      <mesh ref={mesh3} castShadow receiveShadow>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color={"blue"} roughness={0} metalness={0.3} />
      </mesh>

      <Suspense fallback={null}>
        {/* Agrega aquí cualquier otro contenido que desees en la mesa */}
      </Suspense>
    </>
  );
};

export const Mesh4 = ({ position }: { position: [number, number, number] }) => {
  const [mesh3] = useSphere(
    () => ({
      args: [1], // Radio de colisión
      position, // Posición
      type: "Dynamic", // La mesa se moverá
      mass: 1,
    }),
    useRef<Mesh>(null)
  );

  return (
    <>
      <mesh ref={mesh3} castShadow receiveShadow>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color={"white"} roughness={0} metalness={0.3} />
      </mesh>

      <Suspense fallback={null}>
        {/* Agrega aquí cualquier otro contenido que desees en la mesa */}
      </Suspense>
    </>
  );
};
export const Sphere = () => {
  const ref = useRef<Mesh>(null);
  return (
    <mesh ref={ref} receiveShadow castShadow position={[3, 0.55, 6.6]}>
      <sphereGeometry args={[0.5, 64, 64]} />
      <meshStandardMaterial roughness={0} metalness={0.25} />
    </mesh>
  );
};

// Me esta dando problemas poruqe atraviesa el suelo
// export const Mesh4 = () => {
//   const [mesh4] = useCylinder(
//     () => ({
//       args: [1, 1, 4, 32], // Radio superior, radio inferior, altura, número de segmentos
//       position: [3, 10, 3], // Posición
//       type: "Dynamic", // La mesa se moverá
//       mass: 1,
//     }),
//     useRef<Mesh>(null)
//   );

//   return (
//     <>
//       <mesh ref={mesh4} castShadow receiveShadow>
//         <cylinderGeometry args={[1, 1, 4, 32]} />
//         <meshStandardMaterial color={"yellow"} />
//       </mesh>

//       <Suspense fallback={null}>
//         {/* Agrega aquí cualquier otro contenido que desees en la mesa */}
//       </Suspense>
//     </>
//   );
// };
