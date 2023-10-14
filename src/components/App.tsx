import { Canvas, useThree } from "@react-three/fiber";
import { Typography, Box } from "@mui/material";
import { mainStyles, sectionStyles, sectionMenuStyles } from "@/styles";
import { useState, FC, useMemo, useCallback, Suspense } from "react";
import { MeshComponent } from "@/types/components";
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
} from "@/models";
import { ScrollControls } from "@react-three/drei";
import { MainMenu } from "@/components";
import { HomeScene } from "@/scenes";

export default function App() {
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

  return (
    <>
      <Box component="main" sx={mainStyles}>
        <Box component="section" sx={sectionStyles}>
          <Typography component="h2" variant="h5" color="primary">
            By Antonio Alvarez - @intentodepirata
          </Typography>
        </Box>

        <Box component="section" sx={sectionMenuStyles}>
          <MainMenu showNextMesh={showNextMesh} />
        </Box>
      </Box>
      <Canvas
        style={{ position: "fixed", inset: 0 }}
        shadows
        camera={{ position: [0, 40, 60], fov: 16 }}
        legacy={true}
      >
        {/* <CameraPositionControl /> */}
        <ScrollControls distance={5} enabled damping={1}>
          <HomeScene renderNextMesh={renderNextMesh} />
        </ScrollControls>
      </Canvas>
    </>
  );
}
