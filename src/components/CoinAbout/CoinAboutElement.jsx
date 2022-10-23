import styled from "styled-components";

export const DetailWrapper = styled.div`
 display: grid;
 grid-template-columns: 65% 34%;
 gap: 1rem;
 width: calc(100% - 20px);
 margin: 0 auto;
 padding: 100px 0;

 @media screen and (max-width: 768px){
  grid-template-columns: 100%;
 }
`

export const CoinText = styled.div`
 background: linear-gradient(to left bottom, hsl(193deg 74% 57%), hsl(260deg 86% 61%));
 padding: 10px;
 width: 100%;
 border-radius: 10px;
 .sym{
    display: flex;
    align-items: center;
    background: #fff;
    color: #000;
    text-transform: uppercase;
    font-weight: 600;
    width: fit-content;
    aspect-ratio: 1/1;
    padding: 5px;
    border-radius: 50px;
    text-align: center;
    margin-bottom: 20px;
 }

 .name{
    font-size: 35px;
    padding: 10px 0;
    color: #f1f1f1f1;
 }

 p{
    width: 96%;
    text-align: start;
    line-height: 1.6;
    color: #f1f1f1f1;
    text-transform: capitalize;
    strong{
        color: rgb(204, 23, 23);
        font-size: 20px;
    }
 }
`

export const LeftWrapper = styled.div`
 box-shadow: 0 10px 10px rgba(2, 57, 160, 0.048);
 /* min-height: 31vh; */
 background: #fff;
 width: 100%;
 padding: 10px;
 border-radius: 10px;
 h2{
   margin-bottom: 20px;
 }
 .stand{
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin: 10px 0;

   .scr{
      padding: 20px 0;
   }

   .sym{
      display: flex;
      align-items: center;
      justify-content: center;
      background: red;
      text-align: center;
      padding: 10px;
      border-radius: 50px;
      aspect-ratio: 1/1;
      width: max-content;
      color: #fff;
      text-transform: uppercase;
      margin-bottom: 10px;
      font-weight: 600;
      font-size: 18px;
   }
 }

 .l-div{
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 30px 0;
   border-top: 1px dotted blue;
 }

 .con{
     font-size: 18px;
     padding-top: 10px;
   }
  
  p{
   small{
      float: right;
   }
  }
`