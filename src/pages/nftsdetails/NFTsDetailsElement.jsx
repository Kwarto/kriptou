import styled from "styled-components";

export const DetailsWrapper = styled.div`
 padding: 70px 0;
 display: grid;
 grid-template-columns: 69% 30%;
 place-items: center;
 gap: 1%;
 width: calc(100% - 20px);
 margin: 0 auto;
 .left, .right{
    transform: translateY(2rem);
    padding: 10px 20px;
    background: #fff;
    border-radius: 10px;
    width: 100%;
    box-shadow: 0 10px 10px rgba(255, 0, 0, 0.048);
    h2{
        padding-bottom: 10px;
        text-transform: uppercase;
    }
    p{
        line-height: 1.6;
    }
    .desc{
        padding-bottom: 10px;
        font-size: 16px;
        font-weight: 300;
        width: 98%;
    }
 }

 .right{
    h2{
        font-size: 12px;
    }
    span{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #f1f1f1;
        padding: 15px;
        margin: 20px 0;
        border-radius: 3px;

        h4{
            text-transform: uppercase;
            font-size: 15px;
        }
    }

    h1{
        font-size: 18px;
        text-transform: uppercase;
        font-weight: 500;
    }

    h2{
        font-size: 16px;
        padding: 10px 0;
    }

    h3{
        font-size: 12px;
        font-weight: 300;
        padding: 10px 0;
    }
 }

 @media screen and (max-width: 768px){
    grid-template-columns: 100%;
 }
`