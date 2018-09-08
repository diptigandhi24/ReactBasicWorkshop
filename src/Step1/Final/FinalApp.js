import React, { Component } from 'react';
import logo from './logo.svg';
import '../common.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Workshop</h1>
        </header>
        <h1>
          Winning is not Everything!!
        </h1>
      </div>
    );
  }
}

export default App;
