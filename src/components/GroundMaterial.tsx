import { Suspense, useRef } from 'react'
import { useCylinder } from '@react-three/cannon'
import { Mesh } from 'three'

export const GroundMaterial = ({ position }: any) => {
  const [groundRef] = useCylinder(
    () => ({
      args: [10, 0, 0.1, 64],
      position: position,
      type: 'Static'
    }),
    useRef<Mesh>(null)
  )

  return (
    <>
      <mesh ref={groundRef}>
        <cylinderGeometry args={[10, 0, 0.1, 64]} />
        <meshStandardMaterial color={'black'} />
      </mesh>

      <Suspense fallback={null}>{/* Agrega aquí cualquier otro contenido que desees en la mesa */}</Suspense>
    </>
  )
}
