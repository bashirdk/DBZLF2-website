import React from "react";

import './StatBar.css'

const StatBar = ({ statName, stat }) => {  

  const barSpan = (bgColor, styles) => (
    <span className={bgColor + " stat-bar inline-block h-full absolute"} style={styles}></span>
  );

  var statBars = [];

  if (statName !== "Ki Usage" && stat > 30)
  {
    statBars.push(barSpan("bg-red", {width: "100%", animationTimingFunction: "ease-in", animationDuration: "0.5s"}));
    statBars.push(barSpan("bg-yellow", {width: "100%", animationDelay: "0.5s", animationTimingFunction: "linear", animationDuration: "0.5s"}));
    statBars.push(barSpan("bg-green", {width: "100%", animationDelay: "1s", animationTimingFunction: "linear",  animationDuration: "0.5s"}));
    statBars.push(barSpan("bg-blue", {width: (stat-30)*10+"%", animationDelay: "1.5s", animationTimingFunction: "ease-out"}));
  }
  else if (statName !== "Ki Usage" && stat > 20)
  {
    statBars.push(barSpan("bg-red", {width: "100%", animationTimingFunction: "ease-in", animationDuration: "0.5s"}));
    statBars.push(barSpan("bg-yellow", {width: "100%", animationDelay: "0.5s", animationTimingFunction: "linear",  animationDuration: "0.5s"}));
    statBars.push(barSpan("bg-green", {width: (stat-20)*10+"%", animationDelay: "1s", animationTimingFunction: "ease-out"}));
  }
  else if (statName !== "Ki Usage" && stat > 10)
  {
    statBars.push(barSpan("bg-red", {width: "100%", animationTimingFunction: "ease-in",  animationDuration: "0.5s"}));
    statBars.push(barSpan("bg-yellow", {width: (stat-10)*10+"%", animationDelay: "0.5s", animationTimingFunction: "ease-out"}));
  }
  else if (statName !== "Ki Usage" && stat <= 10)
  {
    statBars.push(barSpan("bg-red", {width: stat*10+"%", animationTimingFunction: "ease-in-out"}));
  }

  if (statName === "Ki Usage")
  {
    stat = ((stat/250)* 100) + "%";
    statBars.push(barSpan("bg-red", {width: stat}));
  }

  return (
    <div className="mx-2 w-full h-full bg-grey-lighter relative">
      {statBars}
    </div>
  );
  
}

export default StatBar;
