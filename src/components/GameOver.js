import React from 'react';

import './GameOver.scss';

const GameOver = (props) => {
  return (
      <div className="GameOver">
          <div className="GameOver-label">GAME OVER</div>
          <div className="GameOver-button">NEW WORD</div>
      </div>
  )

};

export default GameOver;