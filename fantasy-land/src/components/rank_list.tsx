import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import henry from '../assets/henry.jpg';
import { fetchData } from '../utility/fetch';
import { useEffect } from 'react';

const getPlayerData = async () => {
  const allPlayers = await fetchData("https://api.sleeper.app/v1/players/nfl");
  const players = Object.keys(allPlayers).map(function(key) {
    return allPlayers[key]
  })

  const activePlayers = await Promise.all(players?.filter(async(player: any) => { player.active = true || player.first_name != "Duplicate" }).sort((a, b) => a.search_rank - b.search_rank));
  

  console.log(activePlayers)
  return activePlayers;
}

const list = [0,1,2,3,4];

const PlayerCard = () =>{
  return (
    <ListItem>
        <ListItemAvatar>
            <Avatar alt='Derek Henry' src={henry}/>
        </ListItemAvatar>

        <ListItemText
          primary="Derek Henry"
          secondary={'Secondary text' }
          />
    </ListItem>
  )
}

const Rank_list = () => {
  
  useEffect(() =>{getPlayerData()},[])

  return (
    <Box sx={{width:'50%', m:'auto', bgcolor: 'white'}}>
      <List sx={{outline:'1px solid red', width:'50%', m:'auto', minHeight:'100vh' }}>
          {list.map((element) => {
            return <PlayerCard/>
          })}
      </List>
    </Box>
  )
}

export default Rank_list