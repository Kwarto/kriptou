import React from 'react'
import { Circles } from 'react-loader-spinner'
import { CirclesWrapper } from './CirclesElement'
import loaderImg from '../../images/Loader.png'
function Circle() {
  return (
      <CirclesWrapper>
        <Circles
        type='Puff'
        color='rgba(17, 4, 129, 0.801)'
        height='100vh'
        width={100}
        timeout={3000}
        className='my-circle'/>
        <img src={loaderImg} alt="loader vector"/>
      </CirclesWrapper>
  )
}

export default Circle
