import { Dispatch, SetStateAction } from "react";
import { VideoProgress } from "./videoProgress";

export interface HomeSceneProps {
  videoSelected: string;
  setVideoProgress: Dispatch<SetStateAction<VideoProgress>>;
  renderNextMesh: any;
  animateCamera: any;
  animation: string;
}
