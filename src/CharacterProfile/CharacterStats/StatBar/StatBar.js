import React from "react";

const StatBar = ({ statName, stat }) => {  

  const barSpan = (bgColor, statWidth) => (
    <span className={bgColor + " inline-block h-full absolute"} style={statWidth}></span>
  );

  var statBars = [];

  if (statName !== "Ki Usage" && stat > 30)
  {
    statBars.push(barSpan("bg-red", {width: "100%"}));
    statBars.push(barSpan("bg-yellow", {width: "100%"}));
    statBars.push(barSpan("bg-green", {width: "100%"}));
    statBars.push(barSpan("bg-blue", {width: (stat-30)*10+"%"}));
  }
  else if (statName !== "Ki Usage" && stat > 20)
  {
    statBars.push(barSpan("bg-red", {width: "100%"}));
    statBars.push(barSpan("bg-yellow", {width: "100%"}));
    statBars.push(barSpan("bg-green", {width: (stat-20)*10+"%"}));
  }
  else if (statName !== "Ki Usage" && stat > 10)
  {
    statBars.push(barSpan("bg-red", {width: "100%"}));
    statBars.push(barSpan("bg-yellow", {width: (stat-10)*10+"%"}));
  }
  else if (statName !== "Ki Usage" && stat <= 10)
  {
    statBars.push(barSpan("bg-red", {width: stat*10+"%"}));
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
