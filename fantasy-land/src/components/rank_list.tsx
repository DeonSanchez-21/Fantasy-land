import {Box, List,} from '@mui/material';
import { fetchData } from '../utility/fetch';
import { useEffect, useState } from 'react';
import PlayerCard from './player_card';


const Rank_list = () => {
  const [rankedActivePlayers, setRankedActivePlayers] = useState<[{first_name: string, last_name: string, fantasy_data_id: number, fantasy_positions: string, injury_status: string, number: string, team: string}]>()

  const getPlayerData = async () => {
    const allPlayers = await fetchData("https://api.sleeper.app/v1/players/nfl");
    const players = Object.keys(allPlayers).map(function(key) {
      return allPlayers[key]
    });
    const activePlayers: any = players?.filter((player) => (
      player.search_rank !== null && 
      player.fantasy_data_id !== null && 
      player.active === true && 
      player.team !== null && 
      player.fantasy_positions &&
      player.fantasy_positions[0] !== 'DB' &&
      player.fantasy_positions[0] !== 'LS' &&
      player.fantasy_positions[0] !== 'OL' &&
      player.fantasy_positions[0] !== 'LB' &&
      player.fantasy_positions[0] !== 'OG' &&
      player.fantasy_positions[0] !== 'P' &&
      player.fantasy_positions[0] !== 'K' &&
      player.fantasy_positions[0] !== 'DL' 
    )).sort((a, b) => a.search_rank - b.search_rank);
    
    setRankedActivePlayers(activePlayers);
  }

  useEffect(() =>{getPlayerData()},[]);
  useEffect(() =>{console.log(rankedActivePlayers)},[rankedActivePlayers])



  const playerlist = rankedActivePlayers?.map((player, index) => { 
    const first_name: string = player.first_name;
    const last_name: string = player.last_name;
    const id : number = player.fantasy_data_id;
    const pos : string = player.fantasy_positions[0];
    const inj : string = player.injury_status;
    const num : number = index;
    const jersey : string = player.number;
    const team: string = player.team;
    return <PlayerCard index={num} first={first_name} last={last_name} key={id} id={id} pos={pos} inj={inj} jersey={jersey} team={team}/> 
  })

  return (
          
    <Box sx={{width:'100%', m:'auto', backdropFilter: 'blur(10px)',position:'relative'}}>

      <List sx={{width:'50%', m:'auto'}}>
          {playerlist}
      </List>
    </Box>
  )
}

export default Rank_list