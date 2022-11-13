import { useState } from 'react'
import './Game.css'

const Game = () => {
    const [cash, setCash] = useState(1000)
    const [currentBet, setCurrentBet] = useState(null)

    const handleChange = (e) => {
        setCurrentBet(e.target.value)
    }

    const placeBet = () => {
        setCash(cash - currentBet)
    }

    console.log(currentBet);
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
                <button onClick={placeBet}>PLACE BET</button>
    </div>
  )
}

export default Game