import React, { Component } from 'react';
import Link from 'react-router-dom';
import './home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="main">
        <div className="header">
          <h1>Please select an option below:</h1>
          <p><em>Select host if hosting a party. All other users please select guest.</em></p>
        </div>
        <div className="row">
        /* NOTE: this needs to be changed */
          <div className ="column">
            <a href="http://localhost:8888"><div id="hostButton">Host</div></a>
          </div>
          <div className ="column">
            <a href="http://localhost:8888"><div id="guestButton">Guest</div></a>
          </div>
        </div>
      </div>
    );
  }
}
