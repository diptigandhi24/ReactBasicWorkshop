import React, { Component } from 'react';
import '../../common.css';


function DisplayCards(props) {
  let playerInfo = [{
    response: "success",
    id: 1,
    name: "Shuri",
    powerstats: {
      intelligence: 100,
      strength: 14,
      speed: 30,
      durability: 9,
      power: 25,
      combat: 70
    },
    image: { url: "https://image.ibb.co/hFrbCp/shuri.jpg" }
  },
  {
    response: "success",
    id: 2,
    name: "A-Bomb",
    powerstats: {
      intelligence: 38,
      strength: 100,
      speed: 17,
      durability: 80,
      power: 24,
      combat: 64
    },

    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10060.jpg"
    }
  },];
  //Part1: lets get the images and name property from the playerInfo and display it using the below JSX/HTML
  //Part2: Give onclick event to each card
  return <React.Fragment>
    <div>
      <img src={playerInfo[0].image.url} className="cards" />
      <h2>{playerInfo[0].name}</h2>
    </div>
    <div>
      <img src={playerInfo[1].image.url} className="cards" />
      <h2>{playerInfo[1].name}</h2>
    </div>
  </React.Fragment>
}

export default DisplayCards;