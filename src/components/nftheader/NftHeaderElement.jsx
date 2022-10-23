import styled from "styled-components";
import bg from '../../images/decentraland.jpg'
export const NftHeaderWrapper = styled.div`
 padding: 100px 0;
 min-height: 100vh;
 background-image: linear-gradient(rgba(0, 0, 0, 0.568), rgba(0, 0, 0, 0.548)), url(${bg});
 background-size: cover;
 background-position: center;
 @media screen and (max-width: 768px){
  min-height: 85vh;
 }
`

export const HeaderContent = styled.div`
  transform: translateY(8rem);
  color: #fff;
  margin-left: 30px;
  h1{
    font-size: 35px;
  }
  p{
    padding-top: 20px;
    width: 50%;
    font-weight: 600;
    line-height: 1.6;
  }

  .hero-btn{
    background: #d43154;
    width: 15%;
    text-align: center;
    padding: 10px 0;
    border-radius: 50px;
    margin-top: 10px;

    a{
        color: #fff;
        font-weight: 600;
    }
  }

  @media screen  and (max-width: 768px){
   transform: translateY(5rem);
   margin-left: 5px;
   p{width: 100%; font-size: 15px;}
   .hero-btn{width: 60%}
  }
`