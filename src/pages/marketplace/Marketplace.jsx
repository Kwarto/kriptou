import React, {useEffect, useState} from 'react'
import { MarketTopNews, MarketplaceWrapper, CoinList, TopList, Logo} from './MarketplaceElement'
import trendImg from '../../images/TrendingIcon.png'
import nftImg from '../../images/NFT_Icon.png'
import derivateImg from '../../images/derivatives.png'
import excImg from '../../images/exchange.png'
import Axios from 'axios'
import CoinExchange from '../../components/CoinExchange/CoinExchange'
import {Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import Circles from '../../components/circle/Circles'

const trend = [
    {
     title: 'Top Market',
     descImg: trendImg,
     head: 'NFTs',
     logoImg: nftImg
    },
    {
     title: 'Top Market',
     descImg: trendImg,
     head: 'Derivatives',
     logoImg: derivateImg
    },
    {
     title: 'Top Market',
     descImg: trendImg,
     head: 'All_Exchanges',
     logoImg: excImg
    },
    {
      title: 'Top Market',
      descImg: trendImg,
      head: 'All_NFTs',
      logoImg: nftImg
     }
]
function Marketplace() {
    const [cryptoList, setCryptoList] = useState([]);
    useEffect(() => {
        Axios.get(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=249&page=1&sparkline=false"
        ).then((response) => {
            setCryptoList(response.data)
        });
    }, []);
  if (cryptoList.length === 0) {
    return (
      <>
        <div className='a-loader'>
          < Circles className='loader'/>
        </div>
      </>
    )
  } else {
    return (
      <>
          <MarketTopNews>
          <Swiper className='head_slider'
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
              spaceBetween: 10
            },
            1200: {
              width: 1200,
              slidesPerView: 3,
              spaceBetween: 50
            },
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}>
            {
             trend.map(({title, descImg, head, logoImg}, index) => {
               return(
                   <SwiperSlide key={index}>
                    <TopList>
                    <div>
                      <span>
                       <h4>{title}</h4>
                       <img src={descImg} alt='trending' />
                      </span>
                      <a href={`${head.toLocaleLowerCase()}`}>More</a>
                    </div>
                     <Logo>
                      <img src={logoImg} alt="bitcoin logo" width='28%' />
                      <span>
                          <p>{head}</p>
                      </span>
                     </Logo> 
                    </TopList>   
                  </SwiperSlide>
               ) 
             })
            }
            
          </Swiper>
        </MarketTopNews>
        <MarketplaceWrapper>
        {cryptoList.map((coin, index) => {
            return (
                   <CoinList key={index}>
                    <div className='about'>
                    <span className='t-abt'>
                     <h5>#{coin.market_cap_rank}</h5>
                     <h4>{coin.symbol}</h4>
                     </span>
                     <h3 className='name'><a href={`coin/${coin.id}`}>{coin.name}</a></h3>
                    </div>
                    <div className='about'>
                      <span>
                       <h5>Max_s: {coin.max_supply}</h5>
                       <h5>Tot_s: {coin.total_supply}</h5>
                      </span>
                      <h5>Circ_S: {coin.circulating_supply}</h5>
                    </div>
                  
                    
                    <div className='cap'>
                        <h5>M_Cap: {coin.market_cap}</h5>
                        <span>
                        <h5 className={`${coin.price_change_24h > 0 ? 'text-red' : 'text-green'}`}>24HR: {coin.price_change_24h}</h5>
                     </span>
                    </div>
                    
                    <div className='cap'>
                       <h5>Vol24: {coin.total_volume}</h5>
                       <h5>CP: ${coin.current_price}</h5>
                    </div>
                    <div className='vol_span'>
                      <h6>Last updated: {coin.last_updated}</h6>
                    </div>

                    </CoinList>
            )
        })}  
          </MarketplaceWrapper>
          <CoinExchange />
      </>
  )
}
  }
  

export default Marketplace

