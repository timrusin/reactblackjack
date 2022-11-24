import { useEffect, useState } from 'react'
import Deck from './data/Deck'
import Card from './components/Card'
import './Game.css'

//dealer and player hands in global scope
let playerCards = []
let dealerCards = []

const Game = () => {
    //!Too much state management still
    const [cash, setCash] = useState(1000)
    const [currentBet, setCurrentBet] = useState(10)
    const [betPlaced, setBetPlaced] = useState(false)
    const [stand, setStand] = useState (false)
    const [hitStand, setHitStand] = useState(false)
    const [total, setTotal] = useState(0)
    const [dealerTotal, setDealerTotal] = useState(0)
    const [blackJack, setBlackJack] = useState(false)
    const [bust, setBust] = useState(false)
    const [dealerWins, setDealerWins] = useState(false)

    //shuffles the deck
    Deck.sort((a,b) => 0.5 - Math.random())

    //sees change in bet value
    const handleChange = (e) => {
        setCurrentBet(e.target.value)
    }

    //sets bet, subtracts bet from cash, and calls the deal function 
    const placeBet = () => {
        setCash(cash - currentBet)
        setBetPlaced(true)
        playerCards = []
        dealerCards = []
        dealCards()
    }

    //deals player and dealer cards adding them to the arrays, removes place bet button, adds hit-stand buttons
    const dealCards = () =>{
        setBetPlaced(true)
        setTimeout(()=> {
            setTimeout(()=>setHitStand(true),1200)
            playerCards.push(Deck.pop())
            dealerCards.push(Deck.pop())
            setTotal(playerCards[0].value)
            if (dealerCards.length === 2){
                cardsSum(playerCards, setTotal)
                clearTimeout()
            } else {dealCards()}
        },800)
    }
    
    //calculates the sum of player and dealer and sets total in state
    const cardsSum = (array, state)=> {
        let added = 0
        for (let i=0; i<array.length; i++){
            added += array[i].value
            state(added)
        }}

        //checks total of user's cards for black jack or bust
        useEffect(()=>{
            if (total === 21 && playerCards.length === 2){
                setTimeout(blackJackWin, 400)
            } if (total>21){
                setTimeout(busted, 400)
            }
        })      

    //allows player to hit for another card and calculates/updates total
    const Hit = () =>{
        playerCards.push(Deck.pop())
        cardsSum(playerCards, setTotal)
    }

    //calls dealer to draw their cards on stand
    const Stand = () =>{
        setStand(true)
        setHitStand(false)
        cardsSum(dealerCards, setDealerTotal)
    }


    //when player busts
    const busted = () => {
        setBust(true)
        setHitStand(false)
        setTimeout(reset, 1500)
    }

    //when player gets blackjack
    const blackJackWin = () => {
        setCash(cash + currentBet)
        setTimeout(reset, 1500)
    }

    //resets for new hand 
    const reset = () => {
        playerCards = []
        dealerCards = []
        setTotal(0)
        setBetPlaced(false)
        setBust(false)
        setBlackJack(false)
        setHitStand(false)
        setStand(false)
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
            {dealerWins && <h1>Dealer Wins</h1>}
        </div>

        <div className='dealerCardsContainer'>
        {dealerCards.map(item => {
                return <Card key={item.id} {...item}/>
           })}
        </div>

        {stand && <h2 className='dealer-total'>{`Dealer's Total: ${dealerTotal}`}</h2>}

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