import styled from "styled-components";

export const FooterWrapper = styled.div`
 padding: 50px 0;
 background-color: rgba(255, 255, 255, 0.897);
 
 .footer_container{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    min-height: 50vh;
    height: 100%;
    width: calc(100% - 30px);
    margin: 0 auto;

    @media screen and (max-width: 1024px){
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem 10rem;
      width: calc(100% - 50px);
    }
    @media screen and (max-width: 768px){
      grid-template-columns: 1fr;
      gap: 1.5rem 1rem;
      width: calc(100% - 50px);
    }

    .footer_item{
        h1{
            padding-bottom: 10px;
            font-size: 25px;
            font-weight: 500;
        }

        p{
            line-height: 1.6;
            padding-bottom: 10px;
        }
        h3{
            padding-bottom: 10px;
        }

        a{
            color: rgb(2, 1, 7);
            padding-bottom: 2px;
        }

        span{
            display: flex;
            align-items: center;
            gap: 1rem;
            padding-bottom: 10px;
            p{
                padding: 0;
            }
        }

        .c_icon{
            font-size: 20px;
            color: rgba(22, 22, 190, 0.918);
        }

        .socials{
          padding: 20px 0;
         .s_icon{
            margin: 10px;
            font-size: 28px;
            background: rgba(22, 22, 190, 0.918);
            color: #fff;
            cursor: pointer;
            padding: 8px;
            width: 45px;
            height: 45px;
            border-radius: 50px;
            box-shadow: 0 10px 10px rgba(45, 241, 248, 0.075);
          }
        }
    }
 }

 hr{
    border: none;
    outline: none;
    height: 2px;
    background: rgba(18, 18, 141, 0.048);
    width: calc(100% - 30px);
    margin: 0 auto;
 }

 .copy{
    text-align: center;
    transform: translateY(20px);
 }
`