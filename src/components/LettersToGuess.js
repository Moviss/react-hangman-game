import React, { Component } from "react";

import "./LettersToGuess.scss";

export default class LettersToGuess extends Component {
  render() {
    const word = this.props.word.split("");
    const length = word.length;

    return (
      <div className="LettersToGuess">
        {[...Array(11 - length)].map((c, index) => {
          return (
            <div
              className="letterBox letterBox--empty"
              key={`empty_${index}`}
            />
          );
        })}

        {word.map((letter, index) => {
          if (this.props.letters.includes(letter)) {
            return (
              <div className="letterBox letterBox" key={`__${index}`}>
                {letter}
              </div>
            );
          } else {
            return <div className="letterBox letterBox" key={`__${index}`} />;
          }
        })}
      </div>
    );
  }
}
