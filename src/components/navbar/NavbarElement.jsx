import styled from "styled-components";

export const NavbarWrapper = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 10px 0;
 .menu-bars{
   margin-right: 35px;
   display: none;
   cursor: pointer;
   .f-menu{
      font-size: 20px;
      color: rgb(21, 5, 160);
   }
 }

 @media screen and (max-width: 1024px){
  border-radius: 5px 5px 0 0;
   .menu-bars{
      display: block;
   }

  .nav-links-mobile{
   transition: all 2s ease;
   display: flex;
   align-items: flex-start;
   flex-direction: column;
   position: fixed;
   top: 5.7rem;
   right: -8%;
   z-index: 100;
   box-shadow: 0 10px 10px rgba(9, 74, 214, 0.089);
   padding: 20px 10px;
   .others{
     display: block;
     width: 100%;
   }

   .mid{
      display: none;
   }
   }
 }

 @media screen and (max-width: 768px){
  padding: 0;
  .nav-links-mobile{z-index: 100; top: 3.9rem; padding: 15px; transition: all 2s ease;}
}
`

export const LogoWrapper = styled.div`
 display: flex;
 align-items: center;
 width: 8%;
 height: 3.5rem;
 cursor: pointer;
 user-select: none;
 @media screen and (max-width: 768px){
  width: 40%;
  img{
    width: 100%;
    display: block;
    align-items: center;
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
   width: 50%;
   top: 5rem;
   background: #fff;
 }
 @media screen and (max-width: 768px){
   width: 80%;
   top: 3.9rem;
   right: -7%;
   display: none;
 }
`

export const NavItem = styled.li`
 padding: 5px 20px;
 transition: all 500ms ease;
 a{
    color: rgb(2, 6, 31);
    font-size: 17px;
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