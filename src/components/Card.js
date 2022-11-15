import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className="cards inner-border">
    <div className="top-left">
        <h1 style={{ color: props.color }} className="card-value">
          {props.char}
        </h1> 
      <i style={{ color: props.color }} className={`fa-solid ${props.suit}`}></i>
      </div>
      <i style={{ color: props.color }} className={`fa-solid ${props.suit} center-suit`}></i>
      <div className="bottom-right">
        <h1 style={{ color: props.color }} className="card-value">
          {props.char}
        </h1>
      <i style={{ color: props.color }} className={`fa-solid ${props.suit}`}></i>
     </div>
  </div>
  )
}

export default Card