import React from 'react'
import { HomeWrapper, HomeContent, HomeItem } from './HomeElement'
import newImg from '../../images/news.svg'
import netImg from '../../images/network.svg'
import earnImg from '../../images/90999962d927162c54e4.svg'
import nftImg from '../../images/nft.svg'
import { FaShieldAlt } from 'react-icons/fa'
function Home() {
  return (
      <HomeWrapper>
          <h1 className='head'>Kriptou Guide <span><FaShieldAlt /></span></h1>
        <HomeContent>
              <HomeItem>
                  <img src={newImg} alt="" />
                  <h1>News & Updates</h1>
                  <div>
                      <p>The Kriptou News brings you the latest cryptocurrency news in less than 5 minutes a day. Join us to stay ahead, on the pulse of the digital currency community.</p>
                  </div>
                  <a href="/news-and-updates">Join News</a>
              </HomeItem>  
              <HomeItem>
                  <img src={earnImg} alt="" />
                  <h1>Crypto Exchange</h1>
                  <div>
                      <p>Kriptou provides best cryptocurrency exchange unit that connects you to your favorite crypto-currency. It's super easy to start, and after a few simple steps, you'll be trading in your favorite coin</p>
                  </div>
                  <a href="/all-exchanges">Exchange Units</a>
              </HomeItem> 
              <HomeItem>
                  <img src={nftImg} alt="" />
                  <h1>NFTs</h1>
                  <div>
                      <p>kriptou is the fastest, simplest, and easiest way to get more tokens and blockchain knowledge. you can go from zero to crypto master in no time. kriptou brings to you all that you need to know about your favorite nfts</p>
                  </div>
                  <a href="/nfts">Available NFTs</a>
              </HomeItem>
              <HomeItem>
                  <img src={netImg} alt="" />
                  <h1>Earning Team</h1>
                  <div>
                      <p>Free cryptocurrency and cash rewards when you join the kriptou team. Earn even more by referring new members and socializing with other users. Let's P2P some cryptocurrency</p>
                  </div>
                  <a href="/">Join Team</a>
              </HomeItem>  
        </HomeContent>
    </HomeWrapper>
  )
}

export default Home