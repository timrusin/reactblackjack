import { useEffect, useState} from 'react'
import './Dealer.css'
import Card from './Card'


const Dealer = ({ setCardOne, setCardTwo, setBetPlaced, Deck, setTotal, total, hitIndex}) => {
    const [dealerCardOne, setDealerCardOne] = useState('')
    const [dealerCardTwo, setDealerCardTwo] = useState('')
    const [drawCard, setDrawCard] = useState (2)
    const [totalDisplay, setTotalDisplay] = useState(false)
    const [dealerTotal, setDealerTotal] = useState(0)
    const [dealerWins, setDealerWins] = useState(false)
    // const [dealerBlackJack, setDealerBlackJack] = useState(false)

    useEffect(()=>{
        setTimeout(()=>setTotalDisplay(true),1200)

        const DealerCardTwo = () => {
          setDealerCardTwo(true)
        }
        setDealerCardOne(true)
        setTimeout(DealerCardTwo,400)
        
        if (Deck[hitIndex+1].value + Deck[hitIndex+2].valueTwo <=21){
          setDealerTotal(Deck[hitIndex+1].value + Deck[hitIndex+2].valueTwo)
        } else if (Deck[hitIndex+1].valueTwo + Deck[hitIndex+2].value <=21){
          setDealerTotal(Deck[hitIndex+1].valueTwo + Deck[hitIndex+2].value)
        } else {
          setDealerTotal(Deck[hitIndex+1].value + Deck[hitIndex+2].value)
        }
    },[Deck,hitIndex])

      useEffect(()=>{
        if (dealerTotal<total){
          const drawInterval = setInterval(()=>{
            setDrawCard(drawCard + 1)
            setDealerTotal(dealerTotal + Deck[hitIndex + drawCard + 1].value)
            if (dealerTotal > total && dealerTotal < 21){
              setDealerWins(true)
              clearInterval(drawInterval)
            }
          },2000)
        }
      },[Deck,dealerTotal,drawCard,total,hitIndex])
        
      useEffect(()=>{
        if (dealerTotal > total && dealerTotal < 21){
          setTimeout(()=>{
            setDrawCard(0)
            setTotal(0)
            setBetPlaced(false)
            setDealerCardOne(false)
            setDealerCardTwo(false)
            setCardOne(false)
            setCardTwo(false)
            setDealerTotal(0)
            setTotalDisplay(false)
          },2000)

          
         
        }
      },[dealerTotal, setTotal, total, setBetPlaced, setCardOne, setCardTwo])

      
    
    


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
        <div className={drawCard >= 3 ? "third-card" : "card-hidding"}>
          <Card
            suit={Deck[hitIndex + 3].suit}
            color={Deck[hitIndex + 3].color}
            char={Deck[hitIndex + 3].char}
            value={Deck[hitIndex + 3].char}
            valueTwo={Deck[hitIndex + 3].valueTwo}
          />
        </div>
        <div className={drawCard >=4 ? "fourth-card" : "card-hidding"}>
          <Card
            suit={Deck[hitIndex + 4].suit}
            color={Deck[hitIndex + 4].color}
            char={Deck[hitIndex + 4].char}
            value={Deck[hitIndex + 4].char}
            valueTwo={Deck[hitIndex + 4].valueTwo}
          />
        </div>
        <div className={drawCard >=5 ? "fifth-card" : "card-hidding"}>
          <Card
            suit={Deck[hitIndex + 5].suit}
            color={Deck[hitIndex + 5].color}
            char={Deck[hitIndex + 5].char}
            value={Deck[hitIndex + 5].char}
            valueTwo={Deck[hitIndex + 5].valueTwo}
          />
        </div>
        <div className={drawCard >=6 ? "sixth-card" : "card-hidding"}>
          <Card
            suit={Deck[hitIndex + 6].suit}
            color={Deck[hitIndex + 6].color}
            char={Deck[hitIndex + 6].char}
            value={Deck[hitIndex + 6].char}
            valueTwo={Deck[hitIndex + 6].valueTwo}
          />
        </div>
        {dealerWins && <div className="dealer-total">
          <h2>Dealer Wins</h2>
        </div>}
        {totalDisplay && <div className="dealer-total">
          <h2>{`Dealer Total: ${dealerTotal}`}</h2>
        </div>}
      </div>
    </div>
  );
}

export default Dealer