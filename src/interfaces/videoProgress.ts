export interface VideoProgress {
  progress: number;
  currentTime: HTMLVideoElement["currentTime"];
  duration: HTMLVideoElement["duration"];
}
