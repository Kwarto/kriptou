import React, {useEffect, useState} from 'react'
import { MarketplaceWrapper, DerivativesList } from './DerivativesElement'
import Circles from '../../components/circle/Circles'
import Axios from 'axios'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
// import { Link } from 'react-router-dom'
function Derivatives() {
    const [cryptoList, setCryptoList] = useState([]);
    useEffect(() => {
        Axios.get(
            "https://api.coingecko.com/api/v3/derivatives"
        ).then((response) => {
            setCryptoList(response.data)
        });
    }, []);
    if (cryptoList.length === 0) {
        return (
            <>
                <div className='a-loader'>
                    < Circles className='loader' />
                </div>
            </>
        )
    } else {
        return (
            <>
             <Navbar />
             <MarketplaceWrapper>
                    {cryptoList.map((derivative, index) => {
                        return (
                            <DerivativesList key={index}>
                                <div className='about'>
                                    <span className='t-abt'>
                                        <h5 className='sym'>{derivative.symbol}</h5>
                                    </span>
                                    <h3 className='name'><a href='/derivatives/exchange'>{derivative.market}</a></h3>
                                </div>
                                <div className='about'>
                                    <h5>Basis: {derivative.basis}</h5>
                                    <h5>Spread: {derivative.spread}</h5>
                                </div>
                                <div>
                                    <span className='cap'>
                                        <h5>FR: {derivative.funding_rate}</h5>
                                        <h5>Price:  ${derivative.price}</h5>
                                    </span>
                                </div>
                    
                                <div className='cap'>
                                    <h4>LTA: {derivative.last_traded_at}</h4>
                                    <span>
                                        <h5 className={`${derivative.open_interest < 1 ? 'text-red' : 'text-green'}`}>OI: ${derivative.open_interest}</h5>
                                    </span>
                                </div>
                    
                                <div className='vol'>
                                    <span>
                                        <h5>Index: {derivative.index}</h5>
                                    </span>
                                    <span>
                                        <h5>{derivative.contract_type}</h5>
                                    </span>
                                </div>
                                <div>
                                    <span className='vol'>
                                        <h5>V24: ${derivative.volume_24h}</h5>
                                        <h5>PPC24: {derivative.price_percentage_change_24h}</h5>
                                    </span>
                                </div>

                            </DerivativesList>
                        )
                    })}
                </MarketplaceWrapper>
             <Footer />
            </>
        )
    }
}

export default Derivatives

