import React from 'react';
import menulight from '../Imgs/menu-light.svg';
import menu from '../Imgs/menu.svg';
import styled from 'styled-components';
import { useGlobalContext } from '../context';

function NavOpenBtn({ theme }) {
  const { openSidebar } = useGlobalContext();
  return (
    <NavOpenBtnStyle onClick={openSidebar} className='nav-toggle' to='#'>
      <img src={`${theme === 'light' ? menulight : menu}`} alt='menu' />
    </NavOpenBtnStyle>
  );
}

const NavOpenBtnStyle = styled.div`
  display: none;
  @media screen and (max-width: 650px) {
    display: block;
    img {
      width: 30px;
      height: 30px;
      position: absolute;
      top: 3rem;
      left: 3rem;
      outline: none;
      z-index: 100;
      transition: var(--transition-easeInOut);
      cursor: pointer;
    }
  }
`;

export default NavOpenBtn;
