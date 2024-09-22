import React from "react";
import { useLocation } from 'react-router-dom'

import './CharacterStats.css'
import StatBar from "./StatBar/StatBar.js";

import RadarChart from "../../RadarChart";
import { useState } from 'react';
import {UserData} from './../../../data/data';

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

  const radarChartStyle = { width: "100%", marginTop: "-100px", marginBottom: "-100px" } // website
  // const radarChartStyle = { width: "97px", backgroundColor: 'rgba(5,5,5,1)'} // in game face pics

  return  (
    <div className="border-2 lf2-border-blue lf2-bg-blue rounded relative" style={ {zIndex: "-2" }}>
      <h3 className="p-5 border-b text-white"> Character Stats </h3>
      <div className="p-5" style={radarChartStyle}>
        <div className="relative">
          <RadarChart chartData={character} />
          <div className="stat-circle1">
            <div className="stat-circle2"></div>
          </div>
        </div>
        
        
      </div>
      {/* <div className="py-5 text-white">
        {attackStat}
        {defenseStat}
        {speedStat}
        {kiStat}
      </div> */}
    </div>
  );
}

export default CharacterStats;
