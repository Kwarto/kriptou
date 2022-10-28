import React from 'react'
import { FooterWrapper } from './FooterElement'
import { FaEnvelope, FaFacebook, FaInstagram, FaMapMarked, FaPhone, FaTwitter } from 'react-icons/fa'
function Footer() {
  return (
    <>
      <FooterWrapper>
        <div className='footer_container'>
          <div className="footer_item a">
            <h1>Kriptou</h1>
            <p>
            Kriptou is a community driven platform that brings together new people from around the world to learn about cryptocurrency
            </p>
            <h3>Get Updates</h3>
            <div className="socials">
              <FaFacebook className='s_icon'/>
              <FaTwitter className='s_icon'/>
              <FaInstagram className='s_icon'/>
            </div>
          </div>

          <div className="footer_item">
            <h1>Information</h1>
            <p>
              <a href="/donate">Support</a>
            </p>
            <p>
              <a href="/subscribe">NewsLetter</a>
            </p>
            <p>
              <a href="/faqs">FAQs</a>
            </p>
          </div>

          <div className="footer_item">
            <h1>Company</h1>
            <p><a href="/about_us">About Us</a></p>
            <p><a href="/our_team">Our Team</a></p>
            <p><a href="/career">Career</a></p>
            <p><a href="/t&c">Teams & Conditions</a></p>
            <p><a href="/privacy_policy">Privacy Policy</a></p>
          </div>

          <div className="footer_item">
            <h1>Contact Us</h1>
            <span>
              <FaEnvelope className='c_icon'/>
              <p>dev.kriptou@gmail.com</p>
            </span>
            <span>
              <FaMapMarked className='c_icon'/>
              <p>Ghana, Kumasi</p>
            </span>
            <span>
              <FaPhone className='c_icon'/>
              <p>+233 204 378 020</p>
            </span>
          </div>
        </div>
        <hr />
        <p className='copy'>&copy; 2022 | All Rights Reserved</p>
      </FooterWrapper>
    </>
  )
}

export default Footer