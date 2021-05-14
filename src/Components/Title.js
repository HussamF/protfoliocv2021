import React from 'react';
import styled from 'styled-components';

const Title = ({ title, span }) => {
  return (
    <TitleStyle>
      <h2>
        {title} <span className='title-span'>{span}</span>
      </h2>
    </TitleStyle>
  );
};

const TitleStyle = styled.div`
  padding: 10rem 0 0 10rem;
  /* position: relative; */
  transition: var(--transition-easeInOut-mode);

  h2 {
    font-size: 6rem;
    font-weight: 400;
    text-transform: uppercase;
    color: ${({ theme }) => theme.color};
    position: relative;

    &::before {
      content: '';
      position: absolute;
      bottom: 20%;
      left: 0;
      width: 100%;
      height: 0.25rem;
      background-color: ${({ theme }) => theme.titleSpan};
      border-radius: 15px;
    }
    &::after {
      content: '';
      position: absolute;
      bottom: 20%;
      left: 0;
      width: 12.5rem;
      height: 0.25rem;
      background-color: ${({ theme }) => theme.color};
      border-radius: 15px;
    }
    span {
      font-weight: 600;
      color: ${({ theme }) => theme.titleSpan};
      font-size: 8rem;
      /* opacity: 0.04; */
      position: absolute;
      top: 15%;
      left: -1.6rem;
      z-index: -1;
    }
  }
  @media screen and (max-width: 850px) {
    padding-left: 5rem;
    h2 {
      font-size: 4rem;
      span {
        font-size: 6rem;
      }
    }
  }

  @media screen and (max-width: 440px) {
    padding-left: 2rem;
    h2 {
      font-size: 3.3rem;
      span {
        font-size: 5.3rem;
      }
    }
  }

  @media screen and (max-width: 360px) {
    h2 {
      font-size: 2.7rem;
      span {
        font-size: 4.7rem;
      }
    }
  }
`;

export default Title;
