import React, { createContext, useContext, useState, useEffect } from "react";

import { initialVideoProgressValues, VideoList } from "@/constant/videoList";

const ElapsedTimeContext = createContext({
  videoSelected: VideoList.AGORA, // Valor inicial de videoSelected
  setVideoSelected: () => {}, // Función para actualizar videoSelected
  video: document.createElement("video"), // Valor inicial de video
  videoProgress: initialVideoProgressValues, // Valor inicial de videoProgress
  handleSelected: () => {},
});

export function ElapsedTimeProvider({ children }) {
  const [videoSelected, setVideoSelected] = useState(VideoList.AGORA);
  const [videoProgress, setVideoProgress] = useState(
    initialVideoProgressValues
  );
  const [video, setVideo] = useState<HTMLVideoElement>(() =>
    Object.assign(document.createElement("video"), {
      src: videoSelected,
      crossOrigin: "anonymous",
      loop: true,
      muted: true,
      CrossOrigin: "anonymous",
    })
  );

  useEffect(() => {
    if (video) {
      try {
        video.src = videoSelected;
        video.play();
        setVideo(video);

        const updateVideoProgress = () => {
          if (video.duration) {
            const progress = (video.currentTime / video.duration) * 100;
            setVideoProgress({
              progress,
              currentTime: video.currentTime,
              duration: video.duration,
            });
          }
        };

        video.addEventListener("timeupdate", updateVideoProgress);

        return () => {
          video.removeEventListener("timeupdate", updateVideoProgress);
        };
      } catch (error) {
        console.error("Error al cargar y reproducir el video:", error);
      }
    }
  }, [videoSelected, video, setVideoProgress]);

  const handleSelected = (item) => {
    setVideoSelected(item);
  };

  return (
    <ElapsedTimeContext.Provider
      value={{
        videoSelected,
        handleSelected,
        video,
        videoProgress,
      }}
    >
      {children}
    </ElapsedTimeContext.Provider>
  );
}

export function useElapsedTime() {
  return useContext(ElapsedTimeContext);
}
