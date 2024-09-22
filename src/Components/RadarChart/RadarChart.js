import React from "react";
import { Radar } from "react-chartjs-2";
// import { Bar } from "react-chartjs-2"
// import { Chart as ChartJS } from 'chart.js/auto'
// import { rgba } from "style-value-types";

function RadarChart({chartData}) {
  console.log('chartData', chartData);

  const labels = [
    // "Ki R.",
    // "Ki C.",
    // "ATK",
    // "DEF",
    // "HP R."
    // "Ki Regeneration",
    // "Ki Charge Speed",
    // "Attack",
    // "Defence",
    // "HP Regeneration"
    "Ki Regen.",
    "Ki Charge Spd.",
    "Attack",
    "Defense",
    "HP Regen."
  ];

  const options = {
    responsive: true,
    pointBackgroundColor: 'rgba(0, 0, 0, 0.0)',
    pointBorderColor: 'rgba(0, 0, 0, 0.0)',
    pointHoverBackgroundColor: 'rgba(0, 0, 0, 0.0)',
    pointHoverBorderColor: 'rgba(0, 0, 0, 0.0)',
    elements: {
      line: {
        // borderWidth: 1 // for in game face pic
        borderWidth: 2 // for website
      }
    },
    events: [],
    plugins: {
      legend: { display: false },
      customCanvasBackgroundColor: {
        color: 'lightGreen',
      }

    },
    scales: {
      r: {
       animate: false,
       title: {
         display: false
       },
       pointLabels: {
        //  display: false, // for in game face pic
         color: 'yellow',
         borderRadius: 20,
         backdropColor: 'rgba(42,59,70,0.8)',
         backdropPadding: 10,
         font: {
           size: 20,
           weight: 'bold',
           family: "'system-ui'"
         }
       },
       grid: { color: 'rgba(220, 220, 220, 1)',  },
       angleLines: 
       { 
         color: 'rgba(240, 240, 240, 1)', 
        //  lineWidth: 1 // for in game face pic
         lineWidth: 2 // for website
        },
       border: {
         color: 'rgba(255, 0, 0, 0)'
       },
        min: 0,
        max: 10,
        ticks: {
          stepSize: 2.5,
          backdropColor: 'rgba(0,0,0,0)',
          font: {
            size: 0
          }
        }
      }
    }
  };


  let attackRange = {};
  let defenseRange = {};

  console.log('attackRange', attackRange);

  let attack = chartData.stats.attack;
  let defense = chartData.stats.defense;

  let i = 0;

  do {
    if (attack > 10) {
      attackRange[i] = 10;
      attack = attack - 10;
    } else {
      attackRange[i] = (attack % 10); 
      attack = 0;
    }

    if (defense > 10) {
      defenseRange[i] = 10;
      defense = defense - 10;
    } else {
      defenseRange[i] = (defense % 10); 
      defense = 0;
    }
    i++;
  }
  while (i < 4)

  console.log('attackRange', attackRange);
  console.log('defenseRange', defenseRange);

  const bluePower = {
    label: '',
    data: [ 0, 0, attackRange[3], defenseRange[3], chartData.stats.hp_regen],
    backgroundColor: 'rgba(0, 0, 255, 0.8)',
  }

  const greenPower = {
    label: '',
    data: [ 0, 0, attackRange[2], defenseRange[2], chartData.stats.hp_regen],
    backgroundColor: 'rgba(0, 150, 0, 0.8)',
  }

  const yellowPower = {
    label: '',
    data: [ 0, 0, attackRange[1], defenseRange[1], chartData.stats.hp_regen],
    backgroundColor: 'rgba(255, 255, 0, 0.8)',
  }

  const redPower = {
    label: 'goku',
    data: [ 0, 0, attackRange[0], defenseRange[0], chartData.stats.hp_regen],
    backgroundColor: 'rgba(255, 0, 0, 0.8)',
  }


  const whiteOutline = {
    label: '',
    data: [chartData.stats.ki_regen, chartData.stats.ki_charge, attackRange[0], defenseRange[0], chartData.stats.hp_regen],
    fill: false,
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    borderColor: 'rgba(255, 255, 255, 1)'
  }
  const orangeKi = {
    label: '',
    data: [ chartData.stats.ki_regen, chartData.stats.ki_charge, attackRange[0], 0, chartData.stats.hp_regen],
    backgroundColor: 'rgba(255, 165, 0, 0.8)',
  }


  const data = {
    labels: labels,
    datasets: [
    whiteOutline, 
    bluePower,
    greenPower,
    yellowPower,
    redPower,
    orangeKi
  ]
  }

  return <Radar data={data} options={options} />;
}

export default RadarChart