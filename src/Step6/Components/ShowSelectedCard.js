import React, { Component } from 'react';
import '../../common.css';

export default function FinalShowSelectedCard(props) {
    return <div className={props.className}>
        <h1>{props.player}</h1>

        {
            (props.fighter != "")
            && <React.Fragment>
                <img src={props.fighter.image.url} className="centerCroppedImage" />
                <h2>{props.fighter.name}</h2>
            </React.Fragment>
        }


    </div>

}