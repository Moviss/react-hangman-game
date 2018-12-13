import React, { Component } from 'react';

import './LettersToGuess.scss';

export default class LettersToGuess extends Component {

    render() {
        return (
            <div className="LettersToGuess">
                <div className="firstBox letterBox empty"></div>
                <div className="letterBox empty"></div>
                <div className="letterBox empty"></div>
                <div className="letterBox empty"></div>
                <div className="letterBox">H</div>
                <div className="letterBox">A</div>
                <div className="letterBox"></div>
                <div className="letterBox"></div>
                <div className="letterBox"></div>
                <div className="letterBox">A</div>
                <div className="letterBox"></div>
            </div>
        );
    }


}