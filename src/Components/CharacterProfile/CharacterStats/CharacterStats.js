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

  const powerLevelContainer = (statName, stat) => (
    <div className="flex">
      <div className="block w-24 px-1 py-3 mr-3 text-right">
        <p>{statName}</p>
      </div>
      <div className="w-full block py-2 pr-5 pl-3 mr-6  sm:pr-8 flex-auto text-4xl power-level-value rounded">
        {/* {
          character.stats.power_level ?
          character.stats.power_level.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          :
          Math.round(stat.attack * stat.defense * 1000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        } */}
      </div>
    </div> 
  )

  document.documentElement.style.setProperty('--power-level-value', character.stats.power_level);

  const powerLevelStat = powerLevelContainer("Power Level", character.stats);
  const attackStat     = statContainer("Attack", character.stats.attack);
  const defenseStat    = statContainer("Defense", character.stats.defense);
  const speedStat      = statContainer("Speed", character.stats.speed);
  const kiStat         = statContainer("Ki Usage", character.stats.ki);

  return  (
    <div className="border-2 lf2-border-blue lf2-bg-blue rounded">
      <h3 className="p-5 border-b text-white"> Character Stats </h3>
      <div className="py-5 text-white">
        {powerLevelStat} <br></br>
        {attackStat}
        {defenseStat}
        {speedStat}
        {kiStat}
      </div>
    </div>
  );
}

export default CharacterStats;
