import React, { Component } from "react";
import "./App.scss";
import KeyboardEventHandler from "react-keyboard-event-handler";
import randomWords from 'random-words';

import Hangman from "./components/Hangman";
import Missed from "./components/Missed";
import LettersToGuess from "./components/LettersToGuess";
import GameOver from "./components/GameOver";
import GameWon from "./components/GameWon";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      word: "",
      letters: [],
      missed: []
    };
  }

  requestWord() {
    // gives random word
    return randomWords({exactly: 1, maxLength: 11}).toString();
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

          {/*{ this.state.letters === this.state.word.split("") ? (*/}
              {/*<GameWon onCLickNew={() => this.handleNewGame()} />*/}
          {/*) : null}*/}
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
