import React, { useEffect, useState } from 'react' 
import {DetailWrapper, CoinText, LeftWrapper} from './CoinAboutElement'
import Axios from 'axios'
import { useParams } from 'react-router-dom';

function CoinAbout() {
    const { id } = useParams();
    const [cryptoList, setCryptoList] = useState([]);
    useEffect(() => {
        Axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}`
        ).then((response) => {
            setCryptoList(response.data)
        });
        // eslint-disable-next-line
    }, []);
  return (
      <>
          <DetailWrapper>
              <CoinText>
                  <div className="left">
                   <p className='sym'>{ cryptoList.symbol}</p>
                   <h4 className='name'>{cryptoList.name}</h4>
                   <p><strong>Category:</strong> {cryptoList.categories}</p>
                   <div>
                     <p> <strong>Genesis Date: </strong>
                      {cryptoList.genesis_date}
                      </p> 
                   </div>
                  </div>
              </CoinText>
              <LeftWrapper>
                  <h2>Currency Standing</h2>
                  <div className="stand">
                      <div className="abt">
                       <h5 className='sym'>{cryptoList.symbol}</h5>
                       <h3>{ cryptoList.name}</h3>
                      </div>
                      <div className="scr">
                          <h4>#{cryptoList.market_cap_rank}</h4>
                          <h4>LS: { cryptoList.liquidity_score}</h4>
                      </div>
                  </div>
                  <div className='l-div'>
                      <span>
                      <h4>Community Score</h4>
                          <p className='con'># {cryptoList.community_score}</p>
                      </span>
                      <span>
                       <h4>Sentiment Votes Up</h4>
                       <small className='con'># { cryptoList.sentiment_votes_up_percentage}</small>
                      </span>
                  </div>
                  <p>Last Updated <small>{ cryptoList.last_updated}</small></p>
              </LeftWrapper>
          </DetailWrapper>
      </>
  )
}

export default CoinAbout