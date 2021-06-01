import React from 'react';
import styled from 'styled-components';
import about from '../Imgs/about.jpeg';
import BTN from '../Components/BTN';
import Title from '../Components/Title';
import { Footer } from '../Components/Footer';

const About = () => {
  return (
    <>
      <Title title={'about me'} span={'about me'} />
      <ImageInfoStyle>
        <div className='about-container'>
          <div className='left-content'>
            <img src={about} alt='' />
          </div>
          <div className='right-content'>
            <h4>
              My name is <span>Hussam</span>
            </h4>
            <p className='paragraph'>
              I graduated in 2015, as a software engineer, since that time I
              used to work in IT fields, Computers, Laser machines, etc..., I
              have lots of passion for hardware and troubleshooting software,
              yet in March 2020 I started on developing my skills as programmer,
              since then I am getting into coding, front-end web development and
              now my gaol is to fill my backend gap that I have, to become a
              full stack developer
            </p>
            <div className='about-info'>
              <div className='info-title'>
                <p>Age: 34</p>
                <p>Languages: Arabic, English, Italian and Chinese </p>
                <p>Location: Italy, Rome</p>
                <p className='p-margin'>Service: Web development</p>
                <BTN title='Download CV' />
              </div>
            </div>
          </div>
        </div>
      </ImageInfoStyle>
      <Footer />
    </>
  );
};

const ImageInfoStyle = styled.section`
  padding: 10rem 0;
  display: flex;
  align-items: cente;
  justify-content: center;
  width: 1170px;
  max-width: 90%;
  margin: 0 auto;

  .about-container {
    padding: 5rem auto;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    color: ${({ theme }) => theme.color};

    .left-content {
      img {
        width: 350px;
        border-radius: 10px;
        /* border: 1px solid ${({ theme }) => theme.borderColor}; */
        transition: var(--transition-easeInOut-mode);
        filter: drop-shadow(0 0.4rem 0.5rem rgba(0, 0, 0, 0.5));
      }
    }

    .right-content {
      width: 100%;
      text-align: center;
      h4 {
        font-size: 3rem;
        color: ${({ theme }) => theme.color};
        span {
          font-size: 3rem;
          color: var(--primary-color);
        }
      }

      .paragraph {
        padding: 1rem 0;
        font-size: var(--p-fontSize);
      }
      .about-info {
        display: flex;
        padding-bottom: 1.4rem;
        text-align: center;

        .info-title {
          width: 100%;

          p {
            font-weight: 600;
            font-size: var(--p-fontSize);
            padding: 0.3rem;
          }
          .p-margin {
            margin-bottom: 3rem !important;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1100px) {
    .about-content {
      gap: 3rem !important;

      .left-content {
        img {
          /* width: 300px !important; */
        }
      }
      .right-content {
        h4 {
          font-size: 3rem !important;
          span {
            font-size: 3rem !important;
          }
        }
      }
    }
  }

  @media screen and (max-width: 990px) {
    .about-container {
      flex-direction: column-reverse;
      padding-bottom: 3rem;

      .right-content {
        text-align: center;
        /* h4 {
          font-size: 2.8rem !important;
          span {
            font-size: 2.8rem !important;
          }
        } */
      }
      .left-content {
        margin-top: 0rem;
        img {
        }
      }
    }
  }

  @media screen and (max-width: 400px) {
    .left-content {
      margin-top: 5rem;
      img {
        width: 280px !important;
      }
    }
  }
`;

export default About;
