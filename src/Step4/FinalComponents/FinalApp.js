import React, { Component } from 'react';
import logo from '../logo.svg';
import '../../common.css';
import DisplayCards from './FinalDisplayCards';
import ShowSelectedPlayers from './FinalshowSelectedCard';
import FightingRing from './FinalFightingRing';
import playerInfo from '../../data.js'

//onclick the the display card reflect the details of clicked card into the showSelecedCard component

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
            playerInfo.map((elem) => {
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
