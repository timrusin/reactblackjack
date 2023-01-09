import { useEffect, useState } from 'react'
import { redirect } from "react-router-dom"
import Deck from './data/Deck'
import Card from './components/Card'
import CardBlank from './components/CardBlank'
import './Game.css'

//dealer and player hands in global scope
let playerCards = []
let dealerCards = []
let cardCount = 0

const Game = () => {
    //!Too much state management still
    const [cash, setCash] = useState(500)
    const [currentBet, setCurrentBet] = useState(10)
    const [betPlaced, setBetPlaced] = useState(false)
    const [stand, setStand] = useState (false)
    const [hitStand, setHitStand] = useState(false)
    const [total, setTotal] = useState(0)
    const [dealerTotal, setDealerTotal] = useState(0)
    const [blackJack, setBlackJack] = useState(false)
    const [dealerWins, setDealerWins] = useState(false)
    const [dealerBusts, setDealerBusts] = useState(false)
    const [bust, setBust] = useState(false)
    const [gameOver, setGameOver] = useState(false)

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
            cardCount ++
            dealerCards.push(Deck.pop())
            cardCount ++
            setTotal(playerCards[0].value) //adds the value of the first card in the displayed total
            if (dealerCards.length === 2){
                cardsSum(playerCards, setTotal)
                clearTimeout()
            } else {dealCards()}
        },800)
    }
    
    //calculates the sum of player and dealer and sets total in state
    const cardsSum = (array, state)=> {
            let valueArray = []
            array.forEach((item)=>valueArray.push(item.value))
            state(valueArray.reduce((a,b)=>a+b))
    }

        // !Checks for Ace card and accomodates for 1 value, new total isn't being seen by the folowoing useEffect though.
        // useEffect(()=>{
        //     let charArray = []
        //     playerCards.forEach((card)=>{
        //         charArray.push(card.char)
        //         if (charArray.includes("A") && total > 21){
        //             setTotal(total - 10)
        //         }
        //     })
        // })

        //checks total of user's cards for black jack or bust
        useEffect(()=>{
            if (total === 21 && playerCards.length === 2){
                setTimeout(blackJackWin, 400)
            } if (total>21){
                setTimeout(busted, 400)
            }
        })     

        //Calculates dealers hand
        useEffect(() => {
            if (stand && dealerTotal <= total){
                setTimeout(() =>{dealerCards.push(Deck.pop())
                    cardCount ++
                cardsSum(dealerCards, setDealerTotal)},1500)
            } 
            if (stand && dealerTotal > total && dealerTotal < 22){
                setDealerWins(true)
                setTimeout(()=> setStand(false),2000)
                setTimeout(reset,2000)
            }
            if (stand && dealerTotal > 21){
                setDealerBusts(true)
                setStand(false)
                setCash(cash + currentBet*2)
                setTimeout(reset,2000)
            }
        },[stand,dealerTotal,total,cash,currentBet])

        useEffect(()=>{
           if (cash === 0 && (bust || dealerWins)){
            setGameOver(true)
            redirect('/')
        }
        },[cash, bust, dealerWins])


    //allows player to hit for another card and calculates/updates total
    const Hit = () =>{
        playerCards.push(Deck.pop())
        cardsSum(playerCards, setTotal)
        cardCount ++
    }

    //calls dealer to draw their cards on stand
    const Stand = () => {
        setStand(true)
        setHitStand(false)
        cardsSum(dealerCards, setDealerTotal)
    }

    //when player busts
    const busted = () => {
        setBust(true)
        setHitStand(false)
        setTimeout(reset, 2000)
    }

    //when player gets blackjack
    const blackJackWin = () => {
        setHitStand(false)
        setBlackJack(true)
        setCash(cash + currentBet*.5)
        setTimeout(reset, 2000)
    }

    //resets for new hand - pushes hands to beginning of deck and shuffles deck after 52 cards have been gone through.
    const reset = () => {
        playerCards.forEach((card)=>Deck.unshift(card))
        playerCards = []
        dealerCards.forEach((card)=> Deck.unshift(card))
        dealerCards = []
        if (cardCount >= 52){
            Deck.sort((a,b) => 0.5 - Math.random())
            cardCount = 0
        }
        setTotal(0)
        setBetPlaced(false)
        setBust(false)
        setBlackJack(false)
        setDealerWins(false)
        setDealerBusts(false)
        setHitStand(false)
        setStand(false)
    }

    const gameOverReset = () => {
        reset()
        setCash(500)
        setGameOver(false)
    }

  return (
    <div className='game-page-container fade'>
        <div className='cash'>{ `$ ${cash}` }</div>
            <form className='bet'>
                <select onChange={handleChange} className='bet-form'>
                    {cash >=10 && <option value="10">$10</option>}
                    {cash >=50 && <option value="50">$50</option>}
                    {cash >= 100 && <option value="100">$100</option>}
                    {cash >= 200 && <option value="200">$200</option>}
                    {cash >= 500 && <option value="500">$500</option>}
                    {cash !== 500 && <option value = {cash}>ALL IN</option>}
                </select>
            </form>
        {!betPlaced && <button className='deal-button' onClick={!gameOver ? placeBet : gameOverReset}>{!gameOver ? "DEAL" : "Play Again"}</button>}
        {!betPlaced && <h1 className='place-bet'>Place Your Bet</h1>}
       
        <div className='win-loose-message'>
            {blackJack && <h1>BLACK JACK!</h1>}
            {bust && <h1>{`${total}, Busted! Bummer`}</h1>}
            {dealerWins && <h1>Dealer wins</h1>}
            {dealerBusts && <h1>Dealer Busts, You Win!</h1>}
            {gameOver && <h1>Game Over</h1>}
        </div>

        {betPlaced && <CardBlank stand = {stand} dealerCards={dealerCards}/>}
        <div className='dealerCardsContainer'>
        {dealerCards.map(item => {
                return <Card key={item.id} dealerTotal={dealerTotal} {...item}/>
           })}
        </div>

        {stand && <h2 className='dealer-total'>{`Dealer's Total: ${dealerTotal}`}</h2>}

        <div className='playerCardsContainer'>
           {playerCards.map(item => {
                return <Card key={item.id} total={total} {...item}/>
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