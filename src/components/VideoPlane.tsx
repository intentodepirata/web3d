// import { useEffect, useState } from 'react'
// import * as THREE from 'three'

// export const VideoPlane = ({ videoUrl }: any) => {
//   const [video, setVideo] = useState(() =>
//     Object.assign(document.createElement('video'), {
//       src: videoUrl,
//       crossOrigin: 'anonymous',
//       loop: true,
//       muted: true,
//       CrossOrigin: 'anonymous'
//     })
//   )
//   useEffect(() => {
//     if (video) {
//       video.src = videoUrl
//       video.play()
//       setVideo(video)
//       console.log(video.currentTime)
//     }
//   }, [videoUrl, video])

//   return (
//     <mesh castShadow receiveShadow position={[0, 5, 0.51]} scale={[16, 9, 1]}>
//       <planeGeometry />
//       <meshBasicMaterial toneMapped={false}>
//         <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
//       </meshBasicMaterial>
//     </mesh>
//   )
// }

import { useEffect, useState } from 'react'
import * as THREE from 'three'

export const VideoPlane = ({ videoUrl, setVideoProgress }: any) => {
  const [video, setVideo] = useState(() =>
    Object.assign(document.createElement('video'), {
      src: videoUrl,
      crossOrigin: 'anonymous',
      loop: true,
      muted: true,
      CrossOrigin: 'anonymous'
    })
  )

  useEffect(() => {
    if (video) {
      video.src = videoUrl
      video.play()
      setVideo(video)

      // Actualizar el progreso del video cuando cambie el currentTime
      video.addEventListener('timeupdate', () => {
        if (video.duration) {
          const progress = (video.currentTime / video.duration) * 100
          setVideoProgress(progress)
        }
      })
    }
  }, [videoUrl, video, setVideoProgress])

  return (
    <mesh castShadow receiveShadow position={[0, 5, 0.51]} scale={[16, 9, 1]}>
      <planeGeometry />
      <meshBasicMaterial toneMapped={false}>
        <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
      </meshBasicMaterial>
    </mesh>
  )
}
