import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function CyberTruck(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/cybertruck/model.gltf')

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.tires.geometry} material={materials['rubber.002']} />
      <mesh geometry={nodes.steer.geometry} material={nodes.steer.material} />
      <mesh geometry={nodes.interior003.geometry} material={nodes.interior003.material} />
      <mesh geometry={nodes.interior003_1.geometry} material={materials['light_f.002']} />
      <mesh geometry={nodes.interior003_2.geometry} material={materials['body.002']} />
      <mesh geometry={nodes.interior003_3.geometry} material={materials.glass_crack} />
      <mesh geometry={nodes.interior003_4.geometry} material={materials['glassgray.002']} />
      <mesh geometry={nodes.interior003_5.geometry} material={materials.Light} />
    </group>
  )
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/cybertruck/model.gltf')
