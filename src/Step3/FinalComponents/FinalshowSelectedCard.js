import React, { Component } from 'react';
import '../../common.css';

export default function FinalShowSelectedCard(props) {
    return <div className={props.className}>
        <h1>{props.player}</h1>
    </div>

}