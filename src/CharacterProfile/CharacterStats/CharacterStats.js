import React from "react";

import './CharacterStats.css'
import StatBar from "./StatBar/StatBar.js";

const CharacterStats = ({ character }) => {  

  const statContainer = (statName, stat) => (
    <div className="flex">
    <div className="block md:inline-block w-24 px-3 py-3 text-right">
      <p>{statName}</p>
    </div>
    <div className="block md:inline-block py-2 pr-5 flex-auto">
      <StatBar statName={statName} stat={stat} />
    </div>        
    </div> 
  );

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
