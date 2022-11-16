import { useEffect, useState} from 'react'
import './Dealer.css'
import Card from './Card'


const Dealer = (props) => {
    const [dealerCardOne, setDealerCardOne] = useState('')
    const [dealerCardTwo, setDealerCardTwo] = useState('')
    const [dealerDrawIndex, setDealerDrawIndex] = useState({})
    const [dealerBlackJack, setDealerBlackJack] = useState(false)
    const [dealerBust, setDealerBust] = useState (false)

    useEffect(()=>{
        setDealerDrawIndex(1)

        const DealerCardTwo = () => {
            setDealerCardTwo(true)
        }
        setTimeout(()=>setDealerCardOne(true))
        setTimeout(DealerCardTwo,400)
    },[])

  return (
    <div className='dealer-container'>
        <div className='dealer-card-container'>
            <div className={dealerCardOne ? 'first-card' : 'card-hidding'}>
                <Card 
                suit = {props.Deck[props.lastPlayerIndex + 1].suit}
                color = {props.Deck[props.lastPlayerIndex + 1].color}
                char = {props.Deck[props.lastPlayerIndex + 1].char}
                value = {props.Deck[props.lastPlayerIndex + 1].char}
                valueTwo = {props.Deck[props.lastPlayerIndex + 1].valueTwo}

                />
            </div>
            <div className={dealerCardTwo ? 'second-card' : 'card-hidding'}>
                <Card 
                 suit = {props.Deck[props.lastPlayerIndex + 2].suit}
                 color = {props.Deck[props.lastPlayerIndex + 2].color}
                 char = {props.Deck[props.lastPlayerIndex + 2].char}
                 value = {props.Deck[props.lastPlayerIndex + 2].char}
                 valueTwo = {props.Deck[props.lastPlayerIndex + 2].valueTwo}
                />
            </div>
            <div className={dealerDrawIndex >= 2 ? 'third-card' : 'card-hidding'}>
                <Card 
                 suit = {props.Deck[props.lastPlayerIndex + 3].suit}
                 color = {props.Deck[props.lastPlayerIndex + 3].color}
                 char = {props.Deck[props.lastPlayerIndex + 3].char}
                 value = {props.Deck[props.lastPlayerIndex + 3].char}
                 valueTwo = {props.Deck[props.lastPlayerIndex + 3].valueTwo}
                />
            </div>
            <div className={dealerDrawIndex >= 3 ? 'fourth-card' : 'card-hidding'}>
                <Card 
                 suit = {props.Deck[props.lastPlayerIndex + 4].suit}
                 color = {props.Deck[props.lastPlayerIndex + 4].color}
                 char = {props.Deck[props.lastPlayerIndex + 4].char}
                 value = {props.Deck[props.lastPlayerIndex + 4].char}
                 valueTwo = {props.Deck[props.lastPlayerIndex + 4].valueTwo}
                />
            </div>
            <div className={dealerDrawIndex >= 4 ? 'fifth-card' : 'card-hidding'}>
                <Card 
                 suit = {props.Deck[props.lastPlayerIndex + 5].suit}
                 color = {props.Deck[props.lastPlayerIndex + 5].color}
                 char = {props.Deck[props.lastPlayerIndex + 5].char}
                 value = {props.Deck[props.lastPlayerIndex + 5].char}
                 valueTwo = {props.Deck[props.lastPlayerIndex + 5].valueTwo}
                />
            </div>
            <div className={dealerDrawIndex >= 5 ? 'sixth-card' : 'card-hidding'}>
                <Card 
                 suit = {props.Deck[props.lastPlayerIndex + 6].suit}
                 color = {props.Deck[props.lastPlayerIndex + 6].color}
                 char = {props.Deck[props.lastPlayerIndex + 6].char}
                 value = {props.Deck[props.lastPlayerIndex + 6].char}
                 valueTwo = {props.Deck[props.lastPlayerIndex + 6].valueTwo}
                />
            </div>
        </div>
    
    
    </div>
  )
}

export default Dealer