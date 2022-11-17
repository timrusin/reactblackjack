import { useEffect, useState} from 'react'
import './Dealer.css'
import Card from './Card'


const Dealer = ({ setBetPlaced, Deck, total, hitIndex}) => {
    const [dealerCardOne, setDealerCardOne] = useState('')
    const [dealerCardTwo, setDealerCardTwo] = useState('')
    const [totalDisplay, setTotalDisplay] = useState(false)
    const [dealerTotal, setDealerTotal] = useState(0)
    // const [dealerBlackJack, setDealerBlackJack] = useState(false)
    // const [dealerBust, setDealerBust] = useState (false)

    useEffect(()=>{
        setTimeout(()=>setTotalDisplay(true),1200)
        
        const DealerCardTwo = () => {
          setDealerCardTwo(true)
        }
        setTimeout(()=>setDealerCardOne(true))
          setTimeout(DealerCardTwo,400)

        if (Deck[hitIndex+1].value + Deck[hitIndex+2].valueTwo <=21){
          setDealerTotal(Deck[hitIndex+1].value + Deck[hitIndex+2].valueTwo)
        } else if (Deck[hitIndex+1].valueTwo + Deck[hitIndex+2].value <=21){
          setDealerTotal(Deck[hitIndex+1].valueTwo + Deck[hitIndex+2].value)
        } else {
          setDealerTotal(Deck[hitIndex+1].value + Deck[hitIndex+2].value)
        }

    },[Deck, hitIndex])


  
  return (
    <div className="dealer-container">
      <div className="dealer-card-container">
        <div className={dealerCardOne ? "first-card" : "card-hidding"}>
          <Card
            suit={Deck[hitIndex + 1].suit}
            color={Deck[hitIndex + 1].color}
            char={Deck[hitIndex + 1].char}
            value={Deck[hitIndex + 1].char}
            valueTwo={Deck[hitIndex + 1].valueTwo}
          />
        </div>
        <div className={dealerCardTwo ? "second-card" : "card-hidding"}>
          <Card
            suit={Deck[hitIndex + 2].suit}
            color={Deck[hitIndex + 2].color}
            char={Deck[hitIndex + 2].char}
            value={Deck[hitIndex + 2].char}
            valueTwo={Deck[hitIndex + 2].valueTwo}
          />
        </div>
        <div className={null ? "third-card" : "card-hidding"}>
          <Card
            suit={Deck[hitIndex + 3].suit}
            color={Deck[hitIndex + 3].color}
            char={Deck[hitIndex + 3].char}
            value={Deck[hitIndex + 3].char}
            valueTwo={Deck[hitIndex + 3].valueTwo}
          />
        </div>
        <div className={null ? "fourth-card" : "card-hidding"}>
          <Card
            suit={Deck[hitIndex + 4].suit}
            color={Deck[hitIndex + 4].color}
            char={Deck[hitIndex + 4].char}
            value={Deck[hitIndex + 4].char}
            valueTwo={Deck[hitIndex + 4].valueTwo}
          />
        </div>
        <div className={null ? "fifth-card" : "card-hidding"}>
          <Card
            suit={Deck[hitIndex + 5].suit}
            color={Deck[hitIndex + 5].color}
            char={Deck[hitIndex + 5].char}
            value={Deck[hitIndex + 5].char}
            valueTwo={Deck[hitIndex + 5].valueTwo}
          />
        </div>
        <div className={null ? "sixth-card" : "card-hidding"}>
          <Card
            suit={Deck[hitIndex + 6].suit}
            color={Deck[hitIndex + 6].color}
            char={Deck[hitIndex + 6].char}
            value={Deck[hitIndex + 6].char}
            valueTwo={Deck[hitIndex + 6].valueTwo}
          />
        </div>
        {totalDisplay && <div className="dealer-total">
          <h2>{`Dealer Total: ${dealerTotal}`}</h2>
        </div>}
      </div>
    </div>
  );
}

export default Dealer