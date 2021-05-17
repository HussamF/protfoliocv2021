import React from 'react';
import MacPhoto from '../Imgs/mac.png';
import IphonePhoto from '../Imgs/iphone.png';
import { projectData } from '../Data/data';
import styled from 'styled-components';
import Website from '../Imgs/pro1phone.png';
import WS from '../Imgs/pro1.png';

const Projects = () => {
  const { id, headerDesc, DetailDesc, imageMac, imageIphone } = projectData;
  return (
    <>
      <ProjectContainer>
        <ProjectWrapper>
          <Project>
            <MacPc>
              <MacPcImage src={MacPhoto} />
              <InsidePcImage
                style={{
                  background: `url(${WS})`,
                }}
              />
            </MacPc>
            <MacPhone>
              <MacPhoneImage src={IphonePhoto} />
              <InsidePhoneImage
                style={{
                  background: `url(${Website})`,
                }}
              />
            </MacPhone>
          </Project>
          <ProjectContent>
            <ProjectHeaderDesc>UI/UX Architature Office</ProjectHeaderDesc>
            <ProjectDetailDesc>HTML5,CSS,JavaScript</ProjectDetailDesc>
            <ProjectStory>
              This was my first project that I delieverd to a clinet business
              1/11/2020 , it contains information about the office and the
              recent projects that they have done in the past
            </ProjectStory>
          </ProjectContent>
        </ProjectWrapper>
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
  /* align-items: center; */
  margin: 0 auto;
`;

const Project = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* gap: 3rem; */
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

// const ProjectContainer = styled.div
// `;
// //   min-height: 100vh;
// // `;
// const ProjectWrapper = styled.div`
//   position: relative;
//   display: flex;
//   width: 1170px;
//   max-width: 90%;
//   margin: 0 auto;

//   @media screen and (max-width: 920px) {
//   }
//   @media screen and (max-width: 600px) {
//   }
// `;

// const ProjectHeader = styled.h1`
//   @media screen and (max-width: 480px) {
//   }
// `;

// const Project = styled.div`
//   margin: 0 auto;
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   image {
//   }
// `;
// const IphoneImg = styled.div`
//   position: relative;
//   width: 606px;
//   height: 489px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const InsidePcImage = styled.image`
//   width: 300px;
//   height: 400px;
// `;

// const InsidePhoneImage = styled.image`
//   width: 500px;
//   min-height: 400px;

// `;

// const ProjectImgs = styled.div`
//   display: flex;
//   gap: 3rem;
//   margin: 0 auto;
//   padding: 6rem;
// `;
// const ProjectContent = styled.div``;

// const ProjectHeaderDesc = styled.p`
//   color: #010606;
// `;
// const ProjectDetailDesc = styled.p`
//   color: #ff9a63;
//   font-size: 0.9rem;
//   font-weight: bold;
// `;

// export const Mac = styled.div`
//   position: relative;
//   width: 606px;
//   height: 489px;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   @media screen and (max-width: 600px) {
//     display: none;
//   }
// `;

// const Iphone = styled.div`
//   position: relative;
//   width: 245px;
//   height: 383px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   margin-top: 4rem;
// `;

// const ImgPC = styled.img`
//   width: 100%;
// `;
// const ImgPhone = styled.img`
//   width: 100%;
// `;

export default Projects;
