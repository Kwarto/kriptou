import styled from "styled-components";

export const CoinExchangeWrapper = styled.div`
padding: 100px 0;
h2{
    margin: 30px 0;
}
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 1rem;
width: calc(100% - 20px);
margin: 0 auto;
@media screen and (max-width: 768px){
 grid-template-columns: 1fr;
}
`
export const ExchangeWrapper = styled.div`
`
export const Trade = styled.div`

.exchange{
    display: flex;
    flex-direction: column;
    border: 1px solid blue;
    margin: 8px 0;
    min-height: 30vh;

    .flex{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        border-bottom: 1px dotted black;
        img{
            border-radius: 50px;
            width: 10%;
        }
        :nth-child(4){
            border-bottom: none;
        }

        .g-ico{
            display: flex;
            align-items: center;
            gap: 3px;
            color: rgb(2, 6, 43);
        }

        .name{
            color: rgb(11, 11, 150);
            font-weight: 600;
        }

        p{
            a{
                color: rgb(11, 11, 150);  
            }
        }
    }
 }
`