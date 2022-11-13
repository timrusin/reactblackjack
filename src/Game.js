import { useState } from 'react'
import './Game.css'

const Game = () => {
    const [cash, setCash] = useState(1000)
  return (
    <div className='game-page-container fade'>
        <div className='cash'>{ `$ ${cash}` }</div>
    
    
    </div>
  )
}

export default Game