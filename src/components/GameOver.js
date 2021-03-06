import React from "react";

import "./GameOver.scss";

const GameOver = props => {
  return (
    <div className="GameOver">
      {props.win ? (
        <div className="GameOver-label GameOver-won">YOU WON</div>
      ) : (
        <div className="GameOver-label">GAME OVER</div>
      )}
      <div className="GameOver-button" onClick={() => props.onClickNew()}>
        NEW WORD
      </div>
    </div>
  );
};

export default GameOver;
