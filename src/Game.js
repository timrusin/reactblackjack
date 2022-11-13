import { useState } from 'react'
import './Game.css'
import Card from './components/Card'

const Game = () => {
    const [cash, setCash] = useState(1000)
    const [currentBet, setCurrentBet] = useState(10)
    const [betPlaced, setBetPlaced] = useState(false)
    const [cardOne, setCardOne]= useState(false)
    const [cardTwo, setCardTwo]= useState(false)
    const [card1, setCard1]= useState(false)
    const [card11, setCard11]= useState(false)
    const [card111, setCard111]= useState(false)
    const [hitCard, setHitCard]= useState('setCard')
    const [hitStand, setHitStand] =useState(false)

    console.log(hitCard);

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

    const Hit = () =>{
        setHitCard(hitCard + 1)
        
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

        <div className={cardOne ? 'first-card' : 'card-hidding'}>
            <Card />
        </div>
        <div className={cardTwo ? 'second-card' : 'card-hidding'}>
            <Card />
        </div>
        <div className={card1 ? 'third-card' : 'card-hidding'}>
            <Card />
        </div>
        <div className={card11 ? 'fourth-card' : 'card-hidding'}>
            <Card />
        </div>
        <div className={card11 ? 'fifth-card' : 'card-hidding'}>
            <Card />
        </div>

        <div className={hitStand ? 'hit-stand fade' : 'hidden'}>
            <h2>Total: 20</h2>
            <button onClick={Hit}> HIT </button>
            <button> STAND </button>
        </div>



    </div>
  )
}

export default Game