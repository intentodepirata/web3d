import { Suspense, useEffect, useRef, useState } from "react";
import { useBox, useSphere, useCylinder } from "@react-three/cannon";
import { Mesh, TextureLoader, sRGBEncoding } from "three";
import { useLoader } from "@react-three/fiber";
export const VideoWall = () => {
  const [videoWall] = useBox(
    () => ({
      args: [17, 10, 1], // Dimensiones de colisión
      position: [0, 5, 0], // Utiliza la posición pasada como prop
      type: "Static",
      mass: 1,
    }),
    useRef<Mesh>(null)
  );

  return (
    <>
      <mesh ref={videoWall} castShadow receiveShadow position={[0, 5, 0]}>
        <boxGeometry args={[17, 10, 1]} />
        <meshStandardMaterial
          color={"black"}
          envMapIntensity={0.5}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </>
  );
};
export const Screen1 = (props) => {
  const [video] = useState(() =>
    Object.assign(document.createElement("video"), {
      src: "/videos/visualcode.mp4",
      crossOrigin: "Anonymous",
      loop: true,
      muted: true,
    })
  );
  useEffect(() => void video.play(), [video]);
  return (
    <mesh {...props}>
      <planeGeometry args={[16, 9]} />
      <meshBasicMaterial toneMapped={false}>
        <videoTexture attach="map" args={[video]} encoding={sRGBEncoding} />
      </meshBasicMaterial>
    </mesh>
  );
};
export const Screen2 = (props) => {
  const [video] = useState(() =>
    Object.assign(document.createElement("video"), {
      src: "/videos/presentacion.mp4",
      crossOrigin: "Anonymous",
      loop: true,
      muted: true,
    })
  );
  useEffect(() => void video.play(), [video]);
  return (
    <mesh {...props}>
      <planeGeometry args={[16, 9]} />
      <meshBasicMaterial toneMapped={false}>
        <videoTexture attach="map" args={[video]} encoding={sRGBEncoding} />
      </meshBasicMaterial>
    </mesh>
  );
};

export const Ground = () => {
  const [ground] = useCylinder(
    () => ({
      args: [10, 10, 10, 64], // Dimensiones de colisión
      position: [0, -5, 0],
      type: "Static",
    }),
    useRef<Mesh>(null)
  );

  return (
    <>
      <mesh ref={ground}>
        <cylinderGeometry args={[10, 10, 10, 64]} />
        <meshStandardMaterial
          color={"black"}
          envMapIntensity={0.5}
          roughness={0}
          metalness={0}
        />
      </mesh>
    </>
  );
};

export const Mesh1 = ({ position }: { position: [number, number, number] }) => {
  const [mesh1] = useBox(
    () => ({
      args: [2, 2, 2], // Dimensiones de colisión
      position, // Utiliza la posición pasada como prop
      rotation: [0, 0, Math.PI / 2.45], // Rotación en el eje Y (45 grados)
      type: "Dynamic",
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
      rotation: [0, 0, Math.PI / -2.45], // Rotación en el eje Y (45 grados)
      type: "Dynamic",
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
      type: "Dynamic",
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
      type: "Dynamic",
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
//       type: "Dynamic",
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
