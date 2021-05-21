import React from 'react';
import Particle from '../Components/Particles';
import styled from 'styled-components';
import InstagramIcon from '@material-ui/icons/Instagram';
import GithubIcon from '@material-ui/icons/GitHub';

const Home = () => {
  return (
    <HomeStyle>
      <div className='particles-container'>
        <Particle />
      </div>
      <div className='home-content'>
        <h1>
          Hello! I'm<span> Hussam</span>
        </h1>
        <p>Front-end Developer with IT support background.</p>
        <div className='social-icons'>
          <a href='#' className='icon i-instagram'>
            <InstagramIcon className='inst' />
          </a>
          <a href='#' className='icon i-github'>
            <GithubIcon className='git' />
          </a>
        </div>
      </div>
    </HomeStyle>
  );
};

const HomeStyle = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
  color: ${({ theme }) => theme.color};

  .particles-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
  }

  .home-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;
    h1 {
      font-size: 5rem;
      span {
        font-size: 5rem;
        color: var(--primary-color);
      }
    }
    p {
      font-size: var(--h-fontSize);
    }
  }
  .social-icons {
    display: flex;
    justify-content: center;

    column-gap: 1rem;
    margin-top: 2rem;
    .icon {
      border: 2px solid var(--border-color);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 20%;
      cursor: pointer;
      transition: all 0.25s ease-in-out;
      color: ${({ theme }) => theme.color};

      &:hover {
        border: 2px solid var(--primary-color);
        color: var(--primary-color);
      }
      .inst {
        font-size: 3rem;
      }
      .git {
        font-size: 3rem;
      }

      svg {
        margin: 0.5rem;
      }
    }
  }
`;

export default Home;
