import { Decorations, Lights, VideoPlane, VideoText, Sphere, VideoWall, GroundReflector, Ground } from '@/components'
import CyberTruck from '@/models/CyberTruck'
import { Avatar } from '@/models/Avatar'
import { Environment, OrbitControls, Stars } from '@react-three/drei'
import { HomeSceneProps } from '@/interfaces'
import { Physics } from '@react-three/cannon'
import { Suspense } from 'react'
import { Lamp } from '@/components/Lamp'

export const HomeScene: React.FC<HomeSceneProps> = ({ videoSelected, setVideoProgress, renderNextMesh }) => {
  return (
    <>
      <color attach="background" args={['#151520']} />

      <OrbitControls />

      <Lights />

      <Environment preset="city" />
      <Physics iterations={15} gravity={[0, -25, 0]} allowSleep={false}>
        {renderNextMesh()}

        <VideoPlane videoUrl={videoSelected} setVideoProgress={setVideoProgress} />

        <VideoText position={[0, 5, -0.52]} />

        <VideoWall />

        <GroundReflector />
        <Ground />

        <Sphere />

        <Decorations />

        {/* <Lamp /> */}
        <Suspense fallback={null}>
          {/* <CyberTruck position={[4, 0, -4.9]} rotation-y={Math.PI / 0.31} scale={[1.5, 1.5, 1.5]} /> */}
          <Avatar position={[-4, 0, -4.9]} scale={[2, 2, 2]} rotation-y={Math.PI / -0.31} />
        </Suspense>
      </Physics>
      <Stars radius={50} count={5000} depth={50} factor={20} saturation={0} fade speed={1} />
    </>
  )
}
