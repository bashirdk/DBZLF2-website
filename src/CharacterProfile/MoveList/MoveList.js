import React from "react";

const MoveList = ({ character }) => {
  
  const moveContainerStyle = "border-b lf2-border-blue sm:flex";
  const moveHeaderStyle = "border-b lf2-border-blue px-2 py-2 text-white";
  const moveNameStyle = "lf2-bg-blue-dark text-white w-full block sm:w-1/2 md:w-2/5 md:border-b-0 px-2 py-2";
  const moveInputStyle = "w-full text-white block sm:w-1/2 md:w-3/5 px-2 py-2";

  const subMoveList = ( input ) => {
    if (input.length === 0)
    {
      return (
        <div className={moveContainerStyle}>
        <div className="px-2 py-2"> 
          <i> None Available </i>
        </div>
      </div>  
      )
    } else {
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
    }
  };

  const basicMoves = subMoveList(character.moves.basic);
  const specialMoves = subMoveList(character.moves.special);
  const counterAttacks = subMoveList(character.moves.counter);
  const transformations = subMoveList(character.moves.transformations);

  return (
    <div className="border-2 lf2-border-blue lf2-bg-blue rounded border-b-0">
      <div className="border-b lf2-border-blue text-white p-2">
        <h2> Move List </h2>
        <p className="text-right"> <i> Commands for facing right </i> </p>
      </div>     

      <h4 className={'bg-blue ' + moveHeaderStyle } > Basic Moves </h4> {basicMoves}
      <h4 className={'bg-red ' + moveHeaderStyle}> Special Moves </h4> {specialMoves}
      <h4 className={'bg-green ' + moveHeaderStyle}> Counter Attacks </h4> {counterAttacks}
      <h4 className={'bg-yellow-dark ' + moveHeaderStyle}> Transformations </h4> {transformations}
    </div>
  );
};

export default MoveList;