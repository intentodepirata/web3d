import { Dispatch, SetStateAction } from "react";
import { VideoProgress } from "./videoProgress";
import { VideoList } from "@/constant/videoList";

export interface MainMenuProps {
  setVideoSelected: Dispatch<SetStateAction<VideoList>>;
  videoSelected: string;
  videoProgress: VideoProgress;
  showNextMesh: () => void;
}
