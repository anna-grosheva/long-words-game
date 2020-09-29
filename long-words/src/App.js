import React, { Component } from 'react';
import './style.css';
import PlayerBlock from './PlayerBlock';

class App extends Component {
  state = {
    word: '',
    inputLength: 0,
    scoresRed: 0,
    scoresGreen: 0,
    whichIsActive: 'red',
    giveUps: 0
  }

  changeInput = (event) => {
    this.setState({ word: event.target.value.replace(/[^A-Za-z]/, '') });
  }

  changeWhichIsActive = () => {
    this.setState({ inputLength: this.state.inputLength + 1 })
    if (this.state.whichIsActive === 'red') {
      this.setState({ whichIsActive: 'green' });
    } else {
      this.setState({ whichIsActive: 'red' });
    }
  }

  playerGivesUp = () => {
    this.changeWhichIsActive();
    this.setState({ giveUps: this.state.giveUps + 1 });
  }

  nextRoundHandler = () => {
    const { scoresRed, scoresGreen } = this.state;
    this.setState({ word: '', giveUps: 0, inputLength: 0 });
    if (scoresRed >= scoresGreen) {
      this.setState({ whichIsActive: 'red' });
    } else {
      this.setState({ whichIsActive: 'green' });
    }
  }

  render() {
    const { scoresRed, scoresGreen, word, whichIsActive, giveUps, inputLength } = this.state;
    return (
      <div className="app">
        <div className="header">
          <h1 className="header__heading">LONG WORDS</h1>
          <p className="header__slogan">Score points by putting letters one by one</p>
          <div className="header__wordfield">
            <input 
              className="header__input" 
              maxLength={giveUps === 0 ? inputLength + 1 : "50"} 
              value={word} 
              onChange={this.changeInput}
            />
            <button className="header__button" disabled={!word || giveUps > 0} onClick={this.changeWhichIsActive}>Submit</button>
          </div>
        </div>
        <div className="blocks">
          <PlayerBlock 
            classBlock="red-block"
            classScore="red-score"
            classButton="red-buttons"
            scores={scoresRed}
            notSelected={whichIsActive === 'red' && giveUps !== 2 ? null : "not-selected"}
            giveUp={this.playerGivesUp}
            />
          <PlayerBlock 
            classBlock="green-block"
            classScore="green-score"
            classButton="green-buttons"
            scores={scoresGreen}
            notSelected={whichIsActive === 'green' && giveUps !== 2 ? null : "not-selected"}
            giveUp={this.playerGivesUp}
            />
        </div>
        {giveUps === 2 ? <p className="draw">IT'S A DRAW!</p> : null}
        {giveUps === 2 ? <button className="nextround-button" onClick={this.nextRoundHandler}>Next Round</button> : null}
      </div>
    );
  }
}
export default App;
