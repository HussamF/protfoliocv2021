import React from 'react';
// import emailjs from 'emailjs-com';
// import './contact.scss';
// import { useTranslation } from 'react-i18next';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import styled from 'styled-components';
import Title from '../Components/Title';
import BTN from '../Components/BTN';
import Rome from '../Imgs/r4.jpg';

const Contact = () => {
  // function sendEmail(e) {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       'service_wwptcmv',
  //       'template_2b06q5u',
  //       e.target,
  //       'user_Wy2GreLRqVjqZHDXxvvvT'
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  //   e.target.reset();
  // }
  // const { t, i18n } = useTranslation();
  return (
    <>
      <Title title={'Contact'} span={'Contact'} />
      <ContactStyle>
        <div className='contact-container'>
          <div className='contact-inner-container'>
            <div className='contact-info'>
              <h1>Contact's Information</h1>
              <p>
                You can find me on Whatsapp at the same number, please send me a
                msg if I didn't pick up the phone
              </p>
              <div className='icon-info'>
                <div>
                  <PhoneIcon className='icon' />
                  <p>
                    <span>Phone:</span> +39 327 307 0765
                  </p>
                </div>
                <div>
                  <EmailIcon className='icon' />
                  <p>
                    <span>Email:</span> samofanos@gmail.com
                  </p>
                </div>
                <div>
                  <LocationOnIcon className='icon' />
                  <p>
                    <span>Address:</span> Italy-Rome
                  </p>
                </div>
              </div>
              <div className='social-media'>
                <a
                  href='javascript:void(0)'
                  className='icon-link'
                  target='_blank'
                >
                  <GithubIcon className='social-icon' />
                </a>

                <a
                  href='http://www.linkedin.com/in/hussam-fanous-1b356511a'
                  target='_blank'
                  className='icon-link'
                >
                  <LinkedInIcon className='social-icon' />
                </a>

                <a
                  href='http://www.instagram.com/hussamfanos'
                  target='_blank'
                  className='icon-link'
                >
                  <InstagramIcon className='social-icon' />
                </a>
              </div>
            </div>
          </div>
          {/* <div className='contact-img'>
            <img src={Rome} alt='' />
          </div> */}
        </div>
      </ContactStyle>
    </>
  );
};

const ContactStyle = styled.section`
  padding: 10rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .contact-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1170px;
    max-width: 90%;
    border-radius: 15px;
    margin-top: 5rem;
    overflow: hidden;
    transition: var(--transition-btn-easeInOut);
    -webkit-box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.09);
    box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.09);
    &:hover {
      transform: scale(1.01);
    }
    .contact-inner-container {
      padding: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      .contact-info {
        margin-top: 3rem;
        h1 {
          font-size: var(--h-fontSize);
          line-height: 1.5;

          color: ${({ theme }) => theme.color};
        }
        p {
          font-size: var(--p-fontSize);
          margin-bottom: 0;

          color: ${({ theme }) => theme.color};
        }
        .icon-info {
          margin-top: 3rem;
          div {
            display: flex;
            align-items: center;
            margin-bottom: 2rem;
            gap: 2.5rem;
            p {
              span {
                font-weight: bold;
                font-size: var(--p-fontSize);
              }
            }
          }
        }

        .icon {
          font-size: 4rem;
          color: var(--primary-color);
        }

        .social-media {
          display: flex;
          justify-content: center;
          margin-top: 3rem;
          gap: 2rem;
          padding: 0;
          .icon-link {
            color: ${({ theme }) => theme.color};
            border-radius: 20%;
            height: 42px;

            .social-icon {
              transition: var(--transition-btn-easeInOut);
              font-size: 4rem;
              margin: 0.5rem;
              padding: 0;
            }

            &:hover {
              color: var(--primary-color);
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 850px) {
    padding: 2rem 0 10rem;
  }

  @media screen and (max-width: 440px) {
    /* padding: 2rem 0; */
    .contact-container {
      .contact-inner-container {
        .contact-info {
          .icon-info {
            div {
              gap: 1rem;
              p {
                span {
                }
              }
            }
          }
          .icon {
            font-size: 2.5rem;
            /* color: var(--primary-color); */
          }
        }
      }
    }
  }
`;

export default Contact;
