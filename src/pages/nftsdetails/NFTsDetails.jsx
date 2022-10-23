import React, { useEffect, useState } from 'react'
import { DetailsWrapper } from './NFTsDetailsElement'
import Coinswiper from '../../components/coinswiper/Coinswiper'
import { useParams } from 'react-router-dom';
import Axios  from 'axios';
function NFTsDetails() {
    const { id } = useParams();
    const [nftsList, setNftsList] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const { data } = await Axios.get(
                `https://api.coingecko.com/api/v3/nfts/${id}`
            );
                setNftsList(data)
                console.log(data);
        }
       
      fetchData();  // eslint-disable-next-line
    }, []);
  return (
      <>
       <DetailsWrapper>
         <div className='left'>
          <h2>{nftsList.id}</h2>
          <p dangerouslySetInnerHTML={{__html: nftsList.description }} className='desc'></p>
         </div>
         <div className="right">
         <h1>{nftsList.name}</h1>
         <h2>{nftsList.asset_platform_id}</h2>
         <h3>CON A: {nftsList.contract_address}</h3>
         <h3>FP24: ${nftsList.floor_price_in_usd_24h_percentage_change}</h3>
         <span>
           <h4>NC: {nftsList.native_currency}</h4>
           <h4>NUAs: {nftsList.number_of_unique_addresses}</h4>
          </span>
          <span>
           <h4>UNA24%: {nftsList.number_of_unique_addresses_24h_percentage_change}</h4>
           <h4>TS: {nftsList.total_supply}</h4>
          </span>
         </div>
          </DetailsWrapper>
          <Coinswiper />
      </>
  )
}

export default NFTsDetails