import React, { useState } from 'react';
import { data } from '../Data/data';
import styled from 'styled-components';
import Title from '../Components/Title';
import { useGlobalContext } from '../context';
import { Modal } from '../Components/Modal';
import { Footer } from '../Components/Footer';

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
                  <CompanyDetails>
                    <h5> {item.company}</h5>
                    <button
                      key={item.id}
                      onClick={() => showModal(index)}
                      className={`job-btn ${index === value && 'active-btn'}`}
                    >
                      Role Details
                    </button>
                  </CompanyDetails>
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
      <Footer />
    </>
  );
};

const ExperienceStyle = styled.section`
  padding: 10rem 0;
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
    font-size: 2.5rem;
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
`;

const CompanyDetails = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
  @media screen and (max-width: 630px) {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
  h5 {
    font-size: var(--p-fontSize);
    padding: 0.5rem 2rem;
    /* margin-bottom: 2rem; */
    color: ${({ theme }) => theme.color};
  }
  button {
    border: none;
    outline: none;
    display: inline-block;
    background: none;
    cursor: pointer;
    font-size: 12px;
    color: ${({ theme }) => theme.color};
    padding: 0.5rem 1rem;
    border-radius: 5px;
    transition: var(--transition-btn-easeInOut);
    background-color: rgba(0, 0, 0, 0.02);
    box-shadow: rgba(136, 165, 191, 1) -2px 3px 6px 0px,
      rgba(255, 255, 255, 0.8) -2px -2px 6px 0px;
    /* box-shadow: rgba(60, 64, 67, 0.3) 1px 1px 2px 3px,
      rgba(60, 64, 67, 0.4) 5px 3px 2px 3px; */
    /* -webkit-box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.5),
      inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
      inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12); */

    &:hover {
      color: var(--primary-color);
    }
    .active-btn {
      color: var(--primary-color);
    }
  }
`;

export default Experience;
