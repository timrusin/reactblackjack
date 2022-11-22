import { useState, useEffect } from 'react'
import Deck from './data/Deck'
import Card from './components/Card'
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

    const playerCards = []
    const dealerCards = []
    Deck.sort((a,b) => 0.5 - Math.random())

    const handleChange = (e) => {
        setCurrentBet(e.target.value)
    }

    const placeBet = () => {
        setCash(cash - currentBet)
        dealCards()
    }

    const dealCards = () =>{
        setBetPlaced(true)
        setTimeout(()=> {
            playerCards.push(Deck.pop())
            dealerCards.push(Deck.pop())
            if (dealerCards.length === 2){
                clearTimeout()
            } else {dealCards()}
            
        },800)
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

        <div className='playerCardsContainer'>
            {playerCards.map((card)=>{
                return (
                   <Card {...card}/>
                )
            })}

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