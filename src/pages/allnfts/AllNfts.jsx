import React, { useEffect, useState } from 'react'
import { NftWrapper, NftList } from '../nfts/NFTsElement'
import NftHeader from '../../components/nftheader/NftHeader'
import Axios from 'axios'
import StartNft from '../../components/startdecentral/StartNft';
function NFTs() {
    const [nftList, setNftList] = useState([]);
    useEffect(() => {
        Axios.get(
            "https://api.coingecko.com/api/v3/nfts/list?per_page=243"
        ).then((response) => {
            setNftList(response.data);
        });
    }, []);
    return (
        <>
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
         </NftWrapper>
         <StartNft />
        </>
  )
}

export default NFTs