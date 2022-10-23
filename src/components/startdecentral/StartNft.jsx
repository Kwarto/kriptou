import React from 'react'
import { StartNftWrapper } from './StartNftElement'
import bg from '../../images/decentra.webm'
function StartNft() {
  return (
    <StartNftWrapper>
        <video src={bg} className='bg-video'
          muted
          autoPlay={"autoplay"}
          preLoad="auto"
          loop >  
         </video>
         <div className='video-text'>
           <h1>Start Decentraland For NFTs</h1> 
           <p>Create, explore and trade in the first-ever virtual world owned by its users.</p> 
           <div className="d-btn">
            <a href="https://play.decentraland.org" target="_blank" rel="noopener noreferrer">Start Now</a>
           </div>
         </div>
    </StartNftWrapper>
  )
}

export default StartNft