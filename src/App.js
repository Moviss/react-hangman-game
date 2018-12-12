import React, { Component } from 'react';
import './App.scss';

import Hangman from './components/Hangman';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-playground">
            <Hangman />
        </div>
      </div>
    );
  }
}

export default App;
