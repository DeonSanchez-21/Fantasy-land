import { Avatar, ListItem, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material';
import henry from '../assets/henry.jpg';


const PlayerCard = () =>{
    return (
      <ListItem disablePadding sx={{m:0}}>
        <ListItemButton>
          <ListItemAvatar>
              <Avatar alt='player' src={henry}/>
          </ListItemAvatar>
  
          <ListItemText
            primary="player"
            secondary={'Secondary text' }
            />
        </ListItemButton>
      </ListItem>
    )
  }

export default PlayerCard;