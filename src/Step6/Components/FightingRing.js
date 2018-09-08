import React, { Component } from 'react';
import '../../common.css';


//Ring needs to show the following Details
//1.Name of the both players
//2.Fighting category selected by the player and there respective score in that
//3.Display the Winner in terms of PlayerA and PlayerB
//4.We can pass all the info
function DisplayfightersScore(props){
    return <div>
        <h1>{props.fighterInfo.name}</h1>
            <h2>
            {props.selectedFightCategory} : 
            {props.fighterInfo.powerstats[props.selectedFightCategory.toLowerCase()]}
            </h2>
        
    </div>
};
class FightingRing extends Component {
    powerStats = ['Intelligence', 'Strength', 'Speed', 'Durability', 'Power', 'Combat'];
    state={
        fightCategory: "",
        winner: "",
        displayFighters:false
    }
    fightClicked = (fightCategory) => {
        fightCategory.toLowerCase();
        let playerA = this.props.characterA.powerstats[fightCategory];
        let playerB = this.props.characterB.powerstats[fightCategory];
        this.setState({
            fightCategory,
            winner: playerA > playerB ? "PlayerA" : "PlayerB",
            displayFighters:true
        })
    }
    render() {
        return <div className="ringInfo">
            {console.log("This just a test",<div name={this.state.playerA} >{this.state.winner}</div>)}
            <div className="fightButtons">
                {this.powerStats.map(stat => <button onClick={()=>{
                    this.fightClicked(stat);
                    }} disabled={!(this.props.characterA && this.props.characterB)}>
                    {stat}
                    </button>)}
            </div>
            {
            (this.state.displayFighters)
            &&<div className="powerstat">
                <DisplayfightersScore fighterInfo = {this.props.characterA} selectedFightCategory={this.state.fightCategory}/>
                <DisplayfightersScore fighterInfo = {this.props.characterB} selectedFightCategory={this.state.fightCategory}/>
                <section className="winner"><span>{this.state.winner}</span> Wins!!!</section>
            </div>
            }
        </div >

    }
}

export default FightingRing;