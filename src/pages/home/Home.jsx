import React from 'react'
import Coinswiper from '../../components/coinswiper/Coinswiper'
import Header from '../../components/header/Header'
import Homesection from '../../components/homesection/Homesection'
import WhyKriptou from '../../components/whykriptou/WhyKriptou'
function Home() {
  return (
    <div className='home'>
        <Header />
        <Homesection /> 
        <WhyKriptou />
        <Coinswiper />
    </div>
  )
}

export default Home