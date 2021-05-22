import React, { useRef, useEffect, useCallback } from 'react';
import { useGlobalContext } from '../context';
import styled from 'styled-components';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import CloseIcon from '@material-ui/icons/Close';
import { useSpring, animated } from 'react-spring';

export const Modal = ({ dates, duties, title }) => {
  const { isModalOpen, closeModal } = useGlobalContext();
  const modalOverlayRef = useRef();
  const animation = useSpring({
    config: {
      duration: 500,
    },
    opacity: isModalOpen ? 1 : 0,
    transform: isModalOpen ? `translateY(0%)` : `translateY(-100%)`,
  });
  const clickOverlayCloseModal = (e) => {
    if (modalOverlayRef.current === e.target) {
      closeModal();
    }
  };

  // Close modal on Escape
  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    },
    [closeModal, isModalOpen]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);
  return (
    <>
      {/* job info */}
      {isModalOpen ? (
        <ModalOverlay onClick={clickOverlayCloseModal} ref={modalOverlayRef}>
          <animated.section style={animation} className='anim'>
            <ModalContainer>
              <button className='close-modal-btn' onClick={closeModal}>
                <CloseIcon />
              </button>

              <h3>
                <span>Jop Title</span> : {title}
              </h3>

              <p className='job-date'>
                <span>Place and Date</span> : {dates}
              </p>
              {duties.map((duty, index) => {
                return (
                  <JobDesc key={index} className='job-desc'>
                    <DoubleArrowIcon className='job-icon' />
                    <p>{duty}</p>
                  </JobDesc>
                );
              })}
            </ModalContainer>
          </animated.section>
        </ModalOverlay>
      ) : null}
    </>
  );
};
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  overflow-y: scroll;
  z-index: 100;
  .anim {
    max-width: 90% !important;
    /* width: 670px; */
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background};
  padding: 3rem 1rem;
  max-width: 90% !important;
  width: 970px;
  max-height: 90vh;
  position: relative;
  overflow-y: auto;
  margin-left: 30rem;
  z-index: 100;
  border-radius: 20px;
  @media screen and (max-width: 1200px) {
    margin-left: 0rem;
  }
  @media screen and (max-width: 650px) {
    margin: 0 auto;
  }
  .close-modal-btn {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: none;
  }

  h1,
  h3,
  h4 {
    font-size: var(--h-fontSize);
    padding: 0.5rem 2rem;
    color: ${({ theme }) => theme.color};
    span {
      color: var(--primary-color);
      font-size: var(--h-fontSize);
    }
  }
  p {
    font-size: var(--p-fontSize);
    padding: 0.5rem 2rem;
    color: ${({ theme }) => theme.color};
    span {
      color: var(--primary-color);
      font-size: var(--p-fontSize);
    }
  }
`;
const JobDesc = styled.div`
  display: flex;
  align-items: flex-start;
  vertical-align: top;
  position: relative;
  gap: 1rem;
  margin-left: 1rem;
  p {
    font-size: var(--p-fontSize);
    padding: 0.5rem 2rem;
    color: ${({ theme }) => theme.color};
  }
  .job-icon {
    position: absolute;
    top: 1rem;
    left: 0;
    color: var(--primary-color);
  }
`;
