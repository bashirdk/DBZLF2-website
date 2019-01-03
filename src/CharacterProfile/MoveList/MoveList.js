import React from "react";

const MoveList = ({ character }) => {
  
  const moveContainerStyle = "border";
  const moveNameStyle = "inline-block w-2/5 border px-2 py-2";
  const moveInputStyle = "inline-block w-3/5 border px-2 py-2";

  const subMoveList = ( input ) => {
    const mapMoves = input.map((mappedMove) => (
      <div className={moveContainerStyle}>
        <div className={moveNameStyle}> 
          {mappedMove.name} 
        </div>
        <div className={moveInputStyle}> 
          {mappedMove.input}
        </div>
      </div>
    ));
    return mapMoves;
  };

  const basicMoves = subMoveList(character.moves.basic);
  const specialMoves = subMoveList(character.moves.special);
  const counterAttacks = subMoveList(character.moves.counter);
  const transformations = subMoveList(character.moves.transformations);

  const moveHeaderStyle = "border px-2 py-2";

  return (
    <div className="border">
      <h3> Move List </h3>

      <h4 className={moveHeaderStyle}> Basic Moves </h4> {basicMoves}
      <h4 className={moveHeaderStyle}> Special Moves </h4> {specialMoves}
      <h4 className={moveHeaderStyle}> Counter Attacks </h4> {counterAttacks}
      <h4 className={moveHeaderStyle}> Transformations </h4> {transformations}
    </div>
  );
};

export default MoveList;