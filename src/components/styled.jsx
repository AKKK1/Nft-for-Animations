import styled from "styled-components";
import vie from "../images/view.svg";

export const Mbody = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 350px;
  height: 625px;
  background: linear-gradient(
    161.11deg,
    #13396b -0.73%,
    rgba(21, 39, 63, 0.3) 101.82%
  );
  border: 0.5px solid #00000000;
  border-radius: 15px;
  padding: 24px;
  gap: 10px;
  //shesvla gamosvlis effectebi qvemot teslia !!

  &:hover {
    filter: saturate(1.5);
    filter: drop-shadow(17px 15px 22px rgba(0, 0, 0, 0));
    transition: ease-in-out 0.8s;
    border: 0.5px solid #ffffff23;
    transform: scale(0.97);
  }

  transition: ease-in-out 0.8s;
  transform: scale(1);
  -webkit-animation: slideIn 1s ease;
  animation: slideIn 1.5s ease;

  @keyframes slideIn {
    0% {
      -webkit-transform: scale(0.7);
      filter: saturate(2);
      transform: scale(0.7);
      opacity: 0;
    }

    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      filter: saturate(1);
    }
  }
`;

export const ImgContainer = styled.div`
  margin-top: 20px;
  width: 300px;
  height: 300px;
  border-radius: 10px;
  background-image: url(${vie});
`;
export const MainImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 20px 0px 20px 0;
  padding: 0px auto;
`;
export const Title = styled.h3`
  margin-top: 5px;
  font-weight: 600;
  color: white;

  &:hover {
    cursor: pointer;
    transition: ease-in-out 0.4s;

    animation-name: spincolor;
    animation-duration: 2.5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  @keyframes spincolor {
    0% {
      color: cyan;
    }

    50% {
      color: purple;
    }

    100% {
      color: cyan;
    }
  }
`;
export const Subtitle = styled.p`
  color: var(--Soft-blue);
  font-size: 1.15rem;
  font-weight: 300;
  line-height: 1.5;
  font-family: "Outfit", sans-serif;
`;

export const PATContainer = styled.div`
  display: flex;
  gap: 90px;
  margin: 0;
  padding-bottom: 20px;
`;

export const Price = styled.h5`
  color: var(--Cyan);
  font-weight: 600;
  &:hover {
    transform: rotate(180deg);
  }
`;
export const PriceLogo = styled.img`
  width: 11px;
  height: 18px;
  &:hover {
    transform: rotate(180deg);
  }
`;

export const priceContainer = styled.div`
  gap: 6px;
  display: flex;
  align-items: flex-start;
`;
export const DateContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 5px;
`;
export const DateImg = styled.img`
  width: 17px;
  height: 17px;
`;

export const Date = styled.p``;

export const FooterContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 20px 0 20px;
  margin-left: 0px;
  align-items: center;
  justify-content: center;
  border-top: 1px solid hsl(215, 32%, 27%);
  width: 100%;
`;
export const Imgfooter = styled.img`
  margin-left: -30px;
  width: 32px;
  height: 32px;
`;
export const Author = styled.p`
  display: flex;
`;

export const Span = styled.span`
  color: white;
  margin-left: 3px;

  &:hover {
    color: var(--p-cyan);
    transition: ease-in-out 0.4s;

    animation-name: spincolor;
    animation-duration: 2.5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  @keyframes spincolor {
    0% {
      color: cyan;
    }

    50% {
      color: purple;
    }

    100% {
      color: cyan;
    }
  }
`;

export const ImageOverlay = styled.div`
  display: flex;
  position: absolute;

  align-items: center;
  justify-content: center;
  flex-direction: column;

  bottom: 290px;
  left: 30px;
  width: 80%;
  height: 50%;
  background-image: url(./images/icon-view.svg) no-repeat center;
  opacity: 0;
  transition: ease-in-out 0.8s;

  &:hover {
    opacity: 1;
    transition: ease-out transform 0.8s;
  }
`;
export const View = styled.img`
  transform: scale(150%);
  transition: ease-out transform 0.8s;

  &:hover {
    transform: scale(100%);
    transition: ease-out transform 0.8s;
  }
`;
