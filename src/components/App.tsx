import { Canvas, useThree } from "@react-three/fiber";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { mainStyles, sectionStyles, sectionMenuStyles } from "@/styles";
import { HomeScene } from "@/scenes";
import { CameraPositionControl, MainMenu, VideoPlane } from "@/components";
import { useState, FC, useMemo, useCallback, Suspense } from "react";
import { VideoList } from "@/constant/videoList";
import { MeshComponent } from "@/types/components";
import { VideoProgress } from "@/interfaces/videoProgress";
import { generateRandomPosition } from "@/utils/randomPosition";
import {
  Javascript,
  MaterialUI,
  Nestjs,
  Typescript,
  Nodejs,
  React,
  Docker,
  Postgresql,
  Mongodb,
  Avatar,
} from "@/models";
import { ScrollControls } from "@react-three/drei";
import * as THREE from "three";
import { useControls } from "leva";

const CURVE = new THREE.CatmullRomCurve3([
  new THREE.Vector3(0, 30, 60),
  new THREE.Vector3(0, 30, 80),
  new THREE.Vector3(60, 30, 45),
  new THREE.Vector3(80, 30, 0),
  new THREE.Vector3(60, 30, -45),
  new THREE.Vector3(0, 30, -80),
  new THREE.Vector3(0, 30, -60),
]);

export const App = () => {
  // const [videoSelected, setVideoSelected] = useState(VideoList.AGORA);
  // const [videoProgress, setVideoProgress] =
  //   useState<VideoProgress>(initialValues);
  const [renderedMeshes, setRenderedMeshes] = useState<MeshComponent[]>([]);

  const meshComponents: FC[] = useMemo(
    () => [
      Javascript,
      Nestjs,
      React,
      Typescript,
      MaterialUI,
      Nodejs,
      Docker,
      Postgresql,
      Mongodb,
      Javascript,
      Nestjs,
      React,

      Typescript,
      MaterialUI,
      Nodejs,
      Docker,
      Postgresql,
      Mongodb,
      Javascript,
      Nestjs,
      React,
      Typescript,
      MaterialUI,
      Nodejs,
      Docker,
      Postgresql,
      Mongodb,
      Javascript,
    ],
    []
  );

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

  const renderNextMesh = () => {
    return renderedMeshes.map((meshComponent, index) => {
      // Generar posición y rotación aleatoria
      const randomProps = generateRandomPosition();

      // Clonar las propiedades existentes y agregar la posición y rotación aleatoria
      const updatedProps = { ...meshComponent.props, ...randomProps };

      // Renderizar el componente con las propiedades actualizadas
      return <meshComponent.type key={index} {...updatedProps} />;
    });
  };

  // function handleCameraRotation() {
  //   const { camera } = useThree();
  //   const targetPosition = new THREE.Vector3(x, y, z); // Define la posición a la que deseas que la cámara rote

  //   camera.position.copy(targetPosition); // Establece la posición de la cámara
  //   camera.lookAt(0, 0, 0); // Opcional: Haz que la cámara mire al origen o cualquier otro punto
  // }
  const [animateCamera, setAnimateCamera] = useState(false);
  const { animation } = useControls({
    animation: {
      options: ["Standing", "Falling", "Typing"],
    },
  });
  console.log(animation);
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
            // setVideoSelected={setVideoSelected}
            // videoSelected={videoSelected}
            // videoProgress={videoProgress}
            showNextMesh={showNextMesh}
            setAnimateCamera={setAnimateCamera}
          />
        </Box>
      </Box>
      <Canvas
        style={{ position: "fixed", inset: 0 }}
        shadows
        camera={{ position: [0, 40, 60], fov: 16 }}
      >
        {/* <CameraPositionControl /> */}
        {/* <ScrollControls distance={5} enabled damping={1}> */}
        <HomeScene
          // videoSelected={videoSelected}
          // setVideoProgress={setVideoProgress}
          renderNextMesh={renderNextMesh}
          animateCamera={animateCamera}
          animation={animation}
        />
        <VideoPlane
        // videoUrl={videoSelected}
        // setVideoProgress={setVideoProgress}
        />

        {/* </ScrollControls> */}
      </Canvas>
    </>
  );
};
