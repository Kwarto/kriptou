import styled from "styled-components";

export const HomeWrapper = styled.div`
 position: relative;
 padding: 100px 0;
 min-height: 100vh;
 height: 100%;
 background-attachment: fixed;

 &:after{
    position: absolute;
    bottom: -22%;
    left: 2rem;
    right: 0;
    content: 'Donate';
    background: linear-gradient(to left bottom, rgb(4, 57, 118), hsl(260deg 86% 61%));
    border: 3px dotted hsl(193deg 74% 57%);
    width: 10%;
    aspect-ratio: 1/1;
    border-radius: 100%;
    opacity: 0.87;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 700;
    padding: 10px;
    cursor: pointer;
    color: #f1f1f1;
    animation: SwipeDown linear infinite 1.5s;
 }

 @media screen  and (max-width: 1024px){
   min-height: 90vh;

   &:after{
      width: 20%;
      bottom: -20%;
   }
 }

 @media screen  and (max-width: 768px){
   &:after{display: none;}
 }
`

export const HomeContent = styled.div`
 display: grid;
 grid-template-columns: repeat(3, 1fr);
 gap: 1.5rem;
 width: calc(100% - 30px);
 margin: 0 auto;
 height: 20vh;

 @media screen  and (max-width: 1024px){
   grid-template-columns: 1fr 1fr;
 }
 @media screen  and (max-width: 768px){
   grid-template-columns: 1fr;
 }
 @media screen and (max-width: 375px){
    margin-bottom: 20rem;
 }
`

export const HomeItem = styled.div`
 background: linear-gradient(to left bottom, hsl(193deg 74% 57%), hsl(260deg 86% 61%));
 box-shadow: 0 10px 10px;
 border: 1px dotted rgb(4, 57, 118);
 border-radius: .2rem;
 padding: 10px;
 text-align: center;
 color: #fff;

 img{
    margin: 10px 0;
    border: 2px solid #fff;
    border-radius: 50px;
 }

 h1{
    font-weight: 600;
 }

 p{
    font-size: 16px;
    padding: 10px 0;
    line-height: 1.6;
    font-weight: 500;
 }

 :nth-child(1),
 :nth-child(3){
    transform: translateY(6rem);
 } 


 :nth-child(4){
   transform: translate(28rem, 5%);
 } 

 a{
    background: #fff;
    padding: 10px 20px;
    border-radius: 50px;
    position: relative;
    top: 2.1rem;
    color: hsl(212deg 93% 24%);
    border: 1px dotted hsl(212deg 93% 24%);
    font-weight: 600;
 }

 @media screen  and (max-width: 1024px){
 margin-top: 20px;
 :nth-child(1),
 :nth-child(3){
    transform: translateY(0rem);
 } 


 :nth-child(4){
   transform: translate(0);
 } 

 }

 @media screen  and (max-width: 768px){
   a{
   top: 20px;
   }
 }
`