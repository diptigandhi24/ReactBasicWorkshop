import React, { Component } from 'react';
import logo from '../logo.svg';
import '../../common.css';
import DisplayCards from './FinalDisplayCards';
import ShowSelectedPlayers from './FinalshowSelectedCard';
import FightingRing from './FinalFightingRing';
// import listOfSuperheroes from '../data.js';
import axios from 'axios';
import { superHerosData } from '../data/ApiConfig.js';


//Load the cards data from the server

class App extends Component {
  state={
    playerA:"",
    playerB:"",
    listOfSuperheroes:[]
  };
  componentDidMount() {
    axios.get(superHerosData).then(response => {

      this.setState({
        listOfSuperheroes: response.data.superheroes,

      })
    })
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
            this.state.listOfSuperheroes.map((elem) => {
              return <DisplayCards image={elem.image.url} name={elem.name} key={elem.id}
              onClick={()=>{
                if(this.state.playerA === ""){
                  this.setState((prevState)=>{
                    return{
                    playerA:elem,
                    listOfSuperheroes:prevState.listOfSuperheroes.filter(prevStateHero => prevStateHero.id != elem.id)
                  }})
                }else{
                  if(this.state.playerB ===""){
                    this.setState((prevState)=>{
                      return{
                      playerB:elem,
                      listOfSuperheroes:prevState.listOfSuperheroes.filter(prevStateHero => prevStateHero.id != elem.id)
                    }})
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
