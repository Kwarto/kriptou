import React, { useEffect, useState } from 'react'
import {TickerWidgetWrapper} from './TickerWidgetElement'
import Axios from 'axios'
function TickerWidget() {
 const [cryptoList, setCryptoList] = useState([]);
    useEffect(() => {
        Axios.get(
            "https://api.coinlore.net/api/tickers/?start=0&limit=2"
        ).then((response) => {
          setCryptoList(response.data['data'])
        });
 }, []);
    return (
      <>
       <TickerWidgetWrapper>
         <div className="Ticker-Box">
          {
           cryptoList.map((coin, index) =>{
            return(
              <div key={index} className='coin-wrap'>
                <div className="coin">
                  <h2>{coin.name} <span>({coin.symbol})</span></h2>
                  <h4>$ { coin.price_usd}</h4>
                </div>
                <div className="abt-coin">
                  <div>
                    <h5>Rank</h5>
                    <p># { coin.rank}</p>
                  </div>
                  <div className="market">
                  <div>
                    <h5>Market Cap</h5>
                    <p>${ coin.market_cap_usd}</p>
                  </div>
                  <div>
                    <h5>Volume</h5>
                    <p>${ coin.volume24}</p>
                  </div>
                  </div>
                </div>
              </div>
            )
           })
          }  
         </div>
       </TickerWidgetWrapper>
      </>
  )
}

export default TickerWidget