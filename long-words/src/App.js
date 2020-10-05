import React, { Component } from 'react';
import './style.css';
import PlayerBlock from './PlayerBlock';
import Manual from './Manual';

class App extends Component {
  state = {
    word: '',
    inputLength: 1,
    ifWordExists: '',
    scoresRed: 0,
    scoresGreen: 0,
    whichIsActive: 'red',
    giveUps: 0,
    finalState: false
  }

  changeInput = (event) => {
    this.setState({ word: event.target.value.replace(/[^A-Za-z]/, '') });
  }

  getRandomLetter = () => {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    this.setState({ word: alphabet.charAt(Math.floor(Math.random() * alphabet.length)) });
  }

  componentDidMount() {
    this.getRandomLetter();
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
    this.getRandomLetter();
    const { scoresRed, scoresGreen } = this.state;
    this.setState({ giveUps: 0, inputLength: 1, finalState: false, ifWordExists: '' });
    if (scoresRed >= scoresGreen) {
      this.setState({ whichIsActive: 'red' });
    } else {
      this.setState({ whichIsActive: 'green' });
    }
  }

  checkWord = (word) => {
    const { whichIsActive, scoresRed, scoresGreen } = this.state;
    fetch(`https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20200930T073609Z.78822774b8132738.c148d7698da51b2165b444c78c2c8ffb9d84a4b8&lang=en-ru&text=${word}`)
    .then(res => res.json())
    .then(data => {
      if (data.def.length > 0) {
        this.setState({ ifWordExists: 'yes', finalState: true });
        if (whichIsActive === 'red') {
          this.setState({ scoresRed: scoresRed + word.length });
        } else {
          this.setState({ scoresGreen: scoresGreen + word.length });
        }
      } else {
        this.setState({ ifWordExists: 'no', finalState: true });
        if (whichIsActive === 'red') {
          this.setState({ scoresGreen: scoresGreen + word.length });
        } else {
          this.setState({ scoresRed: scoresRed + word.length });
        }
      }
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    const { scoresRed, scoresGreen, word, whichIsActive, giveUps, inputLength, ifWordExists, finalState } = this.state;
    return (
      <div className="app">
        <div className="header">
          <Manual />
          <h1 className="header__heading">LONG WORDS</h1>
          <p className="header__slogan">Score points by putting letters one by one</p>
          <div className="header__wordfield">
            {ifWordExists === 'yes' ? <p className="header__correct">&#10003;</p> : null}
            {ifWordExists === 'no' ? <p className="header__wrong">&#10007;</p> : null}
            <input 
              className="header__input" 
              maxLength={giveUps === 0 ? inputLength + 1 : "50"} 
              value={word} 
              onChange={this.changeInput}
            />
            <button className="header__button" disabled={word.length === 1 || giveUps > 0} onClick={this.changeWhichIsActive}>Submit</button>
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
            checkWord={() => this.checkWord(word)}
            />
          <PlayerBlock 
            classBlock="green-block"
            classScore="green-score"
            classButton="green-buttons"
            scores={scoresGreen}
            notSelected={whichIsActive === 'green' && giveUps !== 2 ? null : "not-selected"}
            giveUp={this.playerGivesUp}
            checkWord={() => this.checkWord(word)}
            />
        </div>
        {finalState ? <div>{(whichIsActive === 'red' && ifWordExists === 'yes') || (whichIsActive === 'green' && ifWordExists === 'no') ? <p className="final-message red-color">THE RED WON!</p> : <p className="final-message green-color">THE GREEN WON!</p>}</div> : null}
        {giveUps === 2 ? <p className="final-message">IT'S A DRAW!</p> : null}
        {giveUps === 2 || finalState ? <button className="nextround-button" onClick={this.nextRoundHandler}>Next Round</button> : null}
        <p className="yandex">Powered by <a href="https://tech.yandex.com/dictionary/" target="_blank" rel="noopener noreferrer" className="yandex__link">Yandex.Dictionary</a></p>
      </div>
    );
  }
}
export default App;
