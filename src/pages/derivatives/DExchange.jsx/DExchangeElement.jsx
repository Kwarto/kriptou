import styled from "styled-components";

export const DEchangeWrapper = styled.div`
 padding: 100px 0;
 width: calc(100% - 20px);
 margin: 0 auto;
 .exchange_list{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    border-bottom: 1px solid blue;
    padding: 8px;
    :nth-child(1){
        border-top: 1px solid blue;
    }
    img{
        border-radius: 50px;
        margin-right: 40px;
    }
    p{
      width: 100%;

      a{
        color: #410241;
        font-size: 17px;
        font-weight: 600;
      }
    }

    .id{
        color: blue;
    }
 }
`