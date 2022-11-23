import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './Title.css';
import Deck from './data/Deck'

function Title() {
  const [randomOpacity, setRandomOpacity] = useState()

  useEffect(()=>{
    setInterval(()=>{
      setRandomOpacity(Math.random())
    },300)
  },[])

  useEffect(()=>{
      Deck.sort((a,b) => 0.5 - Math.random());
      }
  ,[])

  return (
    <div className="App">
      <h1 className='game-title'>BLACK JACK REACT</h1>

      <Link to='/game'><button className='play-button' style={{opacity: randomOpacity}}>PLAY</button></Link>
        
        <div className='cards-container'>
          <div className="title-cards inner-border title-one">
            <div className="top-left">
                <h1 style={{ color: Deck[0].color }} className="card-value">
                  {Deck[0].value}
                </h1> 
              <i style={{ color: Deck[0].color }} className={`fa-solid ${Deck[0].suit}`}></i>
            </div>
            <i style={{ color: Deck[0].color }} className={`fa-solid ${Deck[0].suit} center-suit`}></i>
            <div className="bottom-right">
                <h1 style={{ color: Deck[0].color }} className="card-value">
                  {Deck[0].value}
                </h1>
              <i style={{ color: Deck[0].color }} className={`fa-solid ${Deck[0].suit}`}></i>
             </div>
          </div>

          <div className="title-cards inner-border title-two">
            <div className="top-left">
                <h1 style={{ color: Deck[1].color }} className="card-value">
                  {Deck[1].value}
                </h1> 
              <i style={{ color: Deck[1].color }} className={`fa-solid ${Deck[1].suit}`}></i>
            </div>
            <i style={{ color: Deck[1].color }} className={`fa-solid ${Deck[1].suit} center-suit`}></i>
            <div className="bottom-right">
                <h1 style={{ color: Deck[1].color }} className="card-value">
                  {Deck[1].value}
                </h1>
              <i style={{ color: Deck[1].color }} className={`fa-solid ${Deck[1].suit}`}></i>
             </div>
          </div>
        </div>
    </div>
  );
}

export default Title;