import React, { Component } from 'react';
import logo from '../logo.svg';
import '../../common.css';
import DisplayCards from './DisplayCards';
import ShowSelectedPlayers from './ShowSelectedCard';
import playerInfo from '../../data.js'

/** Welcome to Step 4
 * Give Click Event to the Cards
 * Create a element to display img and name inside the ShowSelectedCard
 * create a props Fighter to pass data to ShowSelectedCard from App component
 * Display img and name inside the ShowSelectedCardComponent Only when props..
 * ..Fighter is not empty
 * Create a state with playerA and playerB to share the data with ShowSlectedCard
 * Onclick the cards store the information of clicked card into playerA
 * onSecond click store the information of card into playerB 
 * display the playerA  and Player information inside ShowSelected Cards
*/
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
