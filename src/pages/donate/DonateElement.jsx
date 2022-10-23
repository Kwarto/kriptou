import styled from "styled-components";
import donateImg from '../../images/donate_me.jpg'
export const DonateWrapper = styled.div`
padding: 80px 0;
min-height: 100vh;
@media screen and (max-width: 1024px){
  padding: 10px 0;
}
.give{
    padding: 50px 0;
    h2{
        text-align: center;
        font-size: 35px;
        margin-top: 30px;
    }

    p{
        text-align: center;
        width: 40%;
        margin: 0 auto;
        line-height: 1.6;
        padding: 10px 0s;
    }

    @media screen and (max-width: 1024px){
      p{
        width: 60%;
      }
    }

    @media screen and (max-width: 768px){
      p{
        width: 85%;
      }
    }
}

.donate-with-purpose{
  padding: 60px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  width: calc(100% - 10rem);
  margin: 0 auto;
  
  .card{
    text-align: center;
    box-shadow: 0 1rem .5rem rgba(7, 25, 192, 0.062);
    padding: 10px;
    border-radius: .5rem;
    transition: all 2s ease;
    .s-ico{
      background: rgb(39, 58, 230);
      color: #fff;
      font-size: 50px;
      padding: 10px;
      border-radius: 50px;
    }
    h3{
      font-size: 22px;
      padding: 10px 0;
    }
    p{
      line-height: 1.6;
    }

    &:hover{
      background: linear-gradient(145deg,rgba(17, 4, 129, 0.801) 50%, rgba(9, 9, 228, 0.884) 50%);
      color: #fff;
    }
  }

  @media screen and (max-width: 1024px){
      width: 100%;
      .card{
        width: 100%;
        p{
          font-size: 15px;
        }
      }
  }


  @media screen and (max-width: 768px){
    flex-direction: column;
  }
}
`
export const DonateContent = styled.div`
  position: relative;
  padding: 10px 0;
  margin: 0 auto;
  background: linear-gradient(rgba(1, 3, 26, 0.87), rgba(103, 9, 226, 0.082)), url(${donateImg});
  background-position: 100%;
  background-size: cover;
  background-attachment: fixed;
  min-height: 80vh;
  @media screen and (max-width: 1024px){
    min-height: 40vh;
    &:after{
      width: 25%;
    }

    .support{
      position: absolute;
      top: 2rem;
    }
  }
  .support{
    transform: translateY(5rem);
    padding: 0 20px;
    h1{
     font-size: 40px;
     color: #fff;
    }

   p{
    width: 50%;
    line-height: 1.6;
    padding: 10px 0;
    color: #fff;
   }
  }

  &:after{
    position: absolute;
    aspect-ratio: 1/1;
    bottom: 3rem;
    box-shadow: 0 10px 10px rgba(7, 25, 192, 0.349);
    color: #f1f1f1;
    font-size: 20px;
    font-weight: 600;
    right: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    content: 'Donate';
    background: radial-gradient(rgba(7, 26, 192, 0.808), rgba(103, 9, 226, 0.596));
    border-radius: 100%;
    text-align: center;
    width: 12%;
    animation: SwipeDown linear infinite alternate 2s;

  }

  .cta{
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(8rem);

    h1{
      color: #fff;
      font-size: 50px;
      font-weight: 700;
      padding: 10px 0;
    }

    .btn{
      background: rgb(28, 5, 161);
      padding: 12px 50px;
      border-radius: 50px;
      
      a{
        color: #f1f1f1;
        font-weight: 600;
      }
    }
  }

  @media screen and (max-width: 768px){
    min-height: 60vh;
    .support{
      top: 5rem;
      p{
        width: 100%;
      }
    }

    &:after{
      display: none;
      width: 25%;
    }

    .cta{
      
      h1{
        font-size: 30px;
      }

      .btn{
        margin-top: 20px;
      }
    }
  }
`