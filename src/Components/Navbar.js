import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import avatar from '../Imgs/sidebar.png';
import NavCloseBtn from '../Components/NavCloseBtn';
import { useGlobalContext } from '../context';

const Navbar = ({ theme }) => {
  const { closeSidebar, isSidebarOpen } = useGlobalContext();
  return (
    <NavbarStyled className={`${isSidebarOpen ? 'nav-open' : null}`}>
      <div className='avatar'>
        <img src={avatar} alt='avatar' />
      </div>
      <NavCloseBtn theme={theme} />
      <ul className='nav-list' onClick={closeSidebar}>
        <li className='nav-link'>
          <NavLink className='nav-tage' to='/' activeClassName='active' exact>
            Home
          </NavLink>
        </li>
        <li className='nav-link'>
          <NavLink className='nav-tage' to='/about' activeClassName='active'>
            About me
          </NavLink>
        </li>
        <li className='nav-link'>
          <NavLink
            className='nav-tage'
            to='/experience'
            activeClassName='active'
          >
            Experience
          </NavLink>
        </li>
        <li className='nav-link'>
          <NavLink
            className='nav-tage'
            to='/portfolio'
            activeClassName='active'
          >
            portfolio
          </NavLink>
        </li>
        <li className='nav-link'>
          <NavLink className='nav-tage' to='/contact' activeClassName='active'>
            Contact
          </NavLink>
        </li>
      </ul>
      <footer className='sidebar-footer'>
        <p>@2021 Hussam Portfolio</p>
      </footer>
    </NavbarStyled>
  );
};
const NavbarStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 30rem;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  height: 100vh;
  z-index: 101;
  transition: var(--transition-easeInOut-mode);
  @media screen and (max-width: 1200px) {
    /* width: 20rem; */
    left: -30rem;
  }
  @media screen and (max-width: 650px) {
    /* left: -30rem; */

    @media screen and (max-width: 650px) {
    }
  }

  height: 100%;
  text-align: center;
  transition: var(--transition-easeInOut-mode);
  background-color: ${({ theme }) => theme.sideBar};
  .avatar {
    padding: 1rem 0;
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};
    img {
      width: 70%;
      border-radius: 50%;
      border: 10px solid ${({ theme }) => theme.borderColor};
      transition: var(--transition-easeInOut-mode);
    }
  }
  ul {
    width: 100%;
    li {
      .active {
        color: var(--primary-color);
      }
    }
    a {
      padding: 0.5rem 0.25rem;
      cursor: pointer;
      display: block;
      position: relative;
      z-index: 100;
      color: ${({ theme }) => theme.color};
      text-transform: uppercase;
      letter-spacing: 1.2px;
      font-size: 2rem;
      @media screen and (max-width: 1100px) {
        font-size: 1.8rem;
      }
      &::before {
        content: '';
        position: absolute;

        top: 0;
        left: 0;
        width: 0;

        background-color: var(--primary-color);
        opacity: 0.2;
        transition: all 0.5s cubic-bezier(0.65, 0.01, 0.11, 0.55);
      }
      &:hover::before {
        width: 100%;
        height: 100%;
      }
    }
  }

  footer {
    padding: 0.5rem 0;
    border-top: 1px dotted var(--border-color);
    width: 100%;
    p {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.color};
    }
  }
`;
export default Navbar;
