import styled from "styled-components";

export const NewsWrapper = styled.div`
padding: 100px 0;
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 1.5rem;
width: calc(100% - 20px);
margin: 0 auto;

@media screen and (max-width: 768px){
 grid-template-columns: 1fr;
 width: calc(100% - 5px);
}
`