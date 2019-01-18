import React from "react";

const MoveList = ({ character }) => {
  
  const moveContainerStyle = "border-b lf2-border-blue sm:flex";
  const moveHeaderStyle = "border-b lf2-border-blue px-2 py-3 text-white";
  const moveNameStyle = "lf2-bg-blue-dark text-white w-full block sm:w-1/2 md:w-2/5 md:border-b-0 px-2 py-3";
  const moveInputStyle = "w-full text-white block sm:w-1/2 md:w-3/5 px-2 py-3";

  const subMoveList = ( input ) => {
    if (input.length === 0)
    {
      return (
        <div className={moveContainerStyle}>
        <div className="px-2 py-3 text-white"> 
          <i> None Available </i>
        </div>
      </div>  
      )
    } else {
      const mapMoves = input.map((mappedMove) => {
        if (mappedMove.ultimate)
        {
          var ultimateMove = (
            <span className="inline-block text-xs rounded px-2 py-1 bg-red-dark font-bold text-white my-0 md:mt-2 lg:my-0">
              ULTIMATE
            </span>
          )          
        }
        return(
        <div className={moveContainerStyle}>
          <div className={moveNameStyle}> 
            {mappedMove.name}  {ultimateMove}
          </div>
          <div className={moveInputStyle}> 
            {mappedMove.input}
          </div>
        </div> )
      });
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
        <h3> Move List </h3>
        <p className="text-right"> <i> Commands for facing right </i> </p>
      </div>     

      <h3 className={'bg-blue ' + moveHeaderStyle } > Basic Moves </h3> {basicMoves}
      <h3 className={'bg-red ' + moveHeaderStyle}> Special Moves </h3> {specialMoves}
      <h3 className={'bg-green ' + moveHeaderStyle}> Counter Attacks </h3> {counterAttacks}
      <h3 className={'bg-yellow-dark ' + moveHeaderStyle}> Transformations </h3> {transformations}
    </div>
  );
};

export default MoveList;