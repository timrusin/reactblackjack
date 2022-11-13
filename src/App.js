import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [randomOpacity, setRandomOpacity] = useState()
  const [values, setValues] = useState('')
  const [color, setColor] = useState('')
  const [suit, setSuit] = useState('')
  const [valuesTwo, setValuesTwo] = useState('')
  const [colorTwo, setColorTwo] = useState('')
  const [suitTwo, setSuitTwo] = useState('')

  useEffect(()=>{
    setInterval(()=>{
      setRandomOpacity(Math.random())
    },300)
  },[])

  useEffect(()=>{
    const value = ['K','Q','A','J','10','9','8','7','6','5','4','3','2']
    const suits = ['fa-heart', 'fa-diamond', 'fa-spade', 'fa-club']
    const colors = ['red', 'black']
    const randomValue = Math.floor(Math.random()*13)
    const randomColor = Math.floor(Math.random()*2)
    const randomSuit = Math.floor(Math.random()*4)
    setValues(value[randomValue])
    setColor(colors[randomColor])
    setSuit(suits[randomSuit])
    setValuesTwo(value[Math.floor(Math.random()*13)])
    setColorTwo(colors[Math.floor(Math.random()*2)])
    setSuitTwo(suits[Math.floor(Math.random()*4)])
  },[])

  return (
    <div className="App">
      <h1 className='game-title' >BLACK JACK REACT</h1>
      <button className='play-button' style={{opacity: randomOpacity}}>PLAY</button>
        <div className='cards-container'>
          <div className="cards inner-border card-one ">
            <div className="top-left">
                <h1 style={{ color: color }} className="card-value">
                  {values}
                </h1> 
              <i style={{ color: color }} className={`fa-solid ${suit}`}></i>
            </div>
            <i style={{ color: color }} className={`fa-solid ${suit} center-suit`}></i>
            <div className="bottom-right">
                <h1 style={{ color: color }} className="card-value">
                  {values}
                </h1>
              <i style={{ color: color }} className={`fa-solid ${suit}`}></i>
             </div>
          </div>
          <div className="cards inner-border card-two">
            <div className="top-left">
                <h1 style={{ color: colorTwo }} className="card-value">
                  {valuesTwo}
                </h1> 
              <i style={{ color: colorTwo }} className={`fa-solid ${suitTwo}`}></i>
            </div>
            <i style={{ color: colorTwo }} className={`fa-solid ${suitTwo} center-suit`}></i>
            <div className="bottom-right">
                <h1 style={{ color: colorTwo }} className="card-value">
                  {valuesTwo}
                </h1>
              <i style={{ color: colorTwo }} className={`fa-solid ${suitTwo}`}></i>
             </div>
          </div>
        </div>
    </div>
  );
}

export default App;
