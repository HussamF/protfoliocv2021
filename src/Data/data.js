import LwisPhone from '../Imgs/gmadphone.png';
import LwisPc from '../Imgs/gmadpc.png';
import EmbPhone from '../Imgs/embphone.png';
import EmbPc from '../Imgs/embpc.png';
import SamtechPhone from '../Imgs/samtechphone.png';
import SamtechPc from '../Imgs/samtechpc.png';

export const data = [
  {
    id: '1',
    title: ' Front-end Development Freelance',
    dates: 'Rome January /2021 currently working',
    duties: [
      ' Html5 , Css , Sass , JavaScript , ReactJS , (light)NodeJS',
      ' Started developing my skills in these technologies above at March/2020.',
      ' Lunched VAT number at Jan/2021',
      ' I have built an official website for my first client "www.architettigmad.com" Html,Css,Vanilla JavaScript',
      ' Built my own official website as portfolio "www.samtech-developing.ml" ReactJS, JSX, Sass ,StyledComponents,EmailJS, smooth scroll, i18net Multi Languages.',
      ' Now working on improving these skills and uploading to github',
      ' My next plan would be learning Python',
    ],
    company: 'Samtech',
  },
  {
    id: '2',
    title: 'IT help desk technical support',
    dates: 'VATICAN February /2019 currently working',
    duties: [
      ' IT Technical support mostly for desktop.',
      ' Pcs windows software installation , troubleshooting and configuration.',
      ' PCs hardware maintenance and repair best practices.',
      ' Problem solving abilities.',
      ' Wireless network handling. .',
    ],
    company: 'Empassy of Palestine',
  },
  {
    id: '3',
    title: 'IT support , Laser"s & Heating"s press operatin',
    dates: 'QATAR-AL DOHA November/2016 –March/ 2018',
    duties: [
      ' Provide Technical support and operator training for Laser cutting/engraving ,Heating press printing ,and sublimation/3D printing systems.',
      ' Graphic design using Photoshop, Corel Draw and RDWorks',
      ' Training clients on operating laser and printing systems in Arabic & English.',
      ' On sells department, business deals , offers managing , guiding customers for best technology that they might need for their business',
    ],
    company: 'Al Basel Advertising Supplies Trading Company',
  },
  {
    id: '4',
    title: 'Bilingual translation, customers trading services',
    dates: 'CHINA-YIWU October/2013 - March/2015',
    duties: [
      ' Bilingual translation for business clients Chinese/Arabic/English.',
      ' Provide Customer Service and accompany them on business visits to factories and exhibitions and negotiate business deals on their behalf.',
      ' Produce business reports and reviewing/resolving customers complaints.',
      ' Clarifying users’ requirements and recommend suitable solutions.',
      ' Inspect samples for quality and specifications compliance and supervise receiving, packing and shipping consignments for overseas customers. ',
    ],
    company: 'KuaPing Import and Export Trading Company',
  },
];

export const projectData = [
  {
    id: '1',
    headerDesc: 'UI/UX Website architecture office.',
    detailDesc: 'HTML5, CSS, Vanilla JavaScript',
    projectStory:
      'This was my first project that I delieverd to a clinet business 1/11/2020 , it contains information about the office and the recent projects that they have done in the past',
    imageMac: `${LwisPc}`,
    imageIphone: `${LwisPhone}`,
  },
  {
    id: '2',
    headerDesc: 'UI/UX Freelance webdeveloper.',
    detailDesc: 'HTML5, CSS, React JS',
    projectStory:
      'Freelance company has web development services , websites , web apps  ',

    imageMac: `${SamtechPc}`,
    imageIphone: `${SamtechPhone}`,
  },
  {
    id: '3',
    headerDesc: 'UI/UX Embassy website',
    detailDesc: 'HTML5, CSS, Vanilla JavaScriot',
    projectStory:
      'An embassy website , not live yet, still lacking for few informations and features.',
    imageMac: `${EmbPc}`,
    imageIphone: `${EmbPhone}`,
  },
];
