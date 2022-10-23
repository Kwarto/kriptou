import React, { useEffect, useState } from 'react'
import Coinswiper from '../../components/coinswiper/Coinswiper'
import { FaGlobe } from 'react-icons/fa'
import Axios from 'axios'
import {CoinExchangeWrapper, ExchangeWrapper, Trade} from './AllExchangesElement'
function AllExchanges() {
    const [cryptoList, setCryptoList] = useState([]);
    useEffect(() => {
        Axios.get(
        `https://api.coingecko.com/api/v3/exchanges/?per_page=99`
        ).then((response) => {
            setCryptoList(response.data)
        });
        // eslint-disable-next-line
    }, []);
    return (
       <> 
        <CoinExchangeWrapper>
          {
            cryptoList.map((exchange, index) => {
                return (
                    <ExchangeWrapper>
                    <Trade key={index}>
                        <div className="exchange">
                        <div className='flex'>
                            <p>#{exchange.trust_score_rank}.</p>
                            <img src={exchange.image} alt={exchange.name} />
                        </div>
                        <div className='flex'>
                                <p className='g-ico'>
                                    <FaGlobe />
                                    {exchange.country}
                                </p>
                         <p className='name'><a href={`${exchange.url}`} target="_blank" rel="noopener noreferrer">{exchange.name }</a></p>
                        </div>
                        <div className="flex">
                         <p className={`${exchange.trade_volume_24h_btc > 0 ?'text-red' : 'text-green'}}`}>TV. {exchange.trade_volume_24h_btc}</p>
                         <p className={`${exchange.trade_volume_24h_btc > 0 ?'text-red' : 'text-green'}}`}>TVN. {exchange.trade_volume_24h_btc_normalized}</p> 
                        </div>
                        <div className="flex">
                        <p>#TS. {exchange.trust_score}</p>
                        <p>EST. {exchange.year_established}</p>
                        </div>
                    </div>
                    </Trade>
                </ExchangeWrapper>
               ) 
            })
          }
        </CoinExchangeWrapper>
          <Coinswiper />  
       </>        
    )}

export default AllExchanges