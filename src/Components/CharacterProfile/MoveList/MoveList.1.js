import React from "react";

const MoveList = ({ character }) => {
  
  const moveContainerStyle = "border-b lf2-border-blue sm:flex";
  const moveHeaderStyle = "border-b lf2-border-blue px-2 py-3 text-white";
  const moveNameStyle = "lf2-bg-blue-dark text-white w-full block sm:w-1/2 md:w-2/5 md:border-b-0 px-2 py-3";
  const moveInputStyle = "move-input w-full text-white block sm:w-1/2 md:w-3/5 px-2 py-3";

  const parseMoveList = (input) => {
    let newInput = "";
    let splitInput = input.split(" ");

    // "DJA A", "DJA J"
    if (input.match(/^DJA\spress_[JD]$/)) {
      newInput += `<div class="input-dja-press">`
    }
    // "D > AJ", "D > JA", "D ^ AJ", "D ^ JA", "D v AJ", "D v JA"
    else if (input.match(/D\s*[><\^v]\s*(AJ|JA)/)) {
      newInput += `<div class="input-ddb-fastb">`
    }
    // "D > A J", "D > A A", "D > J A", "D > J J", "D ^ A J", "D ^ A A", "D ^ J A", "D ^ J J", "D v A J", "D v A A", "D v J A", "D v J J"
    else if (input.match(/D\s*[><\^v]\s*([AJ]\s*[AJ]|[AJ]\s*[AJ])/)) {
      newInput += `<div class="input-ddb-slowb">`
    }
    // DJA Hold A | DJA Hold J
    else if (input.match(/^DJA\shold_[AJ]$/)) {
      newInput += `<div class="input-dja-hold">`
    }
    // D > A A A 
    else if (input.match(/^D\s[><^]\sspam_[AJ]$/)) {
      newInput += `<div class="input-ddb-spam">`
    }
    else if (input.match(/D\s+[^\s]+\s+[A|J]/)) {
      newInput += `<div class="input-ddb">`
    }
    for(let i = 0; i < splitInput.length; i++) {
      if (splitInput[i] === "D") {
        newInput += `<span class="m-button defend-button">${splitInput[i]}</span> `;
      } else if (splitInput[i] === "J") {
        newInput += `<span class="m-button jump-button">${splitInput[i]}</span> `;
      } else if (splitInput[i] === "A") {
        newInput += `<span class="m-button attack-button">${splitInput[i]}</span> `;
      } else if (splitInput[i] === "Hold_A") {
        newInput += `<span class="m-button hold-attack-button">A</span> `;
      } else if (splitInput[i] === "Hold_J") {
        newInput += `Hold <span class="m-button hold-jump-button">J</span> `;
      } else if (splitInput[i] === "Hold_D") {
        newInput += `Hold <span class="m-button hold-defend-button">D</span> `;
      } else if (splitInput[i] === "^") {
        newInput += `<b class="arrow-button">↑</b> `
      } else if (splitInput[i] === ">") {
        newInput += `<b class="arrow-button">→</b> `
      } else if (splitInput[i] === "v") {
        newInput += `<b class="arrow-button">↓</b> `
      } else if (splitInput[i] === "<") {
        newInput += "POOOP"
      } else if (splitInput[i] === "DJA") {
        newInput += `<span class="m-button defend-button">D</span><span class="m-button jump-button">J</span><span class="m-button attack-button">A</span> `;
      } else if (splitInput[i] === "AJ") {
        newInput += `<span class="m-button attack-button">A</span><span class="m-button jump-button">J</span> `;
      } else if (splitInput[i] === "JA") {
        newInput += `<span class="m-button jump-button">J</span><span class="m-button attack-button">A</span> `;
      } else if (splitInput[i] === "(A") {
        newInput += `(<span class="m-button attack-button">A</span> `;
      } else if (splitInput[i] === "A...)") {
        newInput += `<span class="m-button attack-button">A</span>...) `;
      } else if (splitInput[i] === "press_J") {
        newInput += `<span class="m-button jump-button">J</span> `;
      } else if (splitInput[i] === "press_D") {
        newInput += `<span class="m-button defend-button">D</span> `;
      } else if (splitInput[i] === "hold_A") {
          newInput += `<span class="m-button hold-attack-button">A</span> `;
      } else if (splitInput[i] === "spam_A") {
        newInput += `<span class="m-button attack-button">A</span> `;
      } else if (splitInput[i] === "DJA_hold_A") {
        newInput += `<div class="input-dja-hold"><span class="m-button defend-button">D</span><span class="m-button jump-button">J</span><span class="m-button attack-button">A</span> <span class="m-button hold-attack-button">A</span> </div>`;
      }
      else {
        newInput += `<span>${splitInput[i]}</span> `;
      }
    }
    if (input.match(/^DJA\spress_[JD]$/)) {
      newInput += `</div>`
    }
    else if (input.match(/D\s*[><\^v]\s*(AJ|JA)/)) {
      newInput += `</div>`
    }
    else if (input.match(/^DJA\shold_[AJ]$/)) {
      newInput += `</div>`
    }
    else if (input.match(/^D\s[><^]\sspam_[AJ]$/)) {
      newInput += `</div>`
    }
    else if (input.match(/D\s+[^\s]+\s+[A|J]/)) {
      newInput += `</div>`
    }
    return newInput;
  };


  const resetAnimation = (cssClass, time) => {
      var el = document.getElementsByClassName(cssClass);
      if (el.length>0) {
        for (let item of el[0].children) {
          item.style.animation = 'none';
          item.focus(); /* trigger reflow */
          item.style.animation = null; 
        };
      }
      setTimeout(resetAnimation, time);
  };


  const resetDJAHoldAnimation = () => {
    var el = document.getElementsByClassName('input-dja-hold');
    if (el.length>0) {
      for (let item of el) {
        for (let subItem of item.children) {
          subItem.style.animation = 'none';
          subItem.focus(); /* trigger reflow */
          subItem.style.animation = null; 
        };
      }    
    }
    setTimeout(resetDJAHoldAnimation, 4000);
};

const resetDJAPressAnimation = () => {
  var el = document.getElementsByClassName('input-dja-press');
  if (el.length>0) {
    for (let item of el) {
      for (let subItem of item.children) {
        subItem.style.animation = 'none';
        subItem.focus(); /* trigger reflow */
        subItem.style.animation = null; 
      };
    }    
  }
  setTimeout(resetDJAPressAnimation, 3000);
};

const resetDDBSpamAnimation = () => {
  var el = document.getElementsByClassName('input-ddb-spam');
  if (el.length>0) {
    for (let item of el) {
      for (let subItem of item.children) {
        subItem.style.animation = 'none';
        subItem.focus(); /* trigger reflow */
        subItem.style.animation = null; 
      };
    }    
  }
  setTimeout(resetDDBSpamAnimation, 10000);
};

const resetDDBAnimation = () => {
  var el = document.getElementsByClassName('input-ddb');
  if (el.length>0) {
    for (let item of el) {
      for (let subItem of item.children) {
        subItem.style.animation = 'none';
        subItem.focus(); /* trigger reflow */
        subItem.style.animation = null; 
      };
    }    
  }
  setTimeout(resetDDBAnimation, 2000);
};

const resetDDBFastBAnimation = () => {
  var el = document.getElementsByClassName('input-ddb-fastb');
  if (el.length>0) {
    for (let item of el) {
      for (let subItem of item.children) {
        subItem.style.animation = 'none';
        subItem.focus(); /* trigger reflow */
        subItem.style.animation = null; 
      };
    }    
  }
  setTimeout(resetDDBFastBAnimation, 2000);
};

const resetDDBSlowBAnimation = () => {
  var el = document.getElementsByClassName('input-ddb-slowb');
  if (el.length>0) {
    for (let item of el) {
      for (let subItem of item.children) {
        subItem.style.animation = 'none';
        subItem.focus(); /* trigger reflow */
        subItem.style.animation = null; 
      };
    }    
  }
  setTimeout(resetDDBSlowBAnimation, 2000);
};


  const subMoveList = ( input ) => {
    // resetAnimation('input-dja-plus', 5000);
    // resetAnimation('input-ddb', 2000);
    resetDJAHoldAnimation();
    resetDJAPressAnimation();
    resetDDBAnimation();
    resetDDBSlowBAnimation();
    resetDDBFastBAnimation();
    resetDDBSpamAnimation();
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
          <div className={moveInputStyle} dangerouslySetInnerHTML= {{ __html: parseMoveList(mappedMove.input)}} > 

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