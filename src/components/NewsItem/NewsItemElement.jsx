import styled from "styled-components";

export const NewsApp = styled.div`
.news-item{
    display: flex;
    align-items: center;
    gap: 1rem;
    box-shadow: 0 10px 10px rgba(255, 0, 0, 0.021);
    padding: 10px;
    img{
        width: 30%;
        height: 200px;
        border-radius: .2rem;
        transition: all 2s ease-in;

        &:hover{
            transform: scale(1.02);
        }
    }
    min-height: 40vh;

    p{
     line-height: 1.7;
     text-align: justify;
    }

    h3{
        padding: 10px 0;
        font-size: 15.6px;
        a{
            color: blue;

            &:hover{
                text-decoration: underline;
            }
        }
    }

    @media screen and (max-width: 768px){
    flex-direction: column;
     img{
        width: 100%;
        height: 180px;
     }

     h3{
        font-size: 12px;
        padding: 5px;
     }

     p{
        font-size: 10px;
     }
    }
}
`