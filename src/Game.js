import { useState, useEffect } from 'react'
import './Game.css'

const Game = () => {
    const [cash, setCash] = useState(1000)
    const [currentBet, setCurrentBet] = useState(10)
    const [betPlaced, setBetPlaced] = useState(false)
    const [stand, setStand] = useState (false)
    const [hitStand, setHitStand] = useState(false)
    const [total, setTotal] = useState(0)
    const [blackJack, setBlackJack] = useState(false)
    const [bust, setBust] = useState(false)

    const handleChange = (e) => {
        setCurrentBet(e.target.value)
    }

    const placeBet = () => {
        setCash(cash - currentBet)
        dealCards()
    }

    const dealCards = () =>{
        console.log("Deal out player and dealer initial cards");
        setTimeout(()=> {

        },400)
    }




    
    const Hit = () =>{

        
    }

    const Stand = () =>{

        setStand(true)
    }


    
    const busted = () => {
        setBust(true)

        setBetPlaced(false)
    }
    const blackJackWin = () => {
        setCash(cash + currentBet)
        setBlackJack(true)
        setBetPlaced(false)
    }
    
  return (
    <div className='game-page-container'>
        <div className='cash'>{ `$ ${cash}` }</div>
            <form className='bet'>
                <select onChange={handleChange} className='bet-form'>
                    <option value="10">$10</option>
                    <option value="50">$50</option>
                    <option value="100">$100</option>
                    <option value="200">$200</option>
                    <option value="500">$500</option>
                </select>
            </form>
        {!betPlaced && <button className='bet-button' onClick={placeBet}>PLACE BET</button>}
        {!betPlaced && <h1 className='place-bet'>Place Your Bet</h1>}
       
      

        <div className='win-loose-message'>
            {blackJack && <h1>BLACK JACK!</h1>}
            {bust && <h1>{`${total}, Busted! Bummer`}</h1>}
        </div>

     
            {betPlaced && <h2 className='player-total'>{`Your Total: ${total}`}</h2>}
            <div className='player-buttons'>
                {hitStand && <button className='hit-stand' onClick={Hit}> HIT </button>}
                {hitStand && <button className='hit-stand' onClick={Stand}> STAND </button>}
             </div>
    </div>
  )
}

export default Game