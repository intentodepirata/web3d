import { Dispatch, SetStateAction } from "react";

export interface MainMenuProps {
  showNextMesh: () => void;
  setAnimateCamera: Dispatch<SetStateAction<boolean>>;
}
