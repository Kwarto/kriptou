import styled from "styled-components/macro";

export const Container = styled.div`
  padding: 60px 0;
  width: 100%;
  width: calc(100% - 30px);
  margin: 0 auto;
  min-height: 80vh;
  @media screen and (max-width: 1024px){
    width: 100%;
    padding: 80px 0;
  }
`;
export const Entity = styled.div`
  color: rgb(1, 0, 12);
  box-shadow: 0 10px 10px rgba(58, 6, 180, 0.034);
  max-width: 1020px;
  min-height: 80px;
  width: 100%;
  margin-bottom: 10px;
  padding: 20px;
  margin: auto;
  &:first-of-type {
    margin-top: 1.5em;
  }
  @media screen and (max-width: 768px){
    padding: 5px;
  }
`;
export const Inner = styled.div`
  padding: 15px 40px;
  max-width: 980px;
  margin: auto;
  flex-direction: column;
  display: flex;
  @media screen and (max-width: 768px){
    width: 410px;
    margin: 0 auto;
    overflow-x: hidden;
    padding: 5px 5px;
  }
`;
export const Question = styled.div`
  font: 25px;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 2px;
  display: flex;
  font-weight: normal;
  background: #fff;
  padding: 0.75em 1.12em;
  align-items: center;
  width: 100%;
`;
export const Text = styled.p`
  max-height: 1190px;
  font-size: 15px;
  font-weight: 400;
  line-height: normal;
  background: #fff;
  transition: max-height 0.23s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0.9em 2.1em 0.7em 1.4em;
  user-select: none;
  white-space: pre-wrap;
  border: 1px dotted rgba(19, 1, 61, 0.199);

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 25px;
    padding: 5px;
  }
`;
export const Header = styled.h1`
padding: 20px 0;
  @media (max-width: 768px) {
    font-size: 20px;
    text-align: center;
    padding: 30px 0;
  }

  color: #070707;
`;