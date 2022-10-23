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
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et qui dignissimos mollitia molestias explicabo cumque itaque quod, totam tempore ullam repellat nihil dicta iste, est magnam impedit dolore quos.</p>
                  </div>
                  <a href="/news-and-updates">Join News</a>
              </HomeItem>  
              <HomeItem>
                  <img src={earnImg} alt="" />
                  <h1>Crypto Exchange</h1>
                  <div>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et qui dignissimos mollitia molestias explicabo cumque itaque quod, totam tempore ullam repellat nihil dicta iste, est magnam impedit dolore quos.</p>
                  </div>
                  <a href="/all-exchanges">Exchange Units</a>
              </HomeItem> 
              <HomeItem>
                  <img src={nftImg} alt="" />
                  <h1>NFTs</h1>
                  <div>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et qui dignissimos mollitia molestias explicabo cumque itaque quod, totam tempore ullam repellat nihil dicta iste, est magnam impedit dolore quos.</p>
                  </div>
                  <a href="/nfts">Available NFTs</a>
              </HomeItem>
              <HomeItem>
                  <img src={netImg} alt="" />
                  <h1>Earning Team</h1>
                  <div>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et qui dignissimos mollitia molestias explicabo cumque itaque quod, totam tempore ullam repellat nihil dicta iste, est magnam impedit dolore quos.</p>
                  </div>
                  <a href="/">Join Team</a>
              </HomeItem>  
        </HomeContent>
    </HomeWrapper>
  )
}

export default Home