import React, { Component } from 'react';
import './style.css';

class PlayerBlock extends Component {
  render() {
    const { classBlock, classScore, classButton, scores } = this.props;
    return (
      <div className={"playerblock " + classBlock}>
        <p className={classScore}>{scores}</p>
        <button className={"playerblock__button " + classButton}>Give up</button>
        <button className={"playerblock__button " + classButton}>Check the word</button>
      </div>
    );
  }
}
export default PlayerBlock;
