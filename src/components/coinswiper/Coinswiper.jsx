import React, { useEffect, useState } from 'react'
import { CoinswiperWrapper, CoinBox } from './CoinswiperElement'
import { FaCoins } from 'react-icons/fa'
import Axios from 'axios'
import {Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
function Coinswiper() {
 const [cryptoList, setCryptoList] = useState([]);
  useEffect(() => {
        Axios.get(
            "https://api.coinlore.net/api/tickers/?start=0&limit=50"
        ).then((response) => {
          setCryptoList(response.data['data']);
        });
  }, []);
  return (
      <CoinswiperWrapper>
          <h1 className="head">Top Cryptocurrencies <span><FaCoins /></span></h1>
        <Swiper className='swiper_coin'
           // install Swiper modules
           modules={[Autoplay]}
          //  slidesPerView={4}
          breakpoints={{
            414: {
              width: 414,
              slidesPerView: 1,
              spaceBetween: 55
            },
            768: {
              width: 768,
              slidesPerView: 2,
              spaceBetween: 40
            },
            1200: {
              width: 1200,
              slidesPerView: 4,
              spaceBetween: 20
            },
          }}
            autoplay={{ delay: 5000, disableOnInteraction: false}}>
             {
               cryptoList.map((coin, id) => {
                return(
                    <>
                     <SwiperSlide className='coin_box' key={id}>
                      <div className='state'>
                         <h6>#{coin.rank}</h6>
                         <h5>{coin.symbol}</h5>
                      </div>
                      <CoinBox>
                      <div className='price'>
                        <p className='name'>{coin.name}</p>
                        <p className='name act'>${coin.price_usd}</p>
                      </div>
                      <div className="mark">
                        <p className='name grn'>${coin.market_cap_usd}</p>
                        <p className='name rd'>${coin.csupply}</p>
                      </div>
                      </CoinBox>
                     </SwiperSlide>
                    </>
                )
               })
             }
      </Swiper> 
    </CoinswiperWrapper>
  )
}
export default Coinswiper