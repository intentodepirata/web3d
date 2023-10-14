import { createContext, useContext, useState } from "react";
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
import { generateRandomPosition } from "@/utils/randomPosition";

const MeshContext = createContext({
  showNextMesh: () => {},
  renderNextMesh: () => {},
});

export function useMesh() {
  return useContext(MeshContext);
}

export function MeshProvider({ children }) {
  const [renderedMeshes, setRenderedMeshes] = useState([]);
  const meshComponents = [
    Javascript,
    MaterialUI,
    Nestjs,
    Typescript,
    Nodejs,
    React,
    Docker,
    Postgresql,
    Mongodb,
    Javascript,
    MaterialUI,
    Nestjs,
    Typescript,
    Nodejs,
    React,
    Docker,
    Postgresql,
    Mongodb,
    Javascript,
    MaterialUI,
    Nestjs,
    Typescript,
    Nodejs,
    React,
    Docker,
    Postgresql,
    Mongodb,
  ];

  const showNextMesh = () => {
    if (renderedMeshes.length < meshComponents.length) {
      const nextIndex = renderedMeshes.length;
      const ComponentToRender = meshComponents[nextIndex];
      setRenderedMeshes((prevRenderedMeshes) => [
        ...prevRenderedMeshes,
        { type: ComponentToRender, props: { key: nextIndex } },
      ]);
    }
  };

  const renderNextMesh = () => {
    return renderedMeshes.map((meshComponent, index) => {
      const randomProps = generateRandomPosition();
      const updatedProps = { ...meshComponent.props, ...randomProps };
      return <meshComponent.type key={index} {...updatedProps} />;
    });
  };

  return (
    <MeshContext.Provider value={{ showNextMesh, renderNextMesh }}>
      {children}
    </MeshContext.Provider>
  );
}
