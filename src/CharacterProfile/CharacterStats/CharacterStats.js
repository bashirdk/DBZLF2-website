import React from "react";

import './CharacterStats.css'
import StatBar from "./StatBar/StatBar.js";

const CharacterStats = ({ character }) => {  

  const statContainer = (statName, stat) => (
    <div className="flex">
    <div className="block w-24 px-1 py-3 text-right">
      <p>{statName}</p>
    </div>
    <div className="w-full block py-2 pr-5 sm:pr-8 flex-auto">
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
      <h3 className="p-5 border-b"> Character Stats </h3>
      <div className="py-5">
        {attackStat}
        {defenseStat}
        {speedStat}
        {kiStat}
      </div>
    </div>
  );
}

export default CharacterStats;
