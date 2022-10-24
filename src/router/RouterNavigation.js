import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar'
import Subscribe from '../components/subscribe/Subscribe';
import Home from '../pages/home/Home'
import Marketplace from '../pages/marketplace/Marketplace'
import Derivatives from '../pages/derivatives/Derivatives'
import Donate from '../pages/donate/Donate'
import Footer from '../components/footer/Footer';
import CoinDetails from '../components/CoinDetails/CoinDetails';
import AllExchanges from '../pages/exchanges/AllExchanges';
import NFTs from '../pages/nfts/NFTs';
import AllNfts from '../pages/allnfts/AllNfts';
import NFTsDetails from '../pages/nftsdetails/NFTsDetails';
import News from '../pages/news/News';
import DEchange from '../pages/derivatives/DExchange.jsx/DEchange';
function RouterNavigation() {
  return (
      <>
          <Router>
           <Navbar />
           <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/derivatives" element={<Derivatives />} />
            <Route path="/derivatives/exchange" element={<DEchange />} />
            <Route path="/coin/:id" element={<CoinDetails />} />
            <Route path="/all_exchanges" element={<AllExchanges />} />
            <Route path="/all_nfts" element={<AllNfts />} />
            <Route path="/nfts" element={<NFTs />} />
            <Route path="/nfts/:id" element={<NFTsDetails />} />
            <Route path="/news_and_updates" element={<News />} />
            <Route path="/subscribe" element={<Subscribe />} />
            <Route path="/donate" element={<Donate />} />
          </Routes>
          <Footer />
        </Router>
      </>

  )
}

export default RouterNavigation