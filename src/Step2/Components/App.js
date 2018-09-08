import React, { Component } from 'react';
import logo from '../logo.svg';
import '../../common.css';

/**
 * Remove the header
 * Show the "DisplayCards" Component and "ShowSelectedCard" Component inside the App
 * ShowSelected Component should have the following,
 * 1.<div> with <h1> with player
 * 2.background color default
 * 
 */


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Workshop!!</h1>
        </header>
        <h1>
          Winning is not everything!!
        </h1>
        <div className='setStage  '></div>
        <div className="cards-display"></div>
      </div>
    );
  }
}

export default App;
