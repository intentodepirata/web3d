import { Canvas } from "@react-three/fiber";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { mainStyles, sectionStyles, sectionMenuStyles } from "@/styles";
import { HomeScene } from "@/scenes";
import { MainMenu } from "@/components";
import { useState, FC, useMemo, useCallback } from "react";
import { VideoList } from "@/constant/videoList";
import { Mesh1, Mesh2, Mesh3, Mesh4 } from "@/components";
import { MeshComponent } from "@/types/components";
import { VideoProgress } from "@/interfaces/videoProgress";
import { generateRandomPosition } from "@/utils/randomPosition";

const initialValues = {
  progress: 0,
  currentTime: 0,
  duration: 0,
};
export const App = () => {
  const [videoSelected, setVideoSelected] = useState(VideoList.AGORA);
  const [videoProgress, setVideoProgress] =
    useState<VideoProgress>(initialValues);
  const [renderedMeshes, setRenderedMeshes] = useState<MeshComponent[]>([]);

  // useMemo para evitar recrear el array en cada renderizado
  const meshComponents: FC[] = useMemo(() => [Mesh1, Mesh2, Mesh3, Mesh4], []);

  // useCallback para evitar recrear la función en cada renderizado
  const showNextMesh = useCallback(() => {
    if (renderedMeshes.length < meshComponents.length) {
      const nextIndex = renderedMeshes.length;
      const ComponentToRender = meshComponents[nextIndex];
      setRenderedMeshes((prevRenderedMeshes) => [
        ...prevRenderedMeshes,
        { type: ComponentToRender, props: { key: nextIndex } },
      ]);
    }
  }, [renderedMeshes, meshComponents]);

  // const renderNextMesh = () => {
  //   return renderedMeshes.map((meshComponent, index) => (
  //     <meshComponent.type key={index} {...meshComponent.props} />
  //   ));
  // };

  const renderNextMesh = () => {
    return renderedMeshes.map((meshComponent, index) => {
      // Generar una posición aleatoria
      const randomPosition = generateRandomPosition();

      // Clonar las propiedades existentes y agregar la posición aleatoria
      const updatedProps = { ...meshComponent.props, position: randomPosition };

      // Renderizar el componente con las propiedades actualizadas
      return <meshComponent.type key={index} {...updatedProps} />;
    });
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
