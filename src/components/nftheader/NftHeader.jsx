import React from 'react'
import {NftHeaderWrapper, HeaderContent} from './NftHeaderElement'
function NftHeader() {
  return (
    <NftHeaderWrapper>
      <HeaderContent>
        <h1>Top NFTs</h1>
        <p>
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, corrupti, quae molestias expedita eos magni, nostrum consectetur dolorum officia neque culpa ipsam repellendus excepturi et ducimus sit adipisci distinctio? Nulla.
        </p>
        <div className="hero-btn">
         <a href="/">Check All NFTs</a>
        </div>
      </HeaderContent>    
    </NftHeaderWrapper>
  )
}

export default NftHeader