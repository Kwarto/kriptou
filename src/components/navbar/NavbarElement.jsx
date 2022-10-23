import styled from "styled-components";

export const NavbarWrapper = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;

 .menu-bars{
   margin-right: 35px;
   display: none;
   cursor: pointer;
   .f-menu{
      font-size: 20px;
   }
 }

 @media screen and (max-width: 1024px){
   .menu-bars{
      display: block;
   }
 }
`

export const LogoWrapper = styled.div`
 display: flex;
 align-items: center;
 width: 10%;
 height: 3.5rem;
 cursor: pointer;
 user-select: none;
 @media screen and (max-width: 768px){
  width: 40%;
  img{
    width: 100%;
  }
 }
`

export const NavListWrapper = styled.ul`
 min-height: 8vh;
 width: 35%;
 margin-right: 30px;
 display: flex;
 align-items: center;
 justify-content: center;
 .others{
   display: none;
 }
 @media screen and (max-width: 1024px) {
   display: none;
   align-items: flex-start;
   flex-direction: column;
   position: fixed;
   top: 3.5rem;
   right: 0;
   background-color: #ffffff;
   box-shadow: 0 10px 10px rgba(9, 74, 214, 0.089);
   width: 40%;
   padding: 15px 10px;
   .others{
     display: block;
     width: 100%;
   }

   .mid{
      display: none;
   }
 }
 @media screen and (max-width: 768px){
   width: 80%;
   top: 3.9rem;
   right: -7%;
 }
`

export const NavItem = styled.li`
 padding: 5px 20px;
 transition: all 500ms ease;
 a{
    color: rgb(2, 6, 31);
    font-size: 17px;
 }

 &:hover{
    background: rgba(247, 243, 252, 0.055);
    border-radius: 50px;
 }

 :nth-child(4){
   display: flex;
   align-items: center;
   gap: 0.67rem;

   .f-heart{
      color: red;
      cursor: pointer;
   }
 }

 @media screen and (max-width: 1024px) {
   padding: 10px 30px;
   width: 90%;
   margin: 10px 20px;
   text-align: start;
   border-bottom: 2px dotted rgba(7, 1, 1, 0.459);
 }
`