import React from 'react';
import styled from 'styled-components';

const BTN = ({ title }) => {
  return <BTNStyle>{title}</BTNStyle>;
};

const BTNStyle = styled.a`
  background-color: var(--primary-color);
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.BtnColor};
  cursor: pointer;
  display: inline-block;
  text-align: center;
  border-radius: 5px;
  transition: var(--transition-btn-easeInOut);
  font-size: 2rem;
  &:hover {
    background-color: ${({ theme }) => theme.BtnHover};
  }
`;

export default BTN;
