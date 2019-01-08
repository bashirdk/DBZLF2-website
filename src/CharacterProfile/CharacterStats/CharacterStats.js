import React from "react";

import './CharacterStats.css'

const CharacterStats = ({ character }) => {  

  const statContainer = (statName) => {
    return (
    <div className="border-b flex">
    <div className="block sm:inline-block w-24 px-3 py-5 bg-grey-lighter">
      <p>{statName}</p>
    </div>
    <div className="block md:inline-block">
      <div className="bar">
      </div>
    </div>        
    </div> );
  };

  const attackStat = statContainer("Attack");
  const defenseStat = statContainer("Defense");
  const speedStat = statContainer("Speed");
  const kiStat = statContainer("Ki Usage");

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
