import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [randomOpacity, setRandomOpacity] = useState()
  const [color, setColor] =useState('')
  const [suit, setSuit] = useState('')

  useEffect(()=>{
    setInterval(()=>{
      setRandomOpacity(Math.random())
    },300)
  },[])

  useEffect(()=>{
    const suits = ['fa-heart', 'fa-diamond', 'fa-spade', 'fa-club']
    const colors = ['red', 'black']
    const randomColor = Math.floor(Math.random()*2)
    const randomSuit = Math.floor(Math.random()*4)
    setColor(colors[randomColor])
    setSuit(suits[randomSuit])
  },[])

  return (
    <div className="App">
      <h1 className='game-title' >BLACK JACK REACT</h1>
      <button className='play-button' style={{opacity: randomOpacity}}>PLAY</button>
        <div className='cards-container'>
          <div className="cards inner-border card-one ">
            <div className="top-left">
                <h1 style={{ color: color }} className="D">
                  D
                </h1> 
              <i style={{ color: color }} className={`fa-solid ${suit}`}></i>
            </div>
            <i style={{ color: color }} className={`fa-solid ${suit} center-suit`}></i>
            <div className="bottom-right">
                <h1 style={{ color: color }} className="D">
                  D
                </h1>
              <i style={{ color: color }} className={`fa-solid ${suit}`}></i>
             </div>
          </div>
          <div className="cards inner-border card-two">
            <div className="top-left">
                <h1 style={{ color: color }} className="D">
                  D
                </h1> 
              <i style={{ color: color }} className={`fa-solid ${suit}`}></i>
            </div>
            <i style={{ color: color }} className={`fa-solid ${suit} center-suit`}></i>
            <div className="bottom-right">
                <h1 style={{ color: color }} className="D">
                  D
                </h1>
              <i style={{ color: color }} className={`fa-solid ${suit}`}></i>
             </div>
          </div>
        </div>
    </div>
  );
}

export default App;
