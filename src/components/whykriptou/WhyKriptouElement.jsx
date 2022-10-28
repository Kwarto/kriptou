import styled from "styled-components";

export const WhyKriptouWrapper = styled.div`
 padding: 100px 0;
 margin-top: 10rem;
 min-height: 80vh;
 height: 100%;

 @media screen and (max-width: 768px){
    min-height: 80vh;
    margin-top: 65rem;
 }
`

export const WhyContent = styled.div`
 width: calc(100% - 30px);
 margin: 30px auto;
 display: grid;
 grid-template-columns: 1fr 1fr;
 place-items: center;
 gap: 3rem;

 @media screen and (max-width: 1024px){
    grid-template-columns: 1fr;
    margin: 0 auto;
 }

 @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    margin: 0;
 }
`
export const WhySideImg = styled.div`
 width: 100%;
  div{
    width: 90%;
    display: flex;
    img{
     margin-left: 5%;
     position: relative;
     right: -3rem;

     :nth-child(2){
        left: -2rem;
     }
    }
 }

 @media screen and (max-width: 1024px){
    img{
     display: none;
     margin-left: 2%;
     left: 5rem;
     :nth-child(2){
        position: absolute;
        left: 20rem;
     }
    }
 }

 @media screen and (max-width: 768px){
    img{
     width: 40%;
     position: relative;
     margin-left: 0;
     left: 5rem;
     :nth-child(2){
        position: absolute;
        left: 2rem;
     }
    }
 }
` 
export const WhySideTxt = styled.div`
width: 100%;
 div{
    width: 90%;
    margin: 10px 0;
    padding: 15px;
    background: linear-gradient(to left bottom, hsl(193deg 74% 57%), hsl(260deg 86% 61%));
    p{
        text-align: justify;
        line-height: 1.6;
        color: #f1f1f1f1;
    }

    :nth-child(2),
    :nth-child(4){
        border-radius: 20px 0px 20px 20px;
    }

    :nth-child(1),
    :nth-child(3){
        border-radius: 0 20px 20px 30px;
    }
 }

@media screen and (max-width: 1024px){
    width: 100%;
    margin-left: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem 2rem;

    :nth-child(2),
    :nth-child(4){
        border-radius: 20px;
    }

    :nth-child(1),
    :nth-child(3){
        transform: translateX(0);
        border-radius: 20px;
    }

    p{
     text-align: start;
    }
}

@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    gap: 1rem;
    :nth-child(1),
    :nth-child(3){
        transform: translateX(0);
        border-radius: 0 30px 30px 30px;
    }

    div{
        width: 100%;
        margin: 0 1rem;
        p{
            font-size: 16px;
            font-weight: 600;
            text-align: center;
        }
    }
}
` 