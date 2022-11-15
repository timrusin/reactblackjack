import { useState, useEffect } from 'react'
import './Game.css'
import Card from './components/Card'
import Deck from './data/Deck'

const Game = () => {
    const [cash, setCash] = useState(1000)
    const [currentBet, setCurrentBet] = useState(10)
    const [betPlaced, setBetPlaced] = useState(false)
    const [cardOne, setCardOne] = useState(false)
    const [cardTwo, setCardTwo] = useState(false)
    const [hitIndex, setHitIndex] = useState(1)
    const [hitStand, setHitStand] = useState(false)
    const [total, setTotal] = useState(0)
    const [blackJack, setBlackJack] = useState(false)
    const [bust, setBust] = useState(false)

    

    const handleChange = (e) => {
        setCurrentBet(e.target.value)
    }

    const placeBet = () => {
        setCash(cash - currentBet)
        setBetPlaced(true)
        dealCards()
    }

    const dealCards = () =>{
        Deck.sort((a,b) => 0.5 - Math.random());
        setCardOne(false)
        setCardTwo(false)
        setHitIndex(1)
        setBlackJack(false)
        setBust(false)

        const CardTwo = () => {
            setCardTwo(true)
            setTimeout(()=>{setHitStand(true)},400)
        }
        setTimeout(()=>setCardOne(true))
        setTimeout(CardTwo,400)

        if (Deck[0].value + Deck[1].valueTwo <=21){
            setTotal(Deck[0].value + Deck[1].valueTwo)
        } else if (Deck[0].valueTwo + Deck[1].value <=21){
            setTotal(Deck[0].valueTwo + Deck[1].value)
        } else {
        setTotal(Deck[0].value + Deck[1].value)
    }
    }
    const Hit = () =>{
        setHitIndex(hitIndex + 1)
        setTotal(total + Deck[hitIndex+1].value)
    }

    useEffect(()=> {
        if (total === 21){
            setTimeout(blackJackWin,800)
        } if (total > 21){
            setTimeout(busted,800)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[total])
    
    const busted = () => {
        setBust(true)
        setHitStand(false)
        setBetPlaced(false)
    }
    const blackJackWin = () => {
        setBlackJack(true)
        setHitStand(false)
        setBetPlaced(false)
        setCash(cash + currentBet * 2)
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
       
        <div className='win-loose-message'>
            {blackJack && <h1>BLACK JACK! You win!</h1>}
            {bust && <h1>{`${total} Busted! Bummer`}</h1>}
        </div>

        <div className='player-card-container'>
            <div className={cardOne ? 'first-card' : 'card-hidding'}>
                <Card 
                suit = {Deck[0].suit}
                color = {Deck[0].color}
                char = {Deck[0].char}
                value = {Deck[0].char}
                valueTwo = {Deck[0].valueTwo}

                />
            </div>
            <div className={cardTwo ? 'second-card' : 'card-hidding'}>
                <Card 
                 suit = {Deck[1].suit}
                 color = {Deck[1].color}
                 char = {Deck[1].char}
                 value = {Deck[1].char}
                 valueTwo = {Deck[1].valueTwo}
                />
            </div>

            <div className={hitIndex >= 2 ? 'third-card' : 'card-hidding'}>
                <Card 
                 suit = {Deck[2].suit}
                 color = {Deck[2].color}
                 char = {Deck[2].char}
                 value = {Deck[2].char}
                 valueTwo = {Deck[2].valueTwo}
                />
            </div>

            <div className={hitIndex >= 3 ? 'fourth-card' : 'card-hidding'}>
                <Card 
                 suit = {Deck[3].suit}
                 color = {Deck[3].color}
                 char = {Deck[3].char}
                 value = {Deck[3].char}
                 valueTwo = {Deck[3].valueTwo}
                />
            </div>

            <div className={hitIndex >= 4 ? 'fifth-card' : 'card-hidding'}>
                <Card 
                 suit = {Deck[4].suit}
                 color = {Deck[4].color}
                 char = {Deck[4].char}
                 value = {Deck[4].char}
                 valueTwo = {Deck[4].valueTwo}
                />
            </div>
        </div>

        <div className={hitStand ? 'hit-stand fade' : 'hidden'}>
            <h2>{`Total: ${total}`}</h2>
            <button onClick={Hit}> HIT </button>
            <button> STAND </button>
        </div>
    </div>
  )
}

export default Game