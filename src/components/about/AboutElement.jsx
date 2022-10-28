import styled from "styled-components";
import abtBg from '../../images/background.png'
export const AboutWrapper = styled.header`
 background-image: linear-gradient(to top left,rgba(4, 13, 146, 0.589), rgba(0, 0, 0, 0.747)), url(${abtBg});
 background-size: cover;
 background-position: center;
 min-height: 700px;
 height: 100%;
 display: flex;
 align-items: center;

 @media screen and (max-width: 768px){min-height: 600px}
` 

export const AboutHeader = styled.div`
 margin-left: 30px;
 display: flex;
 flex-direction: column;
 color: #f1f1f1ff;

 h1{
   font-size: 50px;
 }

 p{
    width: 45%;
    padding: 20px 0;
    line-height: 1.6;
    font-size: 17px;
 }

 .btn{
    background: #fff;
    width: 15%;
    text-align: center;
    padding: 12px;
    border-radius: 50px;
    box-shadow: 0 0 10px 10px rgba(31, 4, 95, 0.589);
    cursor: pointer;
    a{
     color: blue;
     font-size: 17px;
     font-weight: 600;
    }
 }

 @media screen and (max-width: 768px){
  margin-left: 10px;
  h1{
    font-size: 30px;
  }
  p{
    width: 90%;
    font-size: 15px;
    text-align: start;
  }

  .btn{
    width: 50%;
  }
 }
`