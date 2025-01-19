import { Avatar, ListItem, ListItemAvatar, ListItemButton, ListItemText, Stack, Typography } from '@mui/material';
import henry from '../assets/henry.jpg';
import React, { useEffect } from 'react';

type keyProps = {
  last: string,
  first: string,
  id: number,
  key: number,
  pos: string,
  inj: string,
  index: number
}


const PlayerCard = (props: keyProps) =>{

  const color = props.pos === 'WR' ? '#9dc9f5' : (props.pos === 'RB' ? '#eac0fc' : (props.pos === 'QB' ? '#83dea6' : '#f2d680'));
  const status = <Typography display={'inline'} variant='body2' color="error">{props.inj === "Questionable" ? 'Q' : (props.inj === "IR" ? 'IR' : '')}</Typography>;

  useEffect(() => {console.log()}, []);

    return (
      <ListItem disablePadding sx={{
        m:1.5, 
        backgroundColor: `${color}`, 
        color:'#333333', 
        borderRadius: '12px',
          }}>
        <ListItemButton sx={{borderRadius: '12px',}}>
          <Stack mr={1} direction={'row'} sx={{alignItems: 'center'}}>

            <ListItemAvatar>
                <Avatar alt='player' src={henry}/>
            </ListItemAvatar>
            <ListItemText primary={` ${props.index + 1})`} />
          </Stack>
  
          <ListItemText
            primary={
              <React.Fragment>
                <Typography >
                {props.pos + ' ' + '- ' + props.first + ' ' + props.last + ' ' }{status}
              </Typography>
              </React.Fragment>} 
            />
        </ListItemButton>
      </ListItem>
    )
  }

export default PlayerCard;