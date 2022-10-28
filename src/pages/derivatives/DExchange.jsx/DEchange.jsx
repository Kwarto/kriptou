import React, { useEffect, useState } from 'react';
import { DEchangeWrapper } from './DExchangeElement'
import Axios from 'axios'
import Circles from '../../../components/circle/Circles';
import Navbar from '../../../components/navbar/Navbar';
import Footer from '../../../components/footer/Footer';
function DEchange() {
  const [cryptoList, setCryptoList] = useState([]);
  useEffect(() => {
    Axios.get(
      `https://api.coingecko.com/api/v3/derivatives/exchanges`
    ).then((response) => {
      setCryptoList(response.data)
    });
    // eslint-disable-next-line
  }, []);
  if (cryptoList.length === 0) {
    return (
      <>
        <div className='a-loader'>
          <Circles className='loader' />
        </div>
      </>
    )
  } else {
    return (
      <>
        <Navbar />
         <DEchangeWrapper>
        {
          cryptoList.map((exchange, id) => {
            return (
              <>
                <div key={id} className='exchange_list'>
                  <img src={exchange.image} alt={exchange.name} />
                  <p><a href={exchange.url} target="_blank" rel="noopener noreferrer">{exchange.name}</a></p>
                  <p>{exchange.number_of_futures_pairs}</p>
                  <p>{exchange.number_of_perpetual_pairs}</p>
                  <p>${exchange.open_interest_btc}</p>
                  <p>${exchange.trade_volume_24h_btc}</p>
                  <p className='id'>{exchange.id}</p>
                </div>
              </>
            )
          })
        }
         </DEchangeWrapper>
        <Footer />
      </>
    )
  }
}

export default DEchange