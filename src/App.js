import React, { Component } from 'react';
import './App.scss';

import Hangman from './components/Hangman';
import Missed from './components/Missed';
import LettersToGuess from "./components/LettersToGuess";
import GameOver from "./components/GameOver";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-playground">
            {/*<Hangman />*/}
            {/*<Missed />*/}
            {/*<LettersToGuess />*/}
            <GameOver />
        </div>
      </div>
    );
  }
}

export default App;
