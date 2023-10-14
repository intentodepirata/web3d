import { createContext, useContext, useState } from "react";

const CameraContext = createContext({
  isMoving: false,
  startMovingCamera: () => {},
});

export const useCamera = () => {
  return useContext(CameraContext);
};

export const CameraProvider = ({ children }) => {
  const [isMoving, setIsMoving] = useState(false);

  const startMovingCamera = () => {
    setIsMoving((prev) => !prev);
  };

  return (
    <CameraContext.Provider value={{ isMoving, startMovingCamera }}>
      {children}
    </CameraContext.Provider>
  );
};
