import React, { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { useControls } from "leva";

export const CameraPositionViewer = () => {
  const { camera } = useThree();

  // Define una referencia a la posición de la cámara
  const cameraPositionRef = React.useRef(camera.position);

  // Crea un objeto que representa la posición de la cámara
  const cameraPosition = {
    x: cameraPositionRef.current.x,
    y: cameraPositionRef.current.y,
    z: cameraPositionRef.current.z,
  };

  // Usa Leva para mostrar la posición actual de la cámara
  useControls("Camera Position", cameraPosition);

  useEffect(() => {
    // Actualiza la referencia a la posición de la cámara en cada fotograma
    cameraPositionRef.current = camera.position;
  });

  return null; // Este componente no renderiza nada
};

export default CameraPositionViewer;
