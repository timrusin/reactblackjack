import { useState } from 'react'
import './Game.css'
import Card from './components/Card'

const Game = () => {
    const [cash, setCash] = useState(1000)
    const [currentBet, setCurrentBet] = useState(10)
    const [betPlaced, setBetPlaced] = useState(false)
    const [cardOne, setCardOne]= useState(false)
    const [cardTwo, setCardTwo]= useState(false)
    const [hitStand, setHitStand] =useState(false)

    const handleChange = (e) => {
        setCurrentBet(e.target.value)
    }

    const placeBet = () => {
        setCash(cash - currentBet)
        setBetPlaced(true)
        dealCards()
    }

    const dealCards = () =>{
        const CardTwo = ()=>{
            setCardTwo(true)
            setTimeout(()=>{setHitStand(true)},400)
          }
            setCardOne(true)
            setTimeout(CardTwo,400)
    }

  return (
    <div className='game-page-container fade'>
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
        <div className='player-card-container'>
            <div className={cardOne ? 'first-card' : 'card-hidding'}>
                <Card />
            </div>
            <div className={cardTwo ? 'second-card' : 'card-hidding'}>
                <Card />
            </div>
        </div>

        <div className={hitStand ? 'hit-stand fade' : 'hidden'}>
            <h2>Total: 20</h2>
            <button> HIT </button>
            <button> STAND </button>
        </div>
    </div>
  )
}

export default Game