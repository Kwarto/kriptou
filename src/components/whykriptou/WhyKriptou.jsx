import React from 'react'
import { WhyKriptouWrapper, WhyContent, WhySideImg, WhySideTxt } from './WhyKriptouElement'
import { FaQuestionCircle } from 'react-icons/fa'
import mockupImg from '../../images/mockup.png'
function WhyKriptou() {
  return (
      <>
        <WhyKriptouWrapper>
          <h1 className='head'>Why Kriptou <span><FaQuestionCircle /></span></h1>
        <WhyContent>
            <WhySideImg>
                    <div>
                    <img src={mockupImg} alt="mobile design" />
                    <img src={mockupImg} alt="mobile design"/>
                    </div>
            </WhySideImg>
            <WhySideTxt>
             <div>
              <p>
              Kriptou is the first ever local cryptocurrency market tracker. We use the latest technology to provide you to the best of local cryptocurrency prices and charts, so that you can make informed decisions about your investments.
              </p>
             </div>
             <div>
              <p>
              Kriptou is a free, public cryptocurrency market data platform. Here you can follow the trend of most popular cryptos and track their price. You can also set up alerts so you’re notified at the first sign of any possible price movements.
              </p>
             </div>
             <div>
              <p>
              Kriptou is a cryptocurrency market ticker that aggregates the latest prices of various cryptocurrencies, and displays them in real time. It’s easy to use and understand, with all the data automatically synchronized in multiple formats such as USD, BTC, ETH and more.
              </p>
             </div>
             <div>
              <p>
              Kriptou is the cryptocurrency ticker web application, allowing users to track the top cryptocurrencies such as Bitcoin, Litecoin, Ethereum and Ripple. Users can also view charts for each of these cryptocurrencies and follow the value of hundreds of other digital currencies.
              </p>
             </div>
            </WhySideTxt>
 
          </WhyContent>
        </WhyKriptouWrapper>
      </>
  )
}

export default WhyKriptou