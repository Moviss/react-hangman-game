import React, { Component } from "react";
import "./App.scss";
import KeyboardEventHandler from "react-keyboard-event-handler";

import unirest from "unirest";

import Hangman from "./components/Hangman";
import Missed from "./components/Missed";
import LettersToGuess from "./components/LettersToGuess";
import GameOver from "./components/GameOver";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      word: null,
      letters: [],
      missed: []
    };
  }

  requestWord() {
    // request to api
    return "word";
  }

  componentDidMount() {
    const word = this.requestWord();
    this.setState({
      word: word
    });
  }

  handleClick(key) {
    const letters = this.state.letters;
    const missed = this.state.missed;
    const word = this.state.word;

    if (!missed.includes(key) && !word.includes(key)) {
      missed.push(key);
    }

    if (!letters.includes(key)) {
      letters.push(key);
    }

    this.setState({
      letters,
      missed
    });
  }

  handleNewGame() {
    const newWord = this.requestWord();
    this.setState({
      word: newWord,
      letters: [],
      missed: []
    });
  }

  render() {
    return (
      <div className="App">
        <KeyboardEventHandler
          handleKeys={["alphabetic"]}
          onKeyEvent={(key, e) => this.handleClick(key)}
        />
        <div className="App-playground">
          {this.state.missed.length < 11 ? (
            <div>
              <Hangman missed={this.state.missed} />
              <Missed missed={this.state.missed} />
              {this.state.word && (
                <LettersToGuess
                  word={this.state.word}
                  letters={this.state.letters}
                />
              )}
            </div>
          ) : (
            <GameOver onCLickNew={() => this.handleNewGame()} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
