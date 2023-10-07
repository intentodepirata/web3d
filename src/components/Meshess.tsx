// import { Suspense, useRef } from 'react'
// import { useBox } from '@react-three/cannon'
// import { Mesh } from 'three'

// export const Table = () => {
//   const [seat] = useBox(
//     () => ({
//       args: [2, 2, 2], // Dimensiones de colisión
//       position: [1, 15, 3], // Centrar la geometría de colisión
//       type: 'Dynamic', // La mesa se moverá
//       mass: 1
//     }),
//     useRef<Mesh>(null)
//   )

//   return (
//     <>
//       <mesh ref={seat} receiveShadow>
//         <boxGeometry args={[2, 2, 2]} />
//         <meshStandardMaterial color={'green'} />
//       </mesh>

//       <Suspense fallback={null}>{/* Agrega aquí cualquier otro contenido que desees en la mesa */}</Suspense>
//     </>
//   )
// }

// export const Table2 = () => {
//   const [seat] = useBox(
//     () => ({
//       args: [2, 4, 2], // Dimensiones de colisión
//       position: [4, 15, 4], // Centrar la geometría de colisión
//       type: 'Dynamic', // La mesa se moverá
//       mass: 1
//     }),
//     useRef<Mesh>(null)
//   )

//   return (
//     <>
//       <mesh ref={seat} receiveShadow>
//         <boxGeometry args={[2, 4, 2]} />
//         <meshStandardMaterial color={'red'} />
//       </mesh>

//       <Suspense fallback={null}>{/* Agrega aquí cualquier otro contenido que desees en la mesa */}</Suspense>
//     </>
//   )
// }

import { Suspense, useRef } from 'react'
import { useBox, useSphere, useCylinder } from '@react-three/cannon'
import { Mesh } from 'three'

export const Mesh1 = () => {
  const [mesh1] = useBox(
    () => ({
      args: [2, 2, 2], // Dimensiones de colisión
      position: [-7, 10, 4], // Centrar la geometría de colisión
      type: 'Dynamic', // La mesa se moverá
      mass: 1
    }),
    useRef<Mesh>(null)
  )

  return (
    <>
      <mesh ref={mesh1} castShadow receiveShadow>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color={'green'} />
      </mesh>

      <Suspense fallback={null}>{/* Agrega aquí cualquier otro contenido que desees en la mesa */}</Suspense>
    </>
  )
}

export const Mesh2 = () => {
  const [mesh2] = useBox(
    () => ({
      args: [2, 4, 2], // Dimensiones de colisión
      position: [-4, 10, 4], // Centrar la geometría de colisión
      type: 'Dynamic', // La mesa se moverá
      mass: 1
    }),
    useRef<Mesh>(null)
  )

  return (
    <>
      <mesh ref={mesh2} castShadow receiveShadow>
        <boxGeometry args={[2, 4, 2]} />
        <meshStandardMaterial color={'red'} />
      </mesh>

      <Suspense fallback={null}>{/* Agrega aquí cualquier otro contenido que desees en la mesa */}</Suspense>
    </>
  )
}

export const Mesh3 = () => {
  const [mesh3] = useSphere(
    () => ({
      args: [1], // Radio de colisión
      position: [0, 10, 3], // Posición
      type: 'Dynamic', // La mesa se moverá
      mass: 1
    }),
    useRef<Mesh>(null)
  )

  return (
    <>
      <mesh ref={mesh3} castShadow receiveShadow>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color={'blue'} />
      </mesh>

      <Suspense fallback={null}>{/* Agrega aquí cualquier otro contenido que desees en la mesa */}</Suspense>
    </>
  )
}

export const Mesh4 = () => {
  const [mesh4] = useCylinder(
    () => ({
      args: [1, 1, 4, 32], // Radio superior, radio inferior, altura, número de segmentos
      position: [3, 10, 3], // Posición
      type: 'Dynamic', // La mesa se moverá
      mass: 1
    }),
    useRef<Mesh>(null)
  )

  return (
    <>
      <mesh ref={mesh4} castShadow receiveShadow>
        <cylinderGeometry args={[1, 1, 4, 32]} />
        <meshStandardMaterial color={'yellow'} />
      </mesh>

      <Suspense fallback={null}>{/* Agrega aquí cualquier otro contenido que desees en la mesa */}</Suspense>
    </>
  )
}
