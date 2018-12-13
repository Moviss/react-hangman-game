import React, { Component } from 'react';

import bar from '../img/bar.png';
import head from '../img/head.png';
import neck from '../img/neck.png';
import corpus from '../img/corpus.png';
import leftArm from '../img/left-arm.png';
import rightArm from '../img/right-arm.png';
import leftHand from '../img/left-hand.png';
import rightHand from '../img/right-hand.png';
import leftLeg from '../img/left-leg.png';
import rightLeg from '../img/right-leg.png';
import leftFoot from '../img/left-foot.png';
import rightFoot from '../img/right-foot.png';

import './Hangman.scss';

export default class Hangman extends Component {
    constructor(props) {
        super(props);
        this.state = {
            losePoints: 0
        }
    }




    render() {
        return (
            <div className="Hangman">
                <img className="bar" src={bar} alt="Hangman Bar"/>
                <img className="head" src={head} alt="Hangman's Head"/>
                <img className="neck" src={neck} alt="Hangman's Neck"/>
                <img className="corpus" src={corpus} alt="Hangman's Corpus"/>
                <img className="rightArm" src={rightArm} alt="Hangman's Right Arm"/>
                <img className="leftArm" src={leftArm} alt="Hangman's Left Arm"/>
                <img className="rightHand" src={rightHand} alt="Hangman's Right Hand"/>
                <img className="leftHand" src={leftHand} alt="Hangman's Left Hand"/>
                <img className="rightLeg" src={rightLeg} alt="Hangman's Right Leg"/>
                <img className="leftLeg" src={leftLeg} alt="Hangman's Left Leg"/>
                <img className="rightFoot" src={rightFoot} alt="Hangman's Right Foot"/>
                <img className="leftFoot" src={leftFoot} alt="Hangman's Left Foot"/>
            </div>
        )
    }
}