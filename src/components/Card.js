import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className="cards inner-border">
    <div className="top-left">
        <h1 style={{ color: "red" }} className="card-value">
          K
        </h1> 
      <i style={{ color: "red" }} className="fa-solid fa-spade"></i>
    </div>
    <i style={{ color: "red" }} className="fa-solid fa-spade center-suit"></i>
    <div className="bottom-right">
        <h1 style={{ color: "red" }} className="card-value">
          K
        </h1>
      <i style={{ color: "red" }} className="fa-solid fa-spade"></i>
     </div>
  </div>
  )
}

export default Card