import styled from "styled-components";
import listBg from '../../images/list.png'
export const NftWrapper = styled.div`
 padding: 100px 0;
 display: grid;
 grid-template-columns: repeat(3, 1fr);
 gap: 1rem;
 place-items: center;
 width: calc(100% - 30px);
 margin: 0 auto;
 position: relative;
 .cta{
   position: absolute;
   right: 4rem;
   bottom: 30px;

   a{
      font-size: 20px;
      color: blue;
      text-decoration: underline;
   }
 }

 @media screen  and (max-width: 768px){
   grid-template-columns: 1fr;
 }
`

export const NftList = styled.div`
 background: linear-gradient(165deg,rgba(70, 110, 243, 0.842) 55%, rgba(42, 166, 248, 0.884) 45%), url(${listBg});
 background-size: cover;
 padding: 10px;
 text-align: center;
 border-radius: 5px;
 width: 95%;

 .title{
    padding-top: 20px;
    font-size: 12px;
    color: #f1f1f1f1;
 }
 .name{
    text-transform: uppercase;
    margin: 20px 0;
    font-weight: 600;
    font-size: 20px;

    a{
      color: #f1f1f1f1;
    }
 }
 h4{
    text-align: center;
    text-transform: uppercase;
    padding-bottom: 10px;
    font-size: 15px;
    color: #f1f1f1f1;
 }

 .con-ad{
    font-size: 16px;
    font-weight: 600;
    color: #03273f;
    padding-top: 6px;
 }

 .nfts{
    span{
     display: flex;
     flex-direction: column-reverse;
    }
 }

 @media screen and (max-width: 768px){
   width: 100%;
   margin: 0;
   overflow-x: hidden;

   .con-ad{
      font-size: 13px;
      font-weight: 700;
   }

   .title{
      text-transform: uppercase;
      font-size: 15px;
   }
 }
`