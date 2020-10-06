import React, { Component } from 'react';
import './style.css';

class Manual extends Component {
    state = {
        manualIsVisible: false
    }

    changeManualIsVisible = () => {
        if (this.state.manualIsVisible === false) {
            this.setState({ manualIsVisible: true });
        } else {
            this.setState({ manualIsVisible: false });
        }
        
    }

    render() {
        const { manualIsVisible } = this.state;
        return (
            <div>
                <button 
                    className="how-to-button"
                    onClick={this.changeManualIsVisible}
                    >How to play</button>
                <div className={manualIsVisible ? "manual" : "invisible"}>
                    <div className="manual__content">
                        <ol className="manual__text">
                            <li>Two players try to type an existing long English word putting letters one by one to the line. The first letter is randomly defined.</li>
                            <li>At every step of the game players must know what word they have in mind.</li>
                            <li>Each player can put only one letter at once in any place: before, after or between the written letters.<br />
                            It can be any letter of the planned word: let’s say, if there’s PR in the line and the player thinks about the word PRODUCTION, so it’s not necessary to put O next, moreover, it’s recommended to use any other letters of the word to make the game for your rival harder (PRU for example).
                            </li>
                            <li>After putting a new letter, the player clicks “Submit” to pass the game to another player.</li>
                            <li>Players take turns and add letters. For example:<br /><br />
                            Player1: H (in mind: HOT)<br />
                            Player2: U H (in mind: PUSH)<br />
                            Player1: U C H (in mind: PUNCH)<br />
                            Player2: L U C H (in mind: LUNCH)<br />
                            Player1: L U C H E (in mind: LUNCHEON)<br />
                            etc.
                            </li>
                            <li>The aim is to type the longest word you can recall in order to get more points.</li>
                            <li>If at any point of the game one of the players (Player1) doesn’t know any existing word with a written letter combination, he/she clicks “Give up” and another player (Player2) takes turn.<br /><br />
                            After it Player2 has a chance to type fully the word he/she has in mind and check it in the dictionary (the button “Check the word”):<br /><br />
                                a) if the word exists (the green check mark appears), Player2 wins and gets as much points as letters in the checked word;<br /><br />
                                b) if there’s no such word in the dictionary (the red cross appears), Player1 wins instead and gets all points.
                            </li>
                            <li>If both players give up one by one, then it’s a draw and none of them get points.</li>
                            <li>Click “Next Round” to start a new round.</li>
                            <li>The player who has more points starts the new round.</li>
                        </ol>
                        <button className="manual__close" onClick={this.changeManualIsVisible}>&times;</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Manual;