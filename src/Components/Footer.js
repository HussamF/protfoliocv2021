import React from 'react';
import CMS from '../Imgs/cms.svg';
import Artificial from '../Imgs/artificial-intelligence.svg';
import SmartWatch from '../Imgs/smartwatch.svg';
import styled from 'styled-components';

export const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterContent>
          <Col1 className='col'>
            <img src={CMS} alt='CMS' />
            <p>
              My passion for technologies keeps pushing me to learn more, and
              search deep
            </p>
          </Col1>
          <Col2 className='col'>
            <img src={Artificial} alt='Artificial' />
            <p>
              Next step will be learning about AI, it is the future that
              everyone must learn.
            </p>
          </Col2>
          <Col3 className='col'>
            <img src={SmartWatch} alt='SmartWatch' />
            <p>
              coding is becoming my joy, looking forward to become a full stack
              developer.
            </p>
          </Col3>
        </FooterContent>
      </FooterContainer>
    </>
  );
};

const FooterContainer = styled.section`
  margin: 0 auto;
  border-top: 1px solid ${({ theme }) => theme.color};
  padding: 3rem 0 1rem;
`;
const FooterContent = styled.div`
  display: grid;

  margin: 0 auto;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;

  width: 1170px;
  max-width: 90%;
  .col {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    max-width: 300px;
    margin: 0 auto;

    img {
      width: 40px;
    }
    p {
      padding: 1rem;
      color: ${({ theme }) => theme.color};
      text-align: center;
      width: 250px;
      font-size: 14px;
    }
  }
`;

const Col1 = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 50px;
  }
  p {
    padding: 1rem;

    text-align: center; 
  }*/
`;
const Col2 = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 50px;
  }
  p {
    padding: 1rem;

    text-align: center;
  } */
`;
const Col3 = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 50px;
  }
  p {
    padding: 1rem;

    text-align: center;
  } */
`;
