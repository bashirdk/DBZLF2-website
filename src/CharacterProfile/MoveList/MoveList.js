import React from "react";

const MoveList = ({ character }) => {
  
  const subMoveList = ( input ) => {
    const mapMoves = input.map((mappedMove) => (
      <div>
        <div> {mappedMove.name} </div> 
        <div> {mappedMove.input}</div>
      </div>
    ));
    return mapMoves;
  };

  const basicMoves = subMoveList(character.moves.basic);
  const specialMoves = subMoveList(character.moves.special);
  const counterAttacks = subMoveList(character.moves.counter);
  const transformations = subMoveList(character.moves.transformations);

  return (
    <div>
      <h3> Move List </h3>

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