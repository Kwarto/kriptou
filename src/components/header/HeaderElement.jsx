import styled from "styled-components";

export const HeaderWrapper = styled.div`
 position: relative;
 min-height: calc(100vh - 10vh);
 margin-top: 5rem;
 height: 100%;
 display: flex;
 justify-content: space-between;
 align-items: center;
 gap: 2rem;

 &:after{
    position: absolute;
    bottom: -30%;
    right: 6rem;
    content: 'Marketplace';
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

 @media screen and (max-width: 1024px){
  min-height: 60vh;
  margin-top: 3rem;

  &:after{
    width: 20%;
    right: 1rem;
  }
 }

 @media screen and (max-width: 768px){
   display: flex;
   flex-direction: column;
   justify-content: center;
   min-height: 80vh;
   margin-top: 5rem;

   &:after{
    display: none;
   }
 }
`

export const HeaderContent = styled.div`
 margin-left: 30px;
 h1{
    font-size: 40px;
    color: rgb(2, 23, 31);
    margin-left: 0;
 }
 p{
    width: 90%;
    padding: 6px 0 15px 0;
    line-height: 1.5;
    color: rgb(2, 6, 31);
 }

 a{
  margin-top: 30px;
  background: linear-gradient(175deg, hsl(193deg 74% 57%), hsl(260deg 86% 61%));
  padding: 10px 35px;
  border-radius: 50px;
  color: #fff;
  font-weight: 600;
  font-size: 17px;
  box-shadow: 0 10px 10px 5px rgba(106, 207, 247, 0.089);
  transition: all 2s ease;

  &:hover{
    background: linear-gradient(to left, hsl(193deg 74% 57%), hsl(260deg 86% 61%));
    box-shadow: none;
  }
 }

 @media screen and (max-width: 1024px){
  p{
    width: 100%;
  }
 }
`
export const HeaderImgWrapper = styled.div`
  img{
    width: 100%;
  }

  margin-right: 30px;
`