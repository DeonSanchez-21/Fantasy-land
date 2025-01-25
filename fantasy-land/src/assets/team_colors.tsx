export const nflTeamColors: Record<string, { primaryColor: string;outline: string, secondaryColor: string }> = {
    arizonaCardinals: { primaryColor: "#97233F", outline: "black" , secondaryColor: "#FFFFFF" },
    atlantaFalcons: { primaryColor: "black", outline: "#a71930" , secondaryColor: "white" },
    baltimoreRavens: { primaryColor: "#241773", outline: "black" , secondaryColor: "#000000" },
    buffaloBills: { primaryColor: "#00338D", outline: "#C60C30" , secondaryColor: "white" },
    carolinaPanthers: { primaryColor: "#0085CA", outline: "black" , secondaryColor: "white" },
    chicagoBears: { primaryColor: "#0B162A", outline: "#c83803" , secondaryColor: "white" },
    cincinnatiBengals: { primaryColor: "#FB4F14", outline: "black" , secondaryColor: "#000000" },
    clevelandBrowns: { primaryColor: "#311D00", outline: "white" , secondaryColor: "#FF3C00" },
    dallasCowboys: { primaryColor: "#041E42", outline: "#311D00" , secondaryColor: "#041E42" },
    denverBroncos: { primaryColor: "#FB4F14", outline: "#002244" , secondaryColor: "white" },
    detroitLions: { primaryColor: "#000000", outline: "#B0B7BC" , secondaryColor: "#0076b6" },
    greenBayPackers: { primaryColor: "#203731", outline: "white" , secondaryColor: "#FFB612" },
    houstonTexans: { primaryColor: "#03202F", outline: "#03aff1" , secondaryColor: "#A71930" },
    indianapolisColts: { primaryColor: "#002C5F", outline: "black" , secondaryColor: "white" },
    jacksonvilleJaguars: { primaryColor: "#006778", outline: "black" , secondaryColor: "white" },
    kansasCityChiefs: { primaryColor: "#E31837", outline: "#FFB81C" , secondaryColor: "#FFB81C" },
    lasVegasRaiders: { primaryColor: "#000000", outline: "black" , secondaryColor: "#A5ACAF" },
    losAngelesChargers: { primaryColor: "#0080C6", outline: "#FFC20E" , secondaryColor: "white" },
    losAngelesRams: { primaryColor: "#003594", outline: "white" , secondaryColor: "#ffd100" },
    miamiDolphins: { primaryColor: "#008E97", outline: "#FC4C02" , secondaryColor: "white" },
    minnesotaVikings: { primaryColor: "#4F2683", outline: "#FFC62F" , secondaryColor: "#FFC62F" },
    newEnglandPatriots: { primaryColor: "#002244", outline: "#C60C30" , secondaryColor: "white" },
    newOrleansSaints: { primaryColor: "#D3BC8D", outline: "#101820" , secondaryColor: "white" },
    newYorkGiants: { primaryColor: "#0B2265", outline: "#a71930" , secondaryColor: "white" },
    newYorkJets: { primaryColor: "#125740", outline: "black" , secondaryColor: "#000000" },
    philadelphiaEagles: { primaryColor: "#004C54", outline: "black" , secondaryColor: "#A5ACAF" },
    pittsburghSteelers: { primaryColor: "#FFB612", outline: "#FFB612" , secondaryColor: "black" },
    sanFrancisco49ers: { primaryColor: "#AA0000", outline: "black" , secondaryColor: "white" },
    seattleSeahawks: { primaryColor: "#002244", outline: "#69BE28" , secondaryColor: "#A5acaf" },
    tampaBayBuccaneers: { primaryColor: "#D50A0A", outline: "black" , secondaryColor: "white" },
    tennesseeTitans: { primaryColor: "#0C2340", outline: "#4B92DB" , secondaryColor: "white" },
    washingtonCommanders: { primaryColor: "#5A1414", outline: "white" , secondaryColor: "#FFB612" },
  };

  export function primary(org:string) {
      switch (org) {
        case 'SF':
          return nflTeamColors.sanFrancisco49ers.primaryColor;
        case 'MIA':
          return nflTeamColors.miamiDolphins.primaryColor;
        case 'BUF':
          return nflTeamColors.buffaloBills.primaryColor;
        case 'KC':
          return nflTeamColors.kansasCityChiefs.primaryColor;
        case 'DAL':
          return nflTeamColors.dallasCowboys.primaryColor;
        case 'MIN':
          return nflTeamColors.minnesotaVikings.primaryColor;
        case 'PHI':
          return nflTeamColors.philadelphiaEagles.primaryColor;
        case 'WAS':
          return nflTeamColors.washingtonCommanders.primaryColor;
        case 'NYG':
          return nflTeamColors.newYorkGiants.primaryColor;
        case 'LAR':
          return nflTeamColors.losAngelesRams.primaryColor;
        case 'LAC':
          return nflTeamColors.losAngelesChargers.primaryColor;
        case 'SEA':
          return nflTeamColors.seattleSeahawks.primaryColor;
        case 'ARI':
          return nflTeamColors.arizonaCardinals.primaryColor;
        case 'NE':
          return nflTeamColors.newEnglandPatriots.primaryColor;
        case 'NYJ':
          return nflTeamColors.newYorkJets.primaryColor;
        case 'CIN':
          return nflTeamColors.cincinnatiBengals.primaryColor;
        case 'BAL':
          return nflTeamColors.baltimoreRavens.primaryColor;
        case 'PIT':
          return nflTeamColors.pittsburghSteelers.primaryColor;
        case 'CLE':
          return nflTeamColors.clevelandBrowns.primaryColor;
        case 'LV':
          return nflTeamColors.lasVegasRaiders.primaryColor;
        case 'DEN':
          return nflTeamColors.denverBroncos.primaryColor;
        case 'IND':
          return nflTeamColors.indianapolisColts.primaryColor;
        case 'TEN':
          return nflTeamColors.tennesseeTitans.primaryColor;
        case 'JAX':
          return nflTeamColors.jacksonvilleJaguars.primaryColor;
        case 'HOU':
          return nflTeamColors.houstonTexans.primaryColor;
        case 'TB':
          return nflTeamColors.tampaBayBuccaneers.primaryColor;
        case 'ATL':
          return nflTeamColors.atlantaFalcons.primaryColor;
        case 'CAR':
          return nflTeamColors.carolinaPanthers.primaryColor;
        case 'NO':
          return nflTeamColors.newOrleansSaints.primaryColor;
        case 'DET':
          return nflTeamColors.detroitLions.primaryColor;
        case 'GB':
          return nflTeamColors.greenBayPackers.primaryColor;
        case 'CHI':
          return nflTeamColors.chicagoBears.primaryColor;
        default:
          return 'White';
      }
    }
  export function outline(org:string) {
      switch (org) {
        case 'SF':
          return nflTeamColors.sanFrancisco49ers.outline;
        case 'MIA':
          return nflTeamColors.miamiDolphins.outline;
        case 'BUF':
          return nflTeamColors.buffaloBills.outline;
        case 'KC':
          return nflTeamColors.kansasCityChiefs.outline;
        case 'DAL':
          return nflTeamColors.dallasCowboys.outline;
        case 'MIN':
          return nflTeamColors.minnesotaVikings.outline;
        case 'PHI':
          return nflTeamColors.philadelphiaEagles.outline;
        case 'WAS':
          return nflTeamColors.washingtonCommanders.outline;
        case 'NYG':
          return nflTeamColors.newYorkGiants.outline;
        case 'LAR':
          return nflTeamColors.losAngelesRams.outline;
        case 'LAC':
          return nflTeamColors.losAngelesChargers.outline;
        case 'SEA':
          return nflTeamColors.seattleSeahawks.outline;
        case 'ARI':
          return nflTeamColors.arizonaCardinals.outline;
        case 'NE':
          return nflTeamColors.newEnglandPatriots.outline;
        case 'NYJ':
          return nflTeamColors.newYorkJets.outline;
        case 'CIN':
          return nflTeamColors.cincinnatiBengals.outline;
        case 'BAL':
          return nflTeamColors.baltimoreRavens.outline;
        case 'PIT':
          return nflTeamColors.pittsburghSteelers.outline;
        case 'CLE':
          return nflTeamColors.clevelandBrowns.outline;
        case 'LV':
          return nflTeamColors.lasVegasRaiders.outline;
        case 'DEN':
          return nflTeamColors.denverBroncos.outline;
        case 'IND':
          return nflTeamColors.indianapolisColts.outline;
        case 'TEN':
          return nflTeamColors.tennesseeTitans.outline;
        case 'JAX':
          return nflTeamColors.jacksonvilleJaguars.outline;
        case 'HOU':
          return nflTeamColors.houstonTexans.outline;
        case 'TB':
          return nflTeamColors.tampaBayBuccaneers.outline;
        case 'ATL':
          return nflTeamColors.atlantaFalcons.outline;
        case 'CAR':
          return nflTeamColors.carolinaPanthers.outline;
        case 'NO':
          return nflTeamColors.newOrleansSaints.outline;
        case 'DET':
          return nflTeamColors.detroitLions.outline;
        case 'GB':
          return nflTeamColors.greenBayPackers.outline;
        case 'CHI':
          return nflTeamColors.chicagoBears.outline;
        default:
          return 'White';
      }
    }
    export function secondary(org:string) {
      switch (org) {
        case 'WAS':
          return nflTeamColors.washingtonCommanders.secondaryColor;
        case 'NYG':
          return nflTeamColors.newYorkGiants.secondaryColor;
        case 'LAR':
          return nflTeamColors.losAngelesRams.secondaryColor;
        case 'LAC':
          return nflTeamColors.losAngelesChargers.secondaryColor;
        case 'SEA':
          return nflTeamColors.seattleSeahawks.secondaryColor;
        case 'ARI':
          return nflTeamColors.arizonaCardinals.secondaryColor;
        case 'NE':
          return nflTeamColors.newEnglandPatriots.secondaryColor;
        case 'PIT':
          return nflTeamColors.pittsburghSteelers.secondaryColor;
        case 'CLE':
          return nflTeamColors.clevelandBrowns.secondaryColor;
        case 'LV':
          return nflTeamColors.lasVegasRaiders.secondaryColor;
        case 'DEN':
          return nflTeamColors.denverBroncos.secondaryColor;
        case 'IND':
          return nflTeamColors.indianapolisColts.secondaryColor;
        case 'TEN':
          return nflTeamColors.tennesseeTitans.secondaryColor;
        case 'JAX':
          return nflTeamColors.jacksonvilleJaguars.secondaryColor;
        case 'HOU':
          return nflTeamColors.houstonTexans.secondaryColor;
        case 'TB':
          return nflTeamColors.tampaBayBuccaneers.secondaryColor;
        case 'ATL':
          return nflTeamColors.atlantaFalcons.secondaryColor;
        case 'CAR':
          return nflTeamColors.carolinaPanthers.secondaryColor;
        case 'NO':
          return nflTeamColors.newOrleansSaints.secondaryColor;
        case 'DET':
          return nflTeamColors.detroitLions.secondaryColor;
        case 'GB':
          return nflTeamColors.greenBayPackers.secondaryColor;
        case 'CHI':
          return nflTeamColors.chicagoBears.secondaryColor;
        default:
          return 'White';
      }
    }
  