import React from "react";

import "./GameOver.scss";

const GameOver = props => {
  return (
    <div className="GameOver">
      <div className="GameOver-label">GAME OVER</div>
      <div className="GameOver-button" onClick={() => props.onCLickNew()}>
        NEW WORD
      </div>
    </div>
  );
};

export default GameOver;
