import React from "react";

const StatBar = ({ statName, stat }) => {  

  const barSpan = (bgColor, statWidth) => (
    <span className={bgColor + " inline-block h-full"} style={statWidth}></span>
  );


  if (statName === "Ki Usage")
  {
    stat = ((stat/250)* 100) + "%";
  }
  else 
  {
    stat = stat + "%";
  }

  const statStyle = {
    width: stat
  }


  const barUse = barSpan("bg-red", statStyle);

  return (
    <div className="mx-2 w-full h-full bg-grey-lighter relative">
      {barUse}
    </div>
  );
  
}

export default StatBar;
