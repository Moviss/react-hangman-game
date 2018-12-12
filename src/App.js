import React, { Component } from 'react';
import './App.scss';

import Hangman from './components/Hangman';
import Missed from './components/Missed';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-playground">
            <Hangman />
            <Missed />
        </div>
      </div>
    );
  }
}

export default App;
