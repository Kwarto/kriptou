import {React, useState} from 'react'
import { NavbarWrapper, LogoWrapper, NavListWrapper, NavItem } from './NavbarElement'
import { FaBars, FaHeart } from 'react-icons/fa'
import logoImg from '../../images/logo_krip.png'
function Navbar() {

    const [fix, setFix] = useState(false);

    function setFixed() {
        if (window.screenY >= 0) {
            setFix(true)
        } else {
            setFix(false)
        }
    }
    window.addEventListener('scroll', setFixed)
    
  return (
      <>
          <NavbarWrapper className={fix ? 'fixed' : 'not-fixed'}>
              <LogoWrapper>
                  <img src={logoImg} alt='logo' />
              </LogoWrapper>
              <NavListWrapper>
                  <NavItem>
                     <a href="/">Home</a> 
                  </NavItem>
                  <NavItem>
                     <a href="/marketplace">Marketplace</a> 
                  </NavItem>
                  <NavItem className='mid'>
                     <a href="/nfts">NFTs</a> 
                  </NavItem>
                  <NavItem>
                      <a href="/donate">Donate</a> 
                      <FaHeart className='f-heart'/>
                  </NavItem>
                  <div className="others">
                  <NavItem>
                      <a href="/derivatives">Derivatives</a> 
                  </NavItem> 
                  <NavItem>
                      <a href="/all-exchanges">Exchange Units</a> 
                  </NavItem>  
                  <NavItem>
                      <a href="/nfts">NFTs</a> 
                  </NavItem> 
                  <NavItem>
                      <a href="/derivatives/exchange">Derivatives Exchange</a> 
                  </NavItem> 
                  <NavItem>
                      <a href="news-and-updates">News & Updates</a> 
                  </NavItem> 
                  <NavItem>
                  <a href="/subscribe">Subscribe Newsletter</a> 
                  </NavItem>
                  </div>
              </NavListWrapper>
              <div className='menu-bars'>
                  <FaBars className='f-menu'/>
              </div>
          </NavbarWrapper>
      </>
  )
}

export default Navbar