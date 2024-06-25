import React from "react";
import { useLocation } from 'react-router-dom'

import './CharacterStats.css'
import StatBar from "./StatBar/StatBar.js";

const CharacterStats = ({ character }) => {  
  const location = useLocation();

  console.log('location', location);

  if (location.state) {
    const {changeCharacterStats} = location.state;
    console.log(' changeCharacterStats', changeCharacterStats);
  } 

  const statContainer = (statName, stat, statClass) => (
    <div className="flex">
      <div className="block w-24 px-1 py-3 text-right">
        <p>{statName}</p>
      </div>
      <div className={`w-full block py-2 pr-5 sm:pr-8 flex-auto ${statClass}`}>
        <StatBar statName={statName} stat={stat} />
      </div>
    </div>
  );

  const attackStat  = statContainer("Attack", character.stats.attack, "attack-stat");
  const defenseStat = statContainer("Defense", character.stats.defense, "defense-stat");
  const speedStat   = statContainer("Speed", character.stats.speed, "speed-stat");
  const kiStat      = statContainer("Ki Usage", character.stats.ki, "ki-stat");

  return  (
    <div className="border-2 lf2-border-blue lf2-bg-blue rounded">
      <h3 className="p-5 border-b text-white"> Character Stats </h3>
      <div className="py-5 text-white">
        {attackStat}
        {defenseStat}
        {speedStat}
        {kiStat}
      </div>
    </div>
  );
}

export default CharacterStats;
