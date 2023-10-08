import * as React from 'react'
import ListSubheader from '@mui/material/ListSubheader'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import CircularProgress from '@mui/material/CircularProgress'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import DraftsIcon from '@mui/icons-material/Drafts'
import SendIcon from '@mui/icons-material/Send'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import StarBorder from '@mui/icons-material/StarBorder'
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet'
import ComputerIcon from '@mui/icons-material/Computer'
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import { VideoList } from '@/constant/videoList'
import Typography from '@mui/material/Typography'
import { Box, LinearProgress, Stack } from '@mui/material'

export const MainMenu = ({ setVideoSelected, videoSelected, videoProgress }) => {
  const [open, setOpen] = React.useState(true)
  console.log(videoProgress.progress)
  const handleClick = () => {
    setOpen(!open)
  }
  const handleSelected = (video) => {
    setVideoSelected(video)
  }

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = Math.floor(seconds % 60)
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`
  }
  return (
    <List
      sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.paper', p: 2 }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Main menu
        </ListSubheader>
      }>
      <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Send me a email" />
      </ListItemButton>
      <ListItemButton>
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
          <ListItemButton sx={{ pl: 0.5 }} onClick={() => handleSelected(VideoList.AGORA)} selected={videoSelected === VideoList.AGORA}>
            <ListItemIcon>
              {videoSelected === VideoList.AGORA ? (
                <Stack direction="column">
                  <Typography variant="caption" color="inherit">
                    {formatTime(videoProgress.currentTime)} / {formatTime(videoProgress.duration)}
                  </Typography>
                  <Box sx={{ width: '100%' }}>
                    <LinearProgress variant="determinate" value={videoProgress.progress} />
                  </Box>
                </Stack>
              ) : (
                <PlayArrowIcon />
              )}
            </ListItemIcon>
            <ListItemText sx={{ pl: 1 }} primary="Agora-TechSolutions" />
          </ListItemButton>
          {/* FIN DEL ITEM */}

          {/* INICIO DEL ITEM */}
          <ListItemButton sx={{ pl: 0.5 }} onClick={() => handleSelected(VideoList.REAL)} selected={videoSelected === VideoList.REAL}>
            <ListItemIcon>
              {videoSelected === VideoList.REAL ? (
                <Stack direction="column">
                  <Typography variant="caption" color="inherit">
                    {formatTime(videoProgress.currentTime)} / {formatTime(videoProgress.duration)}
                  </Typography>
                  <Box sx={{ width: '100%' }}>
                    <LinearProgress variant="determinate" value={videoProgress.progress} />
                  </Box>
                </Stack>
              ) : (
                <PlayArrowIcon />
              )}
            </ListItemIcon>
            <ListItemText sx={{ pl: 1 }} primary="Real State Website" />
          </ListItemButton>
          {/* FIN DEL ITEM */}

          {/* INICIO DEL ITEM */}
          <ListItemButton sx={{ pl: 0.5 }} onClick={() => handleSelected(VideoList.SIMPSON)} selected={videoSelected === VideoList.SIMPSON}>
            <ListItemIcon>
              {videoSelected === VideoList.SIMPSON ? (
                <Stack direction="column">
                  <Typography variant="caption" color="inherit">
                    {formatTime(videoProgress.currentTime)} / {formatTime(videoProgress.duration)}
                  </Typography>
                  <Box sx={{ width: '100%' }}>
                    <LinearProgress variant="determinate" value={videoProgress.progress} />
                  </Box>
                </Stack>
              ) : (
                <PlayArrowIcon />
              )}
            </ListItemIcon>
            <ListItemText sx={{ pl: 1 }} primary="The Simpson App" />
          </ListItemButton>
          {/* FIN DEL ITEM */}

          {/* INICIO DEL ITEM */}
          <ListItemButton sx={{ pl: 0.5 }} onClick={() => handleSelected(VideoList.RICKY)} selected={videoSelected === VideoList.RICKY}>
            <ListItemIcon>
              {videoSelected === VideoList.RICKY ? (
                <Stack direction="column">
                  <Typography variant="caption" color="inherit">
                    {formatTime(videoProgress.currentTime)} / {formatTime(videoProgress.duration)}
                  </Typography>
                  <Box sx={{ width: '100%' }}>
                    <LinearProgress variant="determinate" value={videoProgress.progress} />
                  </Box>
                </Stack>
              ) : (
                <PlayArrowIcon />
              )}
            </ListItemIcon>
            <ListItemText sx={{ pl: 1 }} primary="Rycky & Morty App" />
          </ListItemButton>
          {/* FIN DEL ITEM */}

          {/* INICIO DEL ITEM */}
          <ListItemButton sx={{ pl: 0.5 }} onClick={() => handleSelected(VideoList.RELEEVANT)} selected={videoSelected === VideoList.RELEEVANT}>
            <ListItemIcon>
              {videoSelected === VideoList.RELEEVANT ? (
                <Stack direction="column">
                  <Typography variant="caption" color="inherit">
                    {formatTime(videoProgress.currentTime)} / {formatTime(videoProgress.duration)}
                  </Typography>
                  <Box sx={{ width: '100%' }}>
                    <LinearProgress variant="determinate" value={videoProgress.progress} />
                  </Box>
                </Stack>
              ) : (
                <PlayArrowIcon />
              )}
            </ListItemIcon>
            <ListItemText sx={{ pl: 1 }} primary="My Releevant Store" />
          </ListItemButton>
          {/* FIN DEL ITEM */}

          {/* INICIO DEL ITEM */}
          <ListItemButton sx={{ pl: 0.5 }} onClick={() => handleSelected(VideoList.CAFE)} selected={videoSelected === VideoList.CAFE}>
            <ListItemIcon>
              {videoSelected === VideoList.CAFE ? (
                <Stack direction="column">
                  <Typography variant="caption" color="inherit">
                    {formatTime(videoProgress.currentTime)} / {formatTime(videoProgress.duration)}
                  </Typography>
                  <Box sx={{ width: '100%' }}>
                    <LinearProgress variant="determinate" value={videoProgress.progress} />
                  </Box>
                </Stack>
              ) : (
                <PlayArrowIcon />
              )}
            </ListItemIcon>
            <ListItemText sx={{ pl: 1 }} primary="Blog de café" />
          </ListItemButton>
          {/* FIN DEL ITEM */}

          {/* INICIO DEL ITEM */}
          <ListItemButton sx={{ pl: 0.5 }} onClick={() => handleSelected(VideoList.CRYPTO)} selected={videoSelected === VideoList.CRYPTO}>
            <ListItemIcon>
              {videoSelected === VideoList.CRYPTO ? (
                <Stack direction="column">
                  <Typography variant="caption" color="inherit">
                    {formatTime(videoProgress.currentTime)} / {formatTime(videoProgress.duration)}
                  </Typography>
                  <Box sx={{ width: '100%' }}>
                    <LinearProgress variant="determinate" value={videoProgress.progress} />
                  </Box>
                </Stack>
              ) : (
                <PlayArrowIcon />
              )}
            </ListItemIcon>
            <ListItemText sx={{ pl: 1 }} primary="Crypto Checker App" />
          </ListItemButton>
          {/* FIN DEL ITEM */}
        </List>
      </Collapse>
    </List>
  )
}
