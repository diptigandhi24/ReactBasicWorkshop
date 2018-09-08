import React, { Component } from 'react';
import logo from '../logo.svg';
import '../../common.css';
import DisplayCards from './DisplayCards';
import ShowSelectedPlayers from './ShowSelectedCard';

/**Welcome to Step 3
 * Understand What are props, use props to display the title in..
 * .. the ShowSelectedCard Component and change the background color
 * Property And Value to be use className="bg-color-blue selectedPlayer" And
 * player="PlayerA"
 * Once you are done with this Look at another part down */
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

/*step3:Part A
Share the Player Info between the ShowSelectedCard and Display cards
Display more than two cards using map()
Import the data from data.js into PlayerInfo to display more than two cards
*/
