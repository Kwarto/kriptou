import styled from "styled-components";

export const TickerWidgetWrapper = styled.div`
 padding: 60px 0;
 width: 100%;
 margin: 0 auto;
 background: linear-gradient(145deg, hsl(260deg 86% 61%) 50%, hsl(193deg 74% 57%) 50%);
 .Ticker-Box{
   width: 80%;
   display: flex;
   justify-content: space-around;
   align-items: center;
   padding: 10px;
   .coin-wrap{
    width: 60%;
    border-radius: 10px;
    box-shadow: 0 10px 10px rgba(199, 53, 243, 0.096);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    padding: 20px;
    margin: 0 5px;
    text-align: center; 
    background: #fff;
    color: #000;
    
    .coin{
        h4{
          padding: 10px 0;
          font-size: 20px;
          color: green;
        }
    }
    .abt-coin{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1.2rem;

        div{
            padding: 20px 15px;
            h5{
                padding-bottom: 10px;
                font-size: 18px;
            }
        }
    }
   }
  
   @media screen and (max-width: 768px){
    flex-direction: column;
    width: 100%;
    gap: 1.5rem;

    .coin-wrap{
      width: 100%;
      
      .abt-coin{
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
   }
 }
`