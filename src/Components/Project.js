import React from 'react';
import MacPhoto from '../Imgs/mac1.png';
import IphonePhoto from '../Imgs/iphone.png';
import { projectData } from '../Data/data';
import styled from 'styled-components';

const Projects = () => {
  return (
    <>
      <ProjectContainer>
        {projectData.map((item) => {
          return (
            <ProjectWrapper key={item.id}>
              <Project>
                <MacPc>
                  <MacPcImage src={MacPhoto} />
                  <InsidePcImage
                    style={{
                      background: `url(${item.imageMac})`,
                    }}
                  />
                </MacPc>
                <MacPhone>
                  <MacPhoneImage src={IphonePhoto} />
                  <InsidePhoneImage
                    style={{
                      background: `url(${item.imageIphone})`,
                    }}
                  />
                </MacPhone>
              </Project>
              <ProjectContent>
                <ProjectHeaderDesc>{item.headerDesc}</ProjectHeaderDesc>
                <ProjectDetailDesc>{item.detailDesc}</ProjectDetailDesc>
                <ProjectStory>{item.projectStory}</ProjectStory>
              </ProjectContent>
              <BreakLine></BreakLine>
            </ProjectWrapper>
          );
        })}
      </ProjectContainer>
    </>
  );
};

const ProjectContainer = styled.div`
  width: 1170px;
  max-width: 90%;
  margin: 0 auto;
  padding: 3rem 0;
`;

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

const Project = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding-top: 10rem;
  @media screen and (max-width: 910px) {
    flex-direction: column-reverse;
    gap: 3rem;
  }
`;
const MacPc = styled.div`
  position: relative;
  width: 606px;
  height: 489px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
  @media screen and (max-width: 610px) {
    display: none;
  }
`;

const MacPcImage = styled.img``;

const InsidePcImage = styled.img`
  width: 555px;
  height: 313px;
  position: absolute;
  top: 25px;
  background-position: top !important;
  background-size: cover !important;
  transition: all 3s linear;
  &:hover {
    background-position: bottom !important;
  }
`;

const MacPhone = styled.div`
  position: relative;
  width: 245px;
  height: 383px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
`;

const MacPhoneImage = styled.img``;

const InsidePhoneImage = styled.img`
  width: 161px;
  height: 287px;
  position: absolute;
  top: 43px;
  background-position: top !important;
  background-size: cover !important;
  transition: all 5s linear;
  &:hover {
    background-position: bottom !important;
  }
`;

const ProjectContent = styled.div`
  margin-top: 3rem;
  padding: 0 1rem;
`;

const ProjectHeaderDesc = styled.h2`
  font-size: var(--p-fontSize);
  color: ${({ theme }) => theme.color};
`;
const ProjectDetailDesc = styled.h3`
  font-size: var(--p-fontSize);
  color: var(--primary-color);
`;
const ProjectStory = styled.p`
  font-size: var(--p-fontSize);
  color: ${({ theme }) => theme.color};
`;

const BreakLine = styled.div`
  width: 80%;
  height: 2px;
  background-color: var(--primary-color);
  margin: 0 auto;
  margin-top: 6rem;
`;

export default Projects;
