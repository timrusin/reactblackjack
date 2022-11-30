import React from 'react'
import './CardBlank.css'

const cardBlank = (props) => {
    console.log(props.dealerCards.length);
    if (props.stand === false && props.dealerCards.length <= 2){
        return (
          <div className="blank-card">
            <div className="cards inner-border">
              <h1 className='blank-title'>Black Jack React</h1>
            </div>
          </div>
        );
        }else{
  return
}}

export default cardBlank