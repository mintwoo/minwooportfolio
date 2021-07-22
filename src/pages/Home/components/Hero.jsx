import React from 'react';
import styled from 'styled-components';
import { heroBackground } from '../../../assets';
import { Button } from '../../../components';

const S = {
  Background: styled.section`
    position: absolute;
    top: 0;
    width: 100%;
    height: 780px;
    background: no-repeat center/cover url(${heroBackground});
  `,
  Wrapper: styled.div`
    width: 100%;
    height: 100%;
    max-width: 1180px;
    padding-top: 100px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  Title: styled.h1`
    ${props => props.theme.typography.title};
    color: #fff;
    margin-bottom: 0.5rem;
    line-height: 1.2;
  `,
  Description: styled.p`
    ${props => props.theme.typography.description};
    color: ${props => props.theme.palette.white};
    margin-bottom: 2rem;
  `,
};

const Hero = () => {
  return (
    <S.Background>
      <S.Wrapper>
        <S.Title>
          안녕하세요
          <br />
          앱 개발자
          <br />
          신민우입니다.
        </S.Title>
        <S.Description>
          저는 Android, IOS 개발자로 일하고 있으며,
          <br />
          현재 ReactNative를 사용하여 앱 개발하고 있습니다.
        </S.Description>
        <Button fill="solid" type="button">
          Our Services
        </Button>
      </S.Wrapper>
    </S.Background>
  );
};

export default Hero;
