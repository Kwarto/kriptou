import styled from "styled-components";
export const StartNftWrapper = styled.div`
 min-height: 90vh;
 background-size: cover;
 position: relative;
 .bg-video{
    width: 100%;
    background-size: cover;
    background-position: center;
    
 }

 .video-text{
    position: absolute;
    top: 15rem;
    right: 3rem;
    width: 40%;
    color: #fff;

    h1{
        font-size: 40px;
        padding-bottom: 20px;
    }

    p{
        font-size: 18px;
        font-weight: 600;
        width: 80%;
        line-height: 1.6;
    }

    .d-btn{
        background: #d60d61;
        width: 30%;
        text-align: center;
        padding: 10px;
        margin-top: 15px;
        border-radius: 50px;

        a{
          color: #fff;
          font-weight: 600;
        }
    }
 }

 @media screen and (max-width: 768px){
    display: none;
 }
`