import React, { Component } from 'react';
import '../../common.css';


function DisplayCards(props) {

  //Part1: lets get the images and name property from the playerInfo and display it using the below JSX/HTML
  //Part2: Give onclick event to each card
  return <React.Fragment>
    <div onClick={props.onClick}>
      <img src={props.image} className="cards" />
      <h2>{props.name}</h2>
    </div>
  </React.Fragment>
}

export default DisplayCards;