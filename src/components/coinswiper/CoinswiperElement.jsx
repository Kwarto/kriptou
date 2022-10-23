import styled from "styled-components";

export const CoinswiperWrapper = styled.div`
 box-shadow: 20px 0 10px rgba(0, 0, 255, 0.034);
 h1{
    padding-bottom: 60px;
 }
 .swiper_coin{
    width: calc(100% - 30px);
 }
 .coin_box{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.5rem;
        place-items: center;
        min-height: 25vh;
        width: 100%;
        padding: 10px;
        background: linear-gradient(to left bottom, hsl(193deg 74% 57%), hsl(260deg 86% 61%));
        border-radius: 5px;

       .state{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background: #fff;
        width: 50px;
        height: 48px;
        text-align: center;
        border-radius: 50px;
       }  
  }

  @media screen and (max-width: 768px){
    margin-top: 5rem;
  }
  @media screen and (max-width: 375px){
    transform: translateY(-5rem);
  }
`

export const CoinBox = styled.div`
 display: block;
 .price, .mark{
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 0;
  border-bottom: 1px solid black;
}

.name{
    font-size: 12px;
    font-weight: 600;
}

.act{
    color: #0e0303;
    margin-left: 30%;
}

.grn{
  color: #14e614;
  font-weight: 700;
}

.rd{
    color: #f81111;
    margin-left: 2px;
    font-weight: 700;
}
@media screen and (max-width: 768px){
  display: flex;
  justify-content: space-between;
  gap: 1rem 3rem;
  flex-direction: column;
  div{
    margin: 0 20px;
  }
}
`