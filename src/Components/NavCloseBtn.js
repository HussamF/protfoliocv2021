import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context';
import Close from '../Imgs/close.svg';

function NavCloseBtn({ theme }) {
  const { closeSidebar } = useGlobalContext();
  return (
    <NavCloseBtnStyle
      onClick={closeSidebar}
      className='nav-toggle-close'
      to='#'
    >
      <img src={`${theme === 'light' ? Close : Close}`} alt='menu' />
    </NavCloseBtnStyle>
  );
}

const NavCloseBtnStyle = styled.div`
  display: none;
  @media screen and (max-width: 1200px) {
    display: block;
    img {
      width: 1.5rem;

      position: absolute;
      top: 3rem;
      right: 3rem;
      outline: none;
      z-index: 100;
      transition: var(--transition-easeInOut);
      cursor: pointer;
    }
  }
`;

export default NavCloseBtn;
