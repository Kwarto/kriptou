import React from 'react'
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import {AboutWrapper,AboutHeader  } from  './AboutElement';
function About() {
  return (
    <>
     <Navbar />
      <AboutWrapper>
       <AboutHeader>
        <h1>About Us</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam tempore ipsum quibusdam sapiente aut error, fugiat soluta a nihil beatae pariatur aliquid, dolorem laborum quasi similique magnam eos dolores exercitationem?</p>
        <div className="btn">
         <a href="/">Learn More</a>
        </div>
       </AboutHeader>
      </AboutWrapper> 
     <Footer />   
    </>
  )
}

export default About