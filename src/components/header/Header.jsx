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
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente corrupti tempore quod culpa saepe veritatis, itaque consectetur, asperiores aliquam non iusto ullam. Deleniti, doloremque tempora.</p>
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