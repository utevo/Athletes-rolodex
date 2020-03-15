import React from 'react';

import './card.style.css';

export const Card = (props) => {
    console.log(props)
    return (
        <div className='card'>
            <img alt="user" src={`https://robohash.org/${props.user.id}/?set=set4`}/>
            <h1> {props.user.name} </h1>
            <p> {props.user.company.name} </p>
            <p> {props.user.email} </p>
        </div>
    )
}