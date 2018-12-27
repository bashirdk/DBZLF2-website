import React from "react";

const MoveList = ({ character }) => {

  const basicMoves = character.moves.basic.map((basic) => (
    <div>
      <div> {basic.name} </div> 
      <div> {basic.input}</div>
    </div>
  ));

  const specialMoves = character.moves.special.map((special) => (
    <div>
      <div> {special.name} </div> 
      <div> {special.input}</div>
    </div>
  ));

  const counterAttacks = character.moves.counter.map((counter) => (
    <div>
      <div> {counter.name} </div> 
      <div> {counter.input}</div>
    </div>
  ));

  const transformations = character.moves.transformations.map((transformations) => (
    <div>
      <div> {transformations.name} </div> 
      <div> {transformations.input}</div>
    </div>
  ));

  return (
    <div>
      <h3> Move List </h3>
      {character.name}

      <h4> Basic Moves </h4>
        {basicMoves}
        
      <h4> Special Moves </h4>
        {specialMoves}

      <h4> Counter Attacks </h4>
        {counterAttacks}

      <h4> Transformations </h4>
        {transformations}
    </div>
  );
};

export default MoveList;