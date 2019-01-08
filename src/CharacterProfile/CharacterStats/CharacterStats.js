import React from "react";

import './CharacterStats.css'

const CharacterStats = ({ character }) => {  

  const barStyle = "mx-2 w-full h-full"

  const statContainer = (statName, stat) => {

    const statStyle = {
      width: stat
    }

    return (
    <div className="flex">
    <div className="block md:inline-block w-24 px-3 py-3 text-right">
      <p>{statName}</p>
    </div>
    <div className="block md:inline-block py-2 pr-5 flex-auto">
      <div className="mx-2 w-full h-full bg-grey-lighter relative">
        <span className="inline-block h-full bg-red" style={statStyle}></span>
      </div>
    </div>        
    </div> );
  };

  const attackStat = statContainer("Attack", character.stats.attack);
  const defenseStat = statContainer("Defense", character.stats.defense);
  const speedStat = statContainer("Speed", character.stats.speed);
  const kiStat = statContainer("Ki Usage", character.stats.ki);

  return  (
    <div className="border rounded">
      <p className="p-2 border-b"> CHARACTER STATS </p>
      {attackStat}
      {defenseStat}
      {speedStat}
      {kiStat}

    </div>
  );
}

export default CharacterStats;
