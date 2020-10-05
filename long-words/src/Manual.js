import React, { Component } from 'react';
import './style.css';

class Manual extends Component {
    render() {
        return (
            <div>
                <button className="how-to-button">How to play</button>
                <div className="manual">
                    <span>&times;</span>
                    <p></p>
                </div>
            </div>
        );
    }
}
export default Manual;