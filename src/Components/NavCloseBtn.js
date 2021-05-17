import React from 'react';
import closeMenu from '../Imgs/cancel.svg';
import styled from 'styled-components';
import { useGlobalContext } from '../context';

function NavCloseBtn({ theme }) {
  const { closeSidebar } = useGlobalContext();
  return (
    <NavCloseBtnStyle
      onClick={closeSidebar}
      className='nav-toggle-close'
      to='#'
    >
      <img src={`${theme === 'light' ? closeMenu : closeMenu}`} alt='menu' />
    </NavCloseBtnStyle>
  );
}

const NavCloseBtnStyle = styled.div`
  display: none;
  @media screen and (max-width: 1200px) {
    display: block;
    img {
      width: 30px;
      height: 30px;
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
