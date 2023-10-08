import { Canvas } from '@react-three/fiber'
import { Typography } from '@mui/material'
import { Box } from '@mui/material'
import { mainStyles, sectionStyles, sectionMenuStyles } from '@/styles'
import { HomeScene } from '@/scenes'
import { MainMenu } from './MainMenu'
import { useState, useEffect } from 'react'
import { VideoList } from '@/constant/videoList'

export const App = () => {
  const [videoSelected, setVideoSelected] = useState(VideoList.AGORA)
  const [videoProgress, setVideoProgress] = useState(0) // Estado para el progreso del video

  useEffect(() => {
    // console.log(videoProgress)
  }, [videoProgress])
  return (
    <>
      <Box component="main" sx={mainStyles}>
        <Box component="section" sx={sectionStyles}>
          {/* <Typography component="h1" variant="h2" color="inherit">
            Web 3D Interactive
          </Typography> */}
          <Typography component="h2" variant="h5" color="inherit">
            By Antonio Alvarez - @intentodepirata
          </Typography>
        </Box>

        <Box component="section" sx={sectionMenuStyles}>
          <MainMenu setVideoSelected={setVideoSelected} videoSelected={videoSelected} videoProgress={videoProgress} />
        </Box>
      </Box>
      <Canvas style={{ position: 'fixed', inset: 0 }} shadows camera={{ position: [0, 40, 60], fov: 16 }}>
        <HomeScene videoSelected={videoSelected} setVideoProgress={setVideoProgress} />
      </Canvas>
    </>
  )
}
