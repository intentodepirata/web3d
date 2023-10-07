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

export const MainMenu = ({ setVideoSelected, videoSelected, videoProgress }) => {
  const [open, setOpen] = React.useState(true)

  const handleClick = () => {
    setOpen(!open)
  }
  const handleSelected = (video) => {
    setVideoSelected(video)
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
          <ListItemButton sx={{ pl: 3 }} onClick={() => handleSelected(VideoList.AGORA)} selected={videoSelected === VideoList.AGORA}>
            <ListItemIcon>
              {videoSelected === VideoList.AGORA ? (
                <>
                  {' '}
                  <CircularProgress size={10} variant="determinate" value={videoProgress} />{' '}
                  <Typography variant="subtitle2" color="inherit">
                    {videoProgress.toFixed(0)}%
                  </Typography>{' '}
                </>
              ) : (
                <PlayArrowIcon />
              )}
            </ListItemIcon>
            <ListItemText primary="Agora-TechSolutions" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 3 }} onClick={() => handleSelected(VideoList.DREI)} selected={videoSelected === VideoList.DREI}>
            <ListItemIcon>
              <PlayArrowIcon />
              {videoSelected === VideoList.DREI && <CircularProgress size={10} variant="determinate" value={videoProgress} />}
            </ListItemIcon>
            <ListItemText primary="The Simpson-APP" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 3 }}>
            <ListItemIcon>
              <PlayArrowIcon />
            </ListItemIcon>
            <ListItemText primary="Crypto-APP" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 3 }}>
            <ListItemIcon>
              <PlayArrowIcon />
            </ListItemIcon>
            <ListItemText primary="My Releevant Store" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 3 }}>
            <ListItemIcon>
              <PlayArrowIcon />
            </ListItemIcon>
            <ListItemText primary="Real State App" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  )
}
