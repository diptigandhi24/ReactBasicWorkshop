import React, { Component } from 'react';
import logo from '../logo.svg';
import '../../common.css';
import DisplayCards from './DisplayCards';
import ShowSelectedPlayers from './ShowSelectedCard';

import playerInfo from '../../data.js'

//Congratulations for completing the four steps successfully!!!
/** Create a new Class Component FightingRing
 * Inside the class create property powerStats = ['Intelligence', 'Strength', 'Speed', 'Durability', 'Power', 'Combat'];
 *  its render function returns following
 * <div className="ringInfo">
      <div className="fightButtons">
  !!Challange is to create a buttons as many button as in the powerStats array
      </div>
    </div>
*/
class App extends Component {
  state={
    playerA:"",
    playerB:""
  }
  render() {
    return (
        <div className="App">
          <h1>
            Winning is not Everything!!
          </h1>
        
        <div className="setStage">
          <ShowSelectedPlayers className="bg-color-blue selectedPlayer" player="PlayerA" fighter={this.state.playerA}  />
          <FightingRing characterA={this.state.playerA} characterB={this.state.playerB}/>
          <ShowSelectedPlayers className="bg-color-red selectedPlayer" player="PlayerB" fighter={this.state.playerB} />
        </div>
        <div className="cards-display">
          {
            this.playerInfo.map((elem) => {
              return <DisplayCards image={elem.image.url} name={elem.name} 
              onClick={()=>{
                if(this.state.playerA === ""){
                  this.setState({
                    playerA:elem
                  })
                }else{
                  if(this.state.playerB ===""){
                    this.setState({
                      playerB:elem
                    })
                  }else{
                    return null;
                  }
                }
              }}/>
            })

          }
        </div>
      </div>

    );
  }
}

export default App;
