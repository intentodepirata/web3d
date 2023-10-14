// MouseOverlayContext.js
import React, { createContext, useContext, useState } from "react";

const MouseOverlayContext = createContext({
  isHovered: false,
  setHovered: () => {},
  mouseX: 0,
  mouseY: 0,
  setMousePosition: () => {},
});

export function useMouseOverlay() {
  return useContext(MouseOverlayContext);
}

export function MouseOverlayProvider({ children }) {
  const [isHovered, setIsHovered] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const setHovered = (hovered) => {
    setIsHovered(hovered);
    console.log(isHovered);
  };

  const setMousePosition = (x, y) => {
    setMouseX(x);
    setMouseY(y);
  };

  return (
    <MouseOverlayContext.Provider
      value={{
        isHovered,
        setHovered,
        mouseX,
        mouseY,
        setMousePosition,
      }}
    >
      {children}
    </MouseOverlayContext.Provider>
  );
}
