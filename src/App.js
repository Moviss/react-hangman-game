import React, { Component } from "react";
import "./App.scss";
import KeyboardEventHandler from "react-keyboard-event-handler";
import randomWords from "random-words";

import Hangman from "./components/Hangman";
import Missed from "./components/Missed";
import LettersToGuess from "./components/LettersToGuess";
import GameOver from "./components/GameOver";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      word: "",
      letters: [],
      missed: [],
      found: [],
      win: false
    };
  }

  requestWord() {
    return randomWords({ exactly: 1, maxLength: 11 }).toString();
  }

  containsAllLetters() {
    const { word, found } = this.state;

    const wordArray = word.split("");
    const isSuperset = wordArray.every(function(val) {
      return found.indexOf(val) >= 0;
    });
    this.setState({
      win: isSuperset
    });
  }

  componentDidMount() {
    const word = this.requestWord();
    this.setState({
      word: word
    });
  }

  handleClick(key) {
    const { letters, missed, word, found } = this.state;

    if (!missed.includes(key) && !word.includes(key)) {
      missed.push(key);
    }

    if (!letters.includes(key)) {
      letters.push(key);
    }

    if (word.includes(key)) {
      found.push(key);
    }

    this.setState({
      letters,
      missed
    });
    this.containsAllLetters();
  }

  handleNewGame() {
    const newWord = this.requestWord();
    this.setState({
      word: newWord,
      letters: [],
      missed: [],
      found: [],
      win: false
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
          {this.state.missed.length < 11 && !this.state.win && (
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
          )}

          {(this.state.missed.length >= 11 || this.state.win) && (
            <GameOver
              win={this.state.win}
              onClickNew={() => this.handleNewGame()}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
