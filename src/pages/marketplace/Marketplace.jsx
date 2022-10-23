import React, {useEffect, useState} from 'react'
import { MarketTopNews, MarketplaceWrapper, CoinList, TopList, Logo } from './MarketplaceElement'
import trendImg from '../../images/TrendingIcon.png'
import nftImg from '../../images/NFT_Icon.png'
import derivateImg from '../../images/derivatives.png'
import excImg from '../../images/exchange.png'
import Axios from 'axios'
import CoinExchange from '../../components/CoinExchange/CoinExchange'
// import { Link } from 'react-router-dom'
function Marketplace() {
    const [cryptoList, setCryptoList] = useState([]);
    useEffect(() => {
        Axios.get(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=249&page=1&sparkline=false"
        ).then((response) => {
            setCryptoList(response.data)
        });
    }, []);
  return (
      <>
        <MarketTopNews>
            <TopList>
                  <div>
                   <h4>Top Markets <span>
                          <img src={trendImg} alt='trending' /></span></h4>
                    <a href='/nfts'>More</a>
                  </div>       
                  <Logo>
                      <img src={nftImg} alt="bitcoin logo" width='28%' />
                      <span>
                          <p>NFTs</p>
                      </span>
                  </Logo>
              </TopList>
              <TopList>
                  <div>
                   <h4>Top Markets <span>
                          <img src={trendImg} alt='trending' /></span></h4>
                    <a href="/derivatives">More</a>
                  </div>       
                  <Logo>
                      <img src={derivateImg} alt="bitcoin logo" width='28%' />
                      <span>
                          <p>Derivatives</p>
                      </span>
                  </Logo>
              </TopList>
              <TopList>
                  <div>
                   <h4>Top Markets <span>
                          <img src={trendImg} alt='trending' /></span></h4>
                    <a href="/all-exchanges">More</a>
                  </div>       
                  <Logo>
                      <img src={excImg} alt="bitcoin logo" width='28%' />
                      <span>
                          <p>Exchange</p>
                      </span>
                  </Logo>
            </TopList>
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

export default Marketplace

