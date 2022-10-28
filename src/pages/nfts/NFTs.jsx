import React, { useEffect, useState } from 'react'
import { NftWrapper, NftList } from './NFTsElement'
import NftHeader from '../../components/nftheader/NftHeader'
import Axios from 'axios'
import StartNft from '../../components/startdecentral/StartNft';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
function NFTs() {
    const [nftList, setNftList] = useState([]);
    useEffect(() => {
        Axios.get(
            "https://api.coingecko.com/api/v3/nfts/list?per_page=12"
        ).then((response) => {
            setNftList(response.data);
        });
    }, []);
    return (
        <>
        <Navbar />
         <NftHeader />
         <NftWrapper>    
          {nftList.map((nfts, index) => {
            return (
                <NftList key={index}>
                    <div className='nfts'>
                     <span>
                      <h4 className='name'><a href={`nfts/${nfts.id}`}>{nfts.name}</a></h4>
                     </span>
                     <span>
                      <p className='name id'>{nfts.asset_platform_id}</p>
                      <p className='con-ad'>{nfts.contract_address}</p>  
                      <h5 className='title'>Contract Address</h5>      
                     </span> 
                    </div>
                </NftList>
            )
          })}
         <div className='cta'>
            <a href="/all-nfts">More NFTs</a>
         </div>
         </NftWrapper>
         <StartNft />
         <Footer />
        </>
  )
}

export default NFTs