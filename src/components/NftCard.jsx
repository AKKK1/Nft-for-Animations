import React from "react";
import styled from "styled-components";
import * as S from "./styled";
import ImgMain from "../images/equilibrium.jpg";
import eth from "../images/eth.svg";
import time from "../images/icon-clock.svg";
import avatar from "../images/image-avatar.png";
import overlay from "../images/view.svg";
const NftCard = () => {
  return (
    <S.Mbody>
      <S.ImgContainer>
        <S.MainImg src={ImgMain} />
        <S.ImageOverlay>
          <S.View src={overlay} />
        </S.ImageOverlay>
      </S.ImgContainer>
      <S.TextContainer>
        <S.Title>Equilibrium #3429</S.Title>
        <S.Subtitle>
          Our Equilibrium collection promotes balance and calm.
        </S.Subtitle>
      </S.TextContainer>
      <S.PATContainer>
        <S.priceContainer>
          <S.PriceLogo src={eth} />
          <S.Price>0.041 ETH</S.Price>
        </S.priceContainer>
        <S.DateContainer>
          <S.DateImg src={time} />
          <S.Date>3 days left</S.Date>
        </S.DateContainer>
      </S.PATContainer>

      <S.FooterContainer>
        <S.Imgfooter src={avatar} />
        <S.Author>
          Creation of<S.Span>{`Akaki Chachava`}</S.Span>
        </S.Author>
      </S.FooterContainer>
    </S.Mbody>
  );
};

export default NftCard;
