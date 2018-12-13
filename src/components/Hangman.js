import React, { Component } from "react";

import bar from "../img/bar.png";
import head from "../img/head.png";
import neck from "../img/neck.png";
import corpus from "../img/corpus.png";
import leftArm from "../img/left-arm.png";
import rightArm from "../img/right-arm.png";
import leftHand from "../img/left-hand.png";
import rightHand from "../img/right-hand.png";
import leftLeg from "../img/left-leg.png";
import rightLeg from "../img/right-leg.png";
import leftFoot from "../img/left-foot.png";
import rightFoot from "../img/right-foot.png";

import "./Hangman.scss";

export default class Hangman extends Component {
  render() {
    const { missed } = this.props;
    const length = missed.length;
    return (
      <div className="Hangman">
        {length >= 0 && <img className="bar" src={bar} alt="Hangman Bar" />}
        {length >= 1 && (
          <img className="head" src={head} alt="Hangman's Head" />
        )}
        {length >= 2 && (
          <img className="neck" src={neck} alt="Hangman's Neck" />
        )}
        {length >= 3 && (
          <img className="corpus" src={corpus} alt="Hangman's Corpus" />
        )}
        {length >= 4 && (
          <img className="rightArm" src={rightArm} alt="Hangman's Right Arm" />
        )}
        {length >= 5 && (
          <img className="leftArm" src={leftArm} alt="Hangman's Left Arm" />
        )}
        {length >= 6 && (
          <img
            className="rightHand"
            src={rightHand}
            alt="Hangman's Right Hand"
          />
        )}
        {length >= 7 && (
          <img className="leftHand" src={leftHand} alt="Hangman's Left Hand" />
        )}
        {length >= 8 && (
          <img className="rightLeg" src={rightLeg} alt="Hangman's Right Leg" />
        )}
        {length >= 9 && (
          <img className="leftLeg" src={leftLeg} alt="Hangman's Left Leg" />
        )}
        {length >= 10 && (
          <img
            className="rightFoot"
            src={rightFoot}
            alt="Hangman's Right Foot"
          />
        )}
        {length >= 11 && (
          <img className="leftFoot" src={leftFoot} alt="Hangman's Left Foot" />
        )}
      </div>
    );
  }
}
