import {
  useBox,
  usePointToPointConstraint,
  useSphere,
} from "@react-three/cannon";
import { ThreeEvent } from "@react-three/fiber";
import { RefObject, useCallback, useEffect, useRef, createRef } from "react";
import { Mesh, Object3D, SpotLight } from "three";

function useDragConstraint(child: RefObject<Object3D>) {
  const cursor = createRef<Mesh>();

  const [, , api] = usePointToPointConstraint(cursor, child, {
    pivotA: [0, 0, 0],
    pivotB: [0, 0, 0],
  });

  // TODO: make it so we can start the constraint with it disabled
  useEffect(() => void api.disable(), []);

  const onPointerDown = useCallback((e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    //@ts-expect-error Investigate proper types here.
    e.target.setPointerCapture(e.pointerId);
    api.enable();
  }, []);

  const onPointerUp = useCallback(() => api.disable(), []);

  return { onPointerDown, onPointerUp };
}

export const Lamp = () => {
  const light = useRef<SpotLight>(null);
  const [fixed] = useSphere(
    () => ({ args: [1], position: [-4, 8, -3], type: "Static" }),
    useRef<Mesh>(null)
  );
  const [lamp] = useBox(
    () => ({
      angulardamping: 1.99,
      args: [1, 0, 5],
      linearDamping: 0.9,
      mass: 1,
      position: [0, 10, -5],
    }),
    useRef<Mesh>(null)
  );
  usePointToPointConstraint(fixed, lamp, {
    pivotA: [0, 0, 0],
    pivotB: [0, 3, 0],
  });
  const bind = useDragConstraint(lamp);
  return (
    <>
      <mesh ref={lamp} {...bind} scale={[0.4, 0.4, 0.4]}>
        <coneGeometry attach="geometry" args={[2, 2.5, 32]} />
        <meshStandardMaterial attach="material" />
        <pointLight intensity={20} distance={10} />
        <spotLight
          ref={light}
          position={[0, 10, -5]}
          angle={0.4}
          penumbra={1}
          intensity={0.3}
          castShadow
        />
      </mesh>
    </>
  );
};
