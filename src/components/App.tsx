import { Canvas } from "@react-three/fiber";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { mainStyles, sectionStyles, sectionMenuStyles } from "@/styles";
import { HomeScene } from "@/scenes";
import { MainMenu } from "@/components";
import { useState, useEffect, FC } from "react";
import { VideoList } from "@/constant/videoList";
import { Mesh1, Mesh2, Mesh3, Mesh4 } from "@/components";
import { MeshComponent } from "@/types/components";
import { VideoProgress } from "@/interfaces/videoProgress";

const initialValues = {
  progress: 0,
  currentTime: 0,
  duration: 0,
};
export const App = () => {
  const [videoSelected, setVideoSelected] = useState(VideoList.AGORA);
  const [videoProgress, setVideoProgress] =
    useState<VideoProgress>(initialValues); // Estado para el progreso del video
  const [renderedMeshes, setRenderedMeshes] = useState<MeshComponent[]>([]); // Estado para almacenar los componentes renderizados([]);
  const meshComponents: FC[] = [Mesh1, Mesh2, Mesh3, Mesh4];

  useEffect(() => {}, [videoProgress]);

  useEffect(() => {
    // Cuando se cambia el estado de renderedMeshes, ejecutamos esta función para renderizar los componentes almacenados.
    renderNextMesh();
  }, [renderedMeshes]);

  const showNextMesh = () => {
    if (renderedMeshes.length < meshComponents.length) {
      const nextIndex = renderedMeshes.length;
      const ComponentToRender = meshComponents[nextIndex];
      setRenderedMeshes([
        ...renderedMeshes,
        { type: ComponentToRender, props: { key: nextIndex } },
      ]);
    }
  };

  const renderNextMesh = () => {
    return renderedMeshes.map((meshComponent, index) => (
      <meshComponent.type key={index} {...meshComponent.props} />
    ));
  };

  return (
    <>
      <Box component="main" sx={mainStyles}>
        <Box component="section" sx={sectionStyles}>
          <Typography component="h2" variant="h5" color="inherit">
            By Antonio Alvarez - @intentodepirata
          </Typography>
        </Box>

        <Box component="section" sx={sectionMenuStyles}>
          <MainMenu
            setVideoSelected={setVideoSelected}
            videoSelected={videoSelected}
            videoProgress={videoProgress}
            showNextMesh={showNextMesh}
          />
        </Box>
      </Box>
      <Canvas
        style={{ position: "fixed", inset: 0 }}
        shadows
        camera={{ position: [0, 40, 60], fov: 16 }}
      >
        <HomeScene
          videoSelected={videoSelected}
          setVideoProgress={setVideoProgress}
          renderNextMesh={renderNextMesh}
        />
      </Canvas>
    </>
  );
};
