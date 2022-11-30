import React from 'react'
import './CardBlank.css'

const cardBlank = (props) => {
    console.log(props.dealerCards.length);
    if (props.stand === false && props.dealerCards.length <= 2){
        return (
          <div className="blank-card">
            <div className="cards inner-border"></div>
          </div>
        );
        }else{
  return
}}

export default cardBlank