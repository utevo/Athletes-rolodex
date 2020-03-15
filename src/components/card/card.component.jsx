import React from 'react';

import './card.style.css';

export const Card = (props) => {
    console.log(props)
    return (
        <div className='card'>
            <h1> {props.user.name} </h1>
        </div>
    )
}