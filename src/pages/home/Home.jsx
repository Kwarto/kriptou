import React from 'react'
import Coinswiper from '../../components/coinswiper/Coinswiper'
import Header from '../../components/header/Header'
import Homesection from '../../components/homesection/Homesection'
import WhyKriptou from '../../components/whykriptou/WhyKriptou'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
function Home() {
  return (
    <div className='home'>
        <Navbar />
        <Header />
        <Homesection /> 
        <WhyKriptou />
        <Coinswiper />
        <Footer />
    </div>
  )
}

export default Home