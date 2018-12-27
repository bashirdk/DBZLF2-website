import React from "react";

const MoveList = ({ character }) => {

  const basicMoves = character.moves.basic.map((basic) => (
    <div>
      <div> {basic.name} </div> 
      <div> {basic.input}</div>
    </div>
  ));
  
  return (
    <div>
      <h3> Move List </h3>
      {character.name}
      <h4> Basic Moves </h4>
        {basicMoves}
    </div>
  );
};

export default MoveList;