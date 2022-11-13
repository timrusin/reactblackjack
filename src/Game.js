import { useState } from 'react'
import './Game.css'

const Game = () => {
    const [cash, setCash] = useState(1000)
    const [currentBet, setCurrentBet] = useState(null)

  return (
    <div className='game-page-container fade'>
        <div className='cash'>{ `$ ${cash}` }</div>
            <div className='bet'>
                <form>
                    <select className='bet-form'>
                        <option value="10">$10</option>
                        <option value="50">$50</option>
                        <option value="100">$100</option>
                        <option value="200">$200</option>
                        <option value="500">$500</option>
                    </select>
                    <button type="submit">PLACE BET</button>
                </form>
            </div>
        
    </div>
  )
}

export default Game