import React from 'react'
import Lottie from 'react-lottie';
import {LottieWrapper} from './CirclesElement'
import * as animationData from '../../images/cryptocurrency-lottie-animation.json'

const Circles = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  
  return (
    <LottieWrapper>
       <Lottie options={defaultOptions} height={250} width={250} />
    </LottieWrapper>
  )
}

export default Circles