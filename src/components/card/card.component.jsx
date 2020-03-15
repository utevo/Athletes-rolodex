import React from 'react';

import './card.style.css';

export const Card = (props) => {
  return (
    <div className='card'>
      <img alt="user" src={props.user.image} />
      <h1> {props.user.name} </h1>
      <p> {props.user.company.name} </p>
      <p> {props.user.email} </p>
    </div>
  )
}