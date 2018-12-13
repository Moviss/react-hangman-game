import React from "react";

import "./GameOver.scss";

const GameWon = props => {
  return (
    <div className="GameOver">
      <div className="GameOver-label">YOU WON!</div>
      <div className="GameOver-button" onClick={() => props.onCLickNew()}>
        NEW WORD
      </div>
    </div>
  );
};

export default GameWon;