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
    })

  return (
    <div className='dealer-container'>Dealer testing
        <div className='dealer-card-container'>
            <div className={dealerCardOne ? 'first-card' : 'card-hidding'}>
                <Card 
                suit = {props.Deck[{}].suit}
                color = {props.Deck[{}].color}
                char = {props.Deck[{}].char}
                value = {props.Deck[{}].char}
                valueTwo = {props.Deck[{}].valueTwo}

                />
            </div>
            <div className={dealerCardTwo ? 'second-card' : 'card-hidding'}>
                <Card 
                 suit = {props.Deck[{}].suit}
                 color = {props.Deck[{}].color}
                 char = {props.Deck[{}].char}
                 value = {props.Deck[{}].char}
                 valueTwo = {props.Deck[{}].valueTwo}
                />
            </div>

            <div className={dealerDrawIndex >= 2 ? 'third-card' : 'card-hidding'}>
                <Card 
                 suit = {props.Deck[{}].suit}
                 color = {props.Deck[{}].color}
                 char = {props.Deck[{}].char}
                 value = {props.Deck[{}].char}
                 valueTwo = {props.Deck[{}].valueTwo}
                />
            </div>

            <div className={dealerDrawIndex >= 3 ? 'fourth-card' : 'card-hidding'}>
                <Card 
                 suit = {props.Deck[{}].suit}
                 color = {props.Deck[{}].color}
                 char = {props.Deck[{}].char}
                 value = {props.Deck[{}].char}
                 valueTwo = {props.Deck[{}].valueTwo}
                />
            </div>

            <div className={dealerDrawIndex >= 4 ? 'fifth-card' : 'card-hidding'}>
                <Card 
                 suit = {props.Deck[{}].suit}
                 color = {props.Deck[{}].color}
                 char = {props.Deck[{}].char}
                 value = {props.Deck[{}].char}
                 valueTwo = {props.Deck[{}].valueTwo}
                />
            </div>

            <div className={dealerDrawIndex >= 5 ? 'sixth-card' : 'card-hidding'}>
                <Card 
                 suit = {props.Deck[{}].suit}
                 color = {props.Deck[{}].color}
                 char = {props.Deck[{}].char}
                 value = {props.Deck[{}].char}
                 valueTwo = {props.Deck[{}].valueTwo}
                />
            </div>
        </div>
    
    
    </div>
  )
}

export default Dealer