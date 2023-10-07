import * as THREE from 'three'
import { Decorations, Lights, VideoPlane, Ground, VideoText, Mesh1, GroundMaterial, Mesh2, Mesh3, Mesh4 } from '@/components'
import CyberTruck from '@/models/CyberTruck'
import { Environment, OrbitControls, Stars } from '@react-three/drei'
import { Suspense, useRef, useState } from 'react'
import { HomeSceneProps } from '@/interfaces'
import { Physics, useBox } from '@react-three/cannon'

function Sphere() {
  const ref = useRef<THREE.Mesh>(null)
  return (
    <mesh ref={ref} receiveShadow castShadow position={[3, 0.55, 6.6]}>
      <sphereGeometry args={[0.5, 64, 64]} />
      <meshStandardMaterial roughness={0} metalness={0.25} />
    </mesh>
  )
}

export const HomeScene: React.FC<HomeSceneProps> = ({ videoSelected, setVideoProgress }) => {
  // const [showFallingCube, setShowFallingCube] = useState(false)

  return (
    <>
      <color attach="background" args={['#151520']} />

      <OrbitControls />

      <Lights />

      <Environment preset="city" />
      <Physics iterations={15} gravity={[0, -25, 0]} allowSleep={false}>
        <Mesh1 />
        <Mesh2 />
        <Mesh3 />
        <Mesh4 />

        <VideoPlane videoUrl={videoSelected} setVideoProgress={setVideoProgress} />

        <VideoText position={[0, 5, -0.52]} />

        {/* Video Wall */}
        <mesh castShadow receiveShadow position={[0, 5, 0]}>
          <boxGeometry args={[17, 10, 1]} />
          <meshStandardMaterial color={'black'} envMapIntensity={0.5} roughness={0.2} metalness={0.8} />
        </mesh>

        {/* Base */}
        <mesh position={[0, -5, 0]}>
          <cylinderGeometry args={[10, 10, 10, 64]} />
          <meshStandardMaterial color={'black'} envMapIntensity={0.5} roughness={0} metalness={0} />
        </mesh>
        <GroundMaterial position={[0, 0, 0]} />

        <Sphere />

        <Ground />

        <Decorations />
        <Suspense fallback={null}>
          <CyberTruck position={[4, 0, -4.9]} rotation-y={Math.PI / 0.31} scale={1.5} />
        </Suspense>
      </Physics>
      <Stars radius={50} count={5000} depth={50} factor={20} saturation={0} fade speed={1} />
    </>
  )
}
