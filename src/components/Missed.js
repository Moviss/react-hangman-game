import React, { Component } from "react";

import "./Missed.scss";

export default class Missed extends Component {
  render() {
    return (
      <div className="Missed">
        <div className="notification">You missed</div>
        <div className="missedLetters">{this.props.missed.join(" ")}</div>
      </div>
    );
  }
}
