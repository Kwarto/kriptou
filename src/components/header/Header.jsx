import React from 'react'
import { HeaderWrapper, HeaderContent, HeaderImgWrapper } from './HeaderElement'
import HeaderImg from '../../images/header.png'
import { FaCheck } from 'react-icons/fa'
import TickerWidget from '../Widget/TickerWidget'
function Header() {
  return (
      <>
       <HeaderWrapper>
         <HeaderContent>
          <h1 className='head'> Kriptou Ticker <span><FaCheck /></span></h1> 
          <p>Local cryptocurrency market tracker. Track your favorite crypto currencies and focus on analyzing, researching and trading and to assisting investors to find reliable information about the latest cryptocurrency in the market</p>
          <a href='/'>Read More</a>
        </HeaderContent>
         <HeaderImgWrapper>
            <img src={HeaderImg} alt="header-banner" />   
         </HeaderImgWrapper>
       </HeaderWrapper>
       <TickerWidget />
      </>
  )
}

export default Header