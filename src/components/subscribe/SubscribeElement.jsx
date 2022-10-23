import styled from "styled-components";

export const SubscribeModal = styled.div`
  padding: 100px 0;
  width: calc(100% -30px);
  min-height: 98vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 70% 30%;

  @media screen and (max-width: 768px){
    grid-template-columns: 100%;
  }
`

export const ModalContent = styled.div`
 form{
  color: rgba(0, 0, 0, 0.938);
  display: flex;
  align-items: center;
  input{
    padding: 12px 10px;
    width: 45%;
    outline: none;
    border: 1px solid blue;
    border-radius: .3rem 0 0 .3rem;
    font-size: 18px;
    font-family: 'Roboto Slab', serif;
  }

  button{
    padding: 15px 20px;
    background: linear-gradient(128deg,rgba(24, 108, 233, 0.87), rgba(9, 9, 189, 0.87));
    border: none;
    cursor: pointer;
    outline: none;
    width: 18%;
    border-radius:0 .3rem .3rem 0 ;
    font-size: 18px;
    color: #fff;
    font-weight: 600;
  }
 }
 padding: 20px;
 h2{
    font-size: 35px;
    padding-bottom: 10px;
 }

 h4{
   font-size: 20px;
   font-weight: 500;
   padding: 10px 0;
   width: 68%;
 }

 p{
  line-height: 1.6;
  width: 80%;
  text-align: justify;
  padding: 10px 0;
 }

 @media screen and (max-width: 768px){
    p{
      width: 100%;
      font-size: 15px;
    }

    h4{font-size: 17px; width: 100%; color: rgba(19, 9, 155, 0.719);}

    form{
      input{
        width: 65%;
      }

      button{
       width: 35%;
      }
    }
 }
`

export const LeftContent = styled.div`
 h2{
  font-size: 30px;
  padding: 10px 0;
 }

 p{
  padding: 13px 0;
  font-size: 18px;
  color: #050458;
 }
 @media screen and (max-width: 768px){
  margin-left: 20px;
 }
`