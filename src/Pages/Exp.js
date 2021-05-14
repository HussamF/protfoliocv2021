import React, { useState } from 'react';

import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import CloseIcon from '@material-ui/icons/Close';
import { data } from '../Data/data';
import styled from 'styled-components';
import Title from '../Components/Title';
import { useGlobalContext } from '../context';

const Experience = () => {
  // const [loading, setLoading] = useState(true)
  // const [jobs, setJobs] = useState([data]);
  const { isModalOpen, closeModal, openModal } = useGlobalContext();
  const [value, setValue] = useState(0);
  const showModal = (index) => {
    openModal();
    setValue(index);
  };

  // const fetchJobs = async () => {
  //   const reponse = await fetch(url)
  //   const newJobs = await reponse.json()
  //   setJobs(newJobs)
  //   setLoading(false)
  // }
  // useEffect(() => {
  //   setJobs([data]);
  // }, []);
  // if (loading) {
  //   return (
  //     <section className="section loading">
  //       <h1>Loading...</h1>
  //     </section>
  //   )
  // }
  const { company, dates, duties, title } = data[value];
  return (
    <>
      <Title title={'experience'} span={'experience'} />
      <ExperienceStyle>
        <div className='section-container'>
          <div className='jobs-center'>
            {/* btn container */}
            <div className='btn-container'>
              <h1>Company</h1>
              {data.map((item, index) => {
                return (
                  <button
                    key={item.id}
                    onClick={() => showModal(index)}
                    className={`job-btn ${index === value && 'active-btn'}`}
                  >
                    {item.company}
                  </button>
                );
              })}
            </div>
            {/* job info */}
            <article className='job-info modal-container'>
              <Overlay
                className={`${
                  isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
                }`}
              >
                <button className='close-modal-btn' onClick={closeModal}>
                  <CloseIcon />
                </button>
                <h1>Jop Title</h1>
                <h3>{title}</h3>
                <h4>{company}</h4>
                <p className='job-date'>{dates}</p>
                {duties.map((duty, index) => {
                  return (
                    <div key={index} className='job-desc'>
                      <DoubleArrowIcon className='job-icon'></DoubleArrowIcon>
                      <p>{duty}</p>
                    </div>
                  );
                })}
              </Overlay>
            </article>
          </div>
        </div>
      </ExperienceStyle>
    </>
  );
};

const ExperienceStyle = styled.section`
  padding-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 auto;

  .section-container {
    .jobs-center {
      padding-top: 5rem;
      margin: 0 auto;
      width: 1170px;
      max-width: 70%;

      .btn-container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        margin-bottom: 4rem;
        flex-wrap: wrap;
        gap: 2rem;
        text-align: center;
        color: ${({ theme }) => theme.color};
        h1 {
          font-size: var(--h-fontSize);
          text-transform: uppercase;
          color: var(--primary-color);
        }

        button {
          font-size: var(--p-fontSize);
          outline: none;
          border: none;
          cursor: pointer;

          font-weight: 400;
          background: transparent;
          -webkit-box-shadow: 0px 0px 10px 5px ${({ theme }) => theme.shadow};
          box-shadow: 0px 0px 5px 3px ${({ theme }) => theme.shadow};
          padding: 1.5rem 0rem;
          transition: var(--transition-btn-easeInOut);
          border-radius: 10px;
          border-left: 5px solid var(--primary-color);
          border-bottom: 1px solid ${({ theme }) => theme.color};
          color: ${({ theme }) => theme.color};
          &:hover {
            -webkit-box-shadow: 0px 0px 10px 5px
              ${({ theme }) => theme.shadowHover};
            box-shadow: 0px 0px 10px 5px ${({ theme }) => theme.shadowHover};
          }
        }

        .active-btn {
          color: red;
          border-left: 5px solid red;
          &:hover {
            /* color: var(--primary-color); */
          }
        }
      }

      article {
        /* OPEN/CLOSE MODAL */

        .modal-container {
          background: red;
          border-radius: 15px;
          width: 90vw;
          height: 30vh;
          max-width: 90%;
          text-align: center;
          display: grid;
          place-items: center;
          position: relative;

          h1 {
            font-size: var(--h-fontSize);
            text-transform: uppercase;
            color: var(--primary-color);
          }
          .job-date,
          h3,
          h4 {
            font-size: 2rem;
            margin-bottom: 1rem;
            color: ${({ theme }) => theme.color};
            /* letter-spacing: 1px; */
          }
          h4 {
            color: red;
          }
          .job-date {
            background-color: ${({ theme }) => theme.titleSpan};
            display: inline-block;
          }
          .job-desc {
            /* display: grid;
        grid-template-columns: auto 1fr; */
            display: flex;
            column-gap: 2rem;
            align-items: center;
            margin-bottom: 1.25rem;
            p {
              font-size: var(--p-fontSize);
              color: ${({ theme }) => theme.color};
              /* letter-spacing: 2px; */
            }
            .job-icon {
              color: var(--primary-color);
            }
          }
        }
      }
    }

    @media screen and (max-width: 990px) {
      .jobs-center {
        display: flex;
        flex-direction: column;
        width: 90%;
        padding-bottom: 12rem;
        .btn-container {
          flex-direction: column;
          justify-content: flex-start;
          position: relative;
          margin-bottom: 10rem;

          &::after {
            content: '';
            width: 50%;
            position: absolute;
            height: 1px;
            bottom: -2rem;
            left: 50%;
            right: 50;
            transform: translate(-50%, -50%);
            background-color: ${({ theme }) => theme.color};
          }
        }
        article {
          h1 {
            text-align: center;
            margin-bottom: 3rem;
            position: relative;
            &::after {
              content: '';
              width: 25%;
              position: absolute;
              height: 1px;
              bottom: -2rem;
              left: 50%;
              right: 50;
              transform: translate(-50%, -50%);
              background-color: ${({ theme }) => theme.color};
            }
          }
          h3,
          h4 {
            font-size: 2rem;
            text-align: center;
            margin-bottom: 1rem;

            /* letter-spacing: 1px; */
          }
        }
      }
    }
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 100%;
  background: red;
  display: grid;
  place-items: center;
  transition: var(--transition);
  visibility: hidden;
  overflow-y: scroll;
  z-index: -1;
`;

const show;

export default Experience;
