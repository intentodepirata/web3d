import { useState, FC } from "react";
import {
  Box,
  LinearProgress,
  Stack,
  ListSubheader,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";
import ComputerIcon from "@mui/icons-material/Computer";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { VideoList } from "@/constant/videoList";
import { MainMenuProps } from "@/interfaces/MainmenuProps";

export const MainMenu: FC<MainMenuProps> = ({
  setVideoSelected,
  videoSelected,
  videoProgress,
  showNextMesh,
}) => {
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  const handleSelected = (video: VideoList) => {
    setVideoSelected(video);
  };

  function formatTime(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  }
  return (
    <List
      sx={{ width: "100%", maxWidth: 400, bgcolor: "background.paper", p: 2 }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Main menu
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Send me a email" />
      </ListItemButton>
      <ListItemButton onClick={() => showNextMesh()}>
        <ListItemIcon>
          <SettingsEthernetIcon />
        </ListItemIcon>
        <ListItemText primary="Technologics" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <ComputerIcon />
        </ListItemIcon>
        <ListItemText primary="Projects" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {/* INICIO DEL ITEM */}
          <ListItemButton
            sx={{ display: "flex", justifycontent: "space-between" }}
            onClick={() => handleSelected(VideoList.AGORA)}
            selected={videoSelected === VideoList.AGORA}
          >
            <ListItemIcon>
              {videoSelected === VideoList.AGORA ? (
                <Stack direction="column">
                  <Typography variant="caption" color="inherit">
                    {formatTime(videoProgress.currentTime)} /{" "}
                    {formatTime(videoProgress.duration)}
                  </Typography>
                  <Box sx={{ width: "100%" }}>
                    <LinearProgress
                      variant="determinate"
                      value={videoProgress.progress}
                    />
                  </Box>
                </Stack>
              ) : (
                <PlayCircleIcon fontSize="small" />
              )}
            </ListItemIcon>
            <ListItemText sx={{ pl: 1 }} primary="Agora-TechSolutions" />
          </ListItemButton>
          {/* FIN DEL ITEM */}

          {/* INICIO DEL ITEM */}
          <ListItemButton
            sx={{ display: "flex", justifycontent: "space-between" }}
            onClick={() => handleSelected(VideoList.REAL)}
            selected={videoSelected === VideoList.REAL}
          >
            <ListItemIcon>
              {videoSelected === VideoList.REAL ? (
                <Stack direction="column">
                  <Typography variant="caption" color="inherit">
                    {formatTime(videoProgress.currentTime)} /{" "}
                    {formatTime(videoProgress.duration)}
                  </Typography>
                  <Box sx={{ width: "100%" }}>
                    <LinearProgress
                      variant="determinate"
                      value={videoProgress.progress}
                    />
                  </Box>
                </Stack>
              ) : (
                <PlayCircleIcon fontSize="small" />
              )}
            </ListItemIcon>
            <ListItemText sx={{ pl: 1 }} primary="Real State Website" />
          </ListItemButton>
          {/* FIN DEL ITEM */}

          {/* INICIO DEL ITEM */}
          <ListItemButton
            sx={{ display: "flex", justifycontent: "space-between" }}
            onClick={() => handleSelected(VideoList.SIMPSON)}
            selected={videoSelected === VideoList.SIMPSON}
          >
            <ListItemIcon>
              {videoSelected === VideoList.SIMPSON ? (
                <Stack direction="column">
                  <Typography variant="caption" color="inherit">
                    {formatTime(videoProgress.currentTime)} /{" "}
                    {formatTime(videoProgress.duration)}
                  </Typography>
                  <Box sx={{ width: "100%" }}>
                    <LinearProgress
                      variant="determinate"
                      value={videoProgress.progress}
                    />
                  </Box>
                </Stack>
              ) : (
                <PlayCircleIcon fontSize="small" />
              )}
            </ListItemIcon>
            <ListItemText sx={{ pl: 1 }} primary="The Simpson App" />
          </ListItemButton>
          {/* FIN DEL ITEM */}

          {/* INICIO DEL ITEM */}
          <ListItemButton
            sx={{ display: "flex", justifycontent: "space-between" }}
            onClick={() => handleSelected(VideoList.RICKY)}
            selected={videoSelected === VideoList.RICKY}
          >
            <ListItemIcon>
              {videoSelected === VideoList.RICKY ? (
                <Stack direction="column">
                  <Typography variant="caption" color="inherit">
                    {formatTime(videoProgress.currentTime)} /{" "}
                    {formatTime(videoProgress.duration)}
                  </Typography>
                  <Box sx={{ width: "100%" }}>
                    <LinearProgress
                      variant="determinate"
                      value={videoProgress.progress}
                    />
                  </Box>
                </Stack>
              ) : (
                <PlayCircleIcon fontSize="small" />
              )}
            </ListItemIcon>
            <ListItemText sx={{ pl: 1 }} primary="Rycky & Morty App" />
          </ListItemButton>
          {/* FIN DEL ITEM */}

          {/* INICIO DEL ITEM */}
          <ListItemButton
            sx={{ display: "flex", justifycontent: "space-between" }}
            onClick={() => handleSelected(VideoList.RELEEVANT)}
            selected={videoSelected === VideoList.RELEEVANT}
          >
            <ListItemIcon>
              {videoSelected === VideoList.RELEEVANT ? (
                <Stack direction="column">
                  <Typography variant="caption" color="inherit">
                    {formatTime(videoProgress.currentTime)} /{" "}
                    {formatTime(videoProgress.duration)}
                  </Typography>
                  <Box sx={{ width: "100%" }}>
                    <LinearProgress
                      variant="determinate"
                      value={videoProgress.progress}
                    />
                  </Box>
                </Stack>
              ) : (
                <PlayCircleIcon fontSize="small" />
              )}
            </ListItemIcon>
            <ListItemText sx={{ pl: 1 }} primary="My Releevant Store" />
          </ListItemButton>
          {/* FIN DEL ITEM */}

          {/* INICIO DEL ITEM */}
          <ListItemButton
            sx={{ display: "flex", justifycontent: "space-between" }}
            onClick={() => handleSelected(VideoList.CAFE)}
            selected={videoSelected === VideoList.CAFE}
          >
            <ListItemIcon>
              {videoSelected === VideoList.CAFE ? (
                <Stack direction="column">
                  <Typography variant="caption" color="inherit">
                    {formatTime(videoProgress.currentTime)} /{" "}
                    {formatTime(videoProgress.duration)}
                  </Typography>
                  <Box sx={{ width: "100%" }}>
                    <LinearProgress
                      variant="determinate"
                      value={videoProgress.progress}
                    />
                  </Box>
                </Stack>
              ) : (
                <PlayCircleIcon fontSize="small" />
              )}
            </ListItemIcon>
            <ListItemText sx={{ pl: 1 }} primary="Blog de café" />
          </ListItemButton>
          {/* FIN DEL ITEM */}

          {/* INICIO DEL ITEM */}
          <ListItemButton
            sx={{ display: "flex", justifycontent: "space-between" }}
            onClick={() => handleSelected(VideoList.CRYPTO)}
            selected={videoSelected === VideoList.CRYPTO}
          >
            <ListItemIcon>
              {videoSelected === VideoList.CRYPTO ? (
                <Stack direction="column">
                  <Typography variant="caption" color="inherit">
                    {formatTime(videoProgress.currentTime)} /{" "}
                    {formatTime(videoProgress.duration)}
                  </Typography>
                  <Box sx={{ width: "100%" }}>
                    <LinearProgress
                      variant="determinate"
                      value={videoProgress.progress}
                    />
                  </Box>
                </Stack>
              ) : (
                <PlayCircleIcon fontSize="small" />
              )}
            </ListItemIcon>
            <ListItemText sx={{ pl: 1 }} primary="Crypto Checker App" />
          </ListItemButton>
          {/* FIN DEL ITEM */}
        </List>
      </Collapse>
    </List>
  );
};
