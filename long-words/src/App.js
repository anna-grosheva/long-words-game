import React, { Component } from 'react';
import './style.css';
import PlayerBlock from './PlayerBlock';

class App extends Component {
  state = {
    word: '',
    scoresRed: 0,
    scoresGreen: 0,
    whichIsActive: 'red',
    temp: false
  }

  changeInput = (event) => {
    this.setState({ word: event.target.value });
  }

  render() {
    const { scoresRed, scoresGreen, word } = this.state;
    return (
      <div className="app">
        <div className="header">
          <h1 className="header__heading">LONG WORDS</h1>
          <p className="header__slogan">Score points by putting letters one by one</p>
          <div className="header__wordfield">
            <input className="header__input" onChange={this.changeInput}/>
            <button className="header__button" disabled={!word}>Submit</button>
          </div>
        </div>
        <div className="blocks">
          <PlayerBlock 
            classBlock="red-block"
            classScore="red-score"
            classButton="red-buttons"
            scores={scoresRed}
            />
          <PlayerBlock 
            classBlock="green-block"
            classScore="green-score"
            classButton="green-buttons"
            scores={scoresGreen}
            />
        </div>
        {this.state.temp ? <button className="nextround-button">Next Round</button> : null}
      </div>
    );
  }
}
export default App;
