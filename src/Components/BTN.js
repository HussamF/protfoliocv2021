import React from 'react';
import styled from 'styled-components';
import MyCv from '../Imgs/HF2021.pdf';

const BTN = ({ title }) => {
  return (
    <BTNStyle href={MyCv} download='HussamFanos'>
      {title}
    </BTNStyle>
  );
};

const BTNStyle = styled.a`
  background-color: var(--primary-color);
  padding: 0.25rem 0.75rem;
  color: ${({ theme }) => theme.BtnColor};
  cursor: pointer;
  display: inline-block;
  text-align: center;
  border-radius: 5px;
  transition: var(--transition-btn-easeInOut);
  font-size: var(--p-fontSize);
  -webkit-box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: ${({ theme }) => theme.BtnHover};
  }
`;

export default BTN;
