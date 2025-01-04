import {Box, List,} from '@mui/material';
import { fetchData } from '../utility/fetch';
import { useEffect, useState } from 'react';
import PlayerCard from './player_card';



const Rank_list = () => {
  const [rankedActivePlayers, setRankedActivePlayers] = useState([])

  const getPlayerData = async () => {
    const allPlayers = await fetchData("https://api.sleeper.app/v1/players/nfl");
    const players = Object.keys(allPlayers).map(function(key) {
      return allPlayers[key]
    })
  
    const activePlayers: any = players?.filter((player) => player.search_rank !== null).sort((a, b) => a.search_rank - b.search_rank);
    
    setRankedActivePlayers(activePlayers)
    console.log(rankedActivePlayers)
    return activePlayers;
  }

  useEffect(() =>{getPlayerData()},[])

  return (
    <Box sx={{width:'50%', m:'auto', bgcolor: 'white'}}>
      <List sx={{outline:'1px solid red', width:'50%', m:'auto', minHeight:'100vh' }}>
          {rankedActivePlayers.slice(0,10).map(() => {
            return <PlayerCard/>
          })}
      </List>
    </Box>
  )
}

export default Rank_list