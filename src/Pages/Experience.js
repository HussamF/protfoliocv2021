import React, { useState } from 'react';
import { data } from '../Data/data';
import styled from 'styled-components';
import Title from '../Components/Title';
import { useGlobalContext } from '../context';
import { Modal } from '../Components/Modal';

const Experience = () => {
  const { openModal } = useGlobalContext();
  const [value, setValue] = useState(0);
  const showModal = (index) => {
    openModal();
    setValue(index);
  };
  const { company, dates, duties, title } = data[value];

  return (
    <>
      <Title title={'experience'} span={'experience'} />
      <ExperienceStyle>
        <div className='section-container'>
          <div className='jobs-center'>
            {/* btn container */}
            <BtnCompanyContainer className='btn-container'>
              <h1>Companies I worked with</h1>
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
            </BtnCompanyContainer>
          </div>
        </div>
        <Modal
          company={company}
          dates={dates}
          duties={duties}
          title={title}
          className='modal-overlay'
        ></Modal>
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
  width: 1170px;
  max-width: 90%;
  margin: 0 auto;
  position: relative;
`;

const BtnCompanyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  h1 {
    font-size: var(--h-fontSize);
    color: ${({ theme }) => theme.color};
    margin-bottom: 5rem;
    position: relative;
    &::after {
      content: '';
      width: 90%;
      position: absolute;
      height: 1px;
      bottom: -1rem;
      left: 50%;
      right: 50;
      transform: translate(-50%, -50%);
      background-color: ${({ theme }) => theme.color};
    }
  }
  button {
    border: none;
    outline: none;
    display: block;
    background: none;
    cursor: pointer;
    font-size: var(--p-fontSize);
    color: ${({ theme }) => theme.color};
    padding: 0.5rem 2rem;
    border-radius: 5px;
    transition: var(--transition-btn-easeInOut);

    box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17),
      inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
      inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
    -webkit-box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17),
      inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
      inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
    margin-bottom: 2rem;
    &:hover {
      color: var(--primary-color);
    }
    .active-btn {
      color: var(--primary-color);
    }
  }
`;

export default Experience;
