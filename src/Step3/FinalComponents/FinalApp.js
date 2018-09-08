import React, { Component } from 'react';
import logo from '../logo.svg';
import '../../common.css';
import DisplayCards from './FinalDisplayCards';
import ShowSelectedPlayers from './FinalshowSelectedCard';
import playerInfo from '../../data.js'


class App extends Component {
  
  render() {
    return (
        <div className="App">
          <h1>
            Winning is not Everything!!
          </h1>
        
        <div className="setStage">
          <ShowSelectedPlayers className="bg-color-blue selectedPlayer" player="PlayerA"  />
          <ShowSelectedPlayers className="bg-color-red selectedPlayer" player="PlayerB"  />
        </div>
        <div className="cards-display">
          {
            playerInfo.map((elem) => {
              return <DisplayCards image={elem.image.url} name={elem.name}/>
            })

          }
        </div>
      </div>

    );
  }
}

export default App;
