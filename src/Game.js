import { useEffect, useState } from 'react'
import Deck from './data/Deck'
import Card from './components/Card'
import './Game.css'

let playerCards = []
let dealerCards = []

const Game = () => {
    const [cash, setCash] = useState(1000)
    const [currentBet, setCurrentBet] = useState(10)
    const [betPlaced, setBetPlaced] = useState(false)
    const [stand, setStand] = useState (false)
    const [hitStand, setHitStand] = useState(false)
    const [total, setTotal] = useState(0)
    const [blackJack, setBlackJack] = useState(false)
    const [bust, setBust] = useState(false)

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
            setHitStand(true)
            playerCards.push(Deck.pop())
            dealerCards.push(Deck.pop())
            if (dealerCards.length === 2){
                playerSum(playerCards)
                clearTimeout()
            } else {dealCards()}
        },800)
    }
    
    const playerSum = ()=> {
        let added = 0
        for (let i=0; i<playerCards.length; i++){
            added += playerCards[i].value
            setTotal(added)

        }}
        useEffect(()=>{
            if (total === 21 && playerCards.length===2){
                setTimeout(blackJackWin, 400)
            } if (total>21){
                setTimeout(busted, 400)
            }
        })
        
    const Hit = () =>{
        playerCards.push(Deck.pop())
        playerSum()
    }

    const Stand = () =>{
        setStand(true)
        setHitStand(false)
    }


    
    const busted = () => {
        setBust(true)
        setHitStand(false)
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

        <div className='dealerCardsContainer'>
        {dealerCards.map(item => {
                return <Card key={item.id} {...item}/>
           })}
        </div>


        <div className='playerCardsContainer'>
           {playerCards.map(item => {
                return <Card key={item.id} {...item}/>
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