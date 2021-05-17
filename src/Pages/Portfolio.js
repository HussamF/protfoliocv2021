import React from 'react';
import Project from '../Components/Project';
import Title from '../Components/Title';
import styled from 'styled-components';
function Portfolio() {
  return (
    <>
      <Title title='Portfolio' span='Portfolio' />
      <Project />
      <BreakLine />
      <Project />
      <BreakLine />
      <Project />
    </>
  );
}

const BreakLine = styled.div`
  width: 80%;
  height: 2px;
  background-color: var(--primary-color);
  margin: 0 auto;
`;
export default Portfolio;
