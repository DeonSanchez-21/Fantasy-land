import { ListItem, ListItemAvatar, ListItemButton, ListItemText, Stack, Typography } from '@mui/material';
import { primary, outline, secondary } from '../assets/team_colors';
import React, { useEffect } from 'react';
import { PlayerAvatar } from './avatar';

type keyProps = {
  last: string,
  first: string,
  id: number,
  key: number,
  pos: string,
  inj: string,
  index: number,
  jersey: string,
  team: string
}


const PlayerCard = (props: keyProps) =>{
  
  const player = {
    name: 'cmc',
    number: props.jersey,
    primaryColor: primary(props.team),
    secondaryColor: secondary(props.team),
    outlineColor: outline(props.team)
  }

  const color = props.pos === 'WR' ? '#9dc9f5' : (props.pos === 'RB' ? '#eac0fc' : (props.pos === 'QB' ? '#83dea6' : '#f2d680'));
  const status = <Typography display={'inline'} variant='body2' color="error">{props.inj === "Questionable" ? 'Q' : (props.inj === "IR" ? 'IR' : '')}</Typography>;

    return (
      <ListItem disablePadding sx={{
        mt:2, 
        backgroundColor: `#F5F5F5`,
        color:'#333333', 
        borderRadius: '12px',
        border: `4px solid ${color}`,
        height: '80px'
          }}>
        <ListItemButton sx={{borderRadius: '12px', height: '100%',pt:0, pb:0 }}>
          <Stack gap={0.5} direction={'row'} sx={{alignItems: 'center', height:'100%', mr:1}}>

            <ListItemAvatar>
                <PlayerAvatar player={player}/>
            </ListItemAvatar>
            <ListItemText sx={{ height: '100%', alignItems:'center', justifyContent:'center',display:'flex'}} primary={` ${props.index + 1})`} />
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