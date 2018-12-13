import React, {Component} from 'react';
import './App.scss';
import unirest from 'unirest';

import Hangman from './components/Hangman';
import Missed from './components/Missed';
import LettersToGuess from "./components/LettersToGuess";
import GameOver from "./components/GameOver";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            word: null,
            newGame: true
        }

    }

    getNewWord = () => {
        unirest.get("https://wordsapiv1.p.mashape.com/words?random=true")
            .header("X-RapidAPI-Key", "HUH3sQaKIumshwqFbpexN5wEyPgrp1E8U35jsnvXRD5B3AYYrv")
            .end(function (result) {
                console.log(result);
            });
    };


    render() {
        if (this.state.newGame) {
            this.getNewWord();
        }


        return (
            <div className="App">
                <div className="App-playground">
                    <Hangman/>
                    <Missed/>
                    <LettersToGuess/>
                    {/*<GameOver />*/}
                </div>
            </div>
        );
    }
}

export default App;
