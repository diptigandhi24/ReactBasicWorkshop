import React, { Component } from 'react';
import '../../common.css';
function DisplayFightersScore(props) {
    return <div>
        <h1>{props.fighterInfo.name}</h1>
        <h2>
            {props.selectedFightCategory} :
            {props.fighterInfo.powerstats[props.selectedFightCategory.toLowerCase()]}
        </h2>

    </div>
};
export default DisplayFightersScore;