import React, { Component } from 'react';
import './style.css';

class PlayerBlock extends Component {
  render() {
    const { classBlock, classScore, classButton, scores, notSelected, giveUp, checkWord, checkWordDisabled } = this.props;
    return (
      <div className={"playerblock " + classBlock + ' ' + notSelected}>
        <p className={classScore}>{scores}</p>
        <button 
          className={"playerblock__button " + classButton} 
          disabled={notSelected}
          onClick={giveUp}
          >Give up</button>
        <button 
          className={"playerblock__button " + classButton} 
          disabled={notSelected || !checkWordDisabled}
          onClick={checkWord}
          >Check the word</button>
      </div>
    );
  }
}
export default PlayerBlock;
