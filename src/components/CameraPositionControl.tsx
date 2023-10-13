import React from "react";

import { useControls } from "leva";
import { useThree } from "@react-three/fiber";

export const CameraPositionControl = () => {
  const { camera } = useThree();
  const { position } = useControls("Camera Position", {
    x: camera.position.x,
    y: camera.position.y,
    z: camera.position.z,
  });
  //   console.log(camera.position.x);
  // Actualiza la posición de la cámara según los valores de Leva
  //   camera.position.set(position.x, position.y, position.z);

  return null; // Este componente no renderiza nada
};

export default CameraPositionControl;
