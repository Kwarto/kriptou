import styled from "styled-components";

export const MarketTopNews = styled.div`
padding: 10px 0;
width: calc(100% - 30px);
margin: 10px auto;
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 1rem;
transform: translateY(4.2rem);

@media screen and (max-width: 768px){
 grid-template-columns: 1fr;
}
`

export const MarketplaceWrapper = styled.div`
 padding: 100px 1.2%;
 display: grid;
 grid-template-columns: repeat(3, 2fr);
 gap: 1.5rem;
 place-items: center;
 @media screen and (max-width: 768px){
  grid-template-columns: 1fr;
 }
`

export const CoinList = styled.div`
    background-color: #fff;
    padding: 10px;
    min-height: 8vh;
    width: 100%;
    box-shadow: 0 10px 10px rgba(1, 15, 13, 0.123);
    border-radius: 5px;
    color: rgb(4, 57, 118);

    .name{
        color: hsl(193deg 74% 57%);
    }
    .about, .cap{
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px dotted green;
        margin: 10px 0;
        padding: 10px;
        text-transform: capitalize;
         
        a{
            color: blue;
        }

        .text-red{
            color: red;
        }

        .text-green{
            color: green;
        }

        @media screen and (max-width: 768px){
          display: flex;
          font-size: 14px;
          padding: 15px 8px;
          .vol_span{
            h5{
            text-align: right;
            }
          }
        }
    }
    .about{
        .t-abt{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2px;
            color: #fff;
            background: linear-gradient( to left bottom, hsl(193deg 74% 57%), hsl(260deg 86% 61%));
            border: 1px dotted rgb(4, 57, 118);
            width: 60px;
            aspect-ratio: 1/1;
            padding: 2px;
            border-radius: 50px;
            text-transform: uppercase;
        }
        @media screen and (max-width: 768px){
          display: flex;
        }
    }
`

export const TopList = styled.div`
box-shadow: 0 10px 10px rgba(0, 0, 255, 0.062);
padding: 10px;
border-radius: 10px;
div{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
 h4{
    display: flex;
    align-items: center;
    gap: 1rem;
 }

 a{
    color: blue;
 }
`

export const Logo = styled.div`
padding: 15px 10px;
 span{
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    gap: 8px;

    p{
        font-size: 20px;
        font-weight: 600;
    }
 }
`