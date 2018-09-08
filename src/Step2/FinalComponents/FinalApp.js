import React, { Component } from 'react';
import logo from '../logo.svg';
import '../../common.css';
import DisplayCards from './FinalDisplayCards';
import ShowSelectedPlayers from './FinalshowSelectedCard';


class App extends Component {
  
  render() {
    return (
        <div className="App">
          <h1>
            Winning is not Everything!!
          </h1>
        
        <div className="setStage">
          <ShowSelectedPlayers  />
          <ShowSelectedPlayers  />
        </div>
        <div className="cards-display">
          {
               <DisplayCards />
        

          }
        </div>
      </div>

    );
  }
}

export default App;
