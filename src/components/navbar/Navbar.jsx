import {React, useState} from 'react'
import { NavbarWrapper, LogoWrapper, NavListWrapper, NavItem } from './NavbarElement'
import { FaBars, FaHeart, FaTimes } from 'react-icons/fa'
import logoImg from '../../images/logo_krip.png'
import { Link } from 'react-router-dom'
function Navbar() {
    const [isMobile, setIsMobile] = useState(false)
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
                  <Link to='/'><img src={logoImg} alt='logo' /></Link>
              </LogoWrapper>
                <NavListWrapper
                  onClick={() => setIsMobile(true)}
                  className={isMobile ? "nav-links-mobile" : "nav-links"}
                >
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
                      <a href="/all_exchanges">Exchange Units</a> 
                  </NavItem>  
                  <NavItem>
                      <a href="/nfts">NFTs</a> 
                  </NavItem> 
                  <NavItem>
                      <a href="/derivatives/exchange">Derivatives Exchange</a> 
                  </NavItem> 
                  <NavItem>
                      <a href="news_and_updates">News & Updates</a> 
                  </NavItem> 
                  <NavItem>
                   <a href="/subscribe">Subscribe Newsletter</a> 
                  </NavItem>
                  <NavItem>
                   <a href="/t&c">Whitepapers</a> 
                  </NavItem>
                  <NavItem>
                   <a href="/faqs">FAQs</a> 
                  </NavItem>
                  <NavItem>
                   <a href="/about_us">About</a> 
                  </NavItem>
                  </div>
              </NavListWrapper>
              <div className='menu-bars' onClick={() => setIsMobile(!isMobile)}>
                  {isMobile ?  <FaTimes className='f-menu'/> : <FaBars className='f-menu'/>}
              </div>
          </NavbarWrapper>
      </>
  )
}

export default Navbar