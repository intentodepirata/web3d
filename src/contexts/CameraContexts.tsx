import { createContext, useContext, useState } from "react";

const CameraContext = createContext({
  isMoving: false,
  startMovingCamera: () => {},
  isMovingToTechlogics: false,
  goToTechlogics: () => {},
});

export const useCamera = () => {
  return useContext(CameraContext);
};

export const CameraProvider = ({ children }) => {
  const [isMoving, setIsMoving] = useState(false);
  const [isMovingToTechlogics, setIsMovingToTechlogics] = useState(false);

  const startMovingCamera = () => {
    setIsMoving((prev) => !prev);
  };
  const goToTechlogics = () => {
    setIsMovingToTechlogics((prev) => !prev);
  };

  return (
    <CameraContext.Provider
      value={{
        isMoving,
        startMovingCamera,
        isMovingToTechlogics,
        goToTechlogics,
      }}
    >
      {children}
    </CameraContext.Provider>
  );
};
