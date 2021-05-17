import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`


:root{
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --background-dark-color: #10121A;
    --background-light-color: #f2f2f2;
    --border-color: #2e344e;
    --border-dark-color: #2e344e;
    --border-light-color:rgba(48,48,48,05);
    --white-color: #fff;
    --black-color: #000;
    --font-light-color: #a4acc4;
    --background-light-color-2: rgba(3,127,255,.09);
    --background-dark-color-2: rgba(48, 48, 48,.04);
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #191d2b;
    --sidebar-light-color: #c7c7c7;
    --btn-light-hover: rgba(48, 48, 48, 6);
    --transition-easeInOut-mode: all 1s ease-in-out;
    --transition-btn-easeInOut:all .25s ease-in-out;
    --p-fontSize: 1.8rem;
    --h-fontSize: 2.1rem;
    /* --h-thin-fontSize: 2.1rem; */
    --shadow-white:rgba(255, 255, 255,.05);
    --shadow-white-hover:rgba(255, 255, 255,.09);
    --shadow-black:rgba(0, 0, 0,.05);
    --shadow-black-hover:rgba(0, 0, 0,.09);
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-size:10px;
    letter-spacing:2px;
    line-height:1.8;
    font-family: 'Nunito Sans', sans-serif;
    @media screen and (max-width: 1100px) {
    *{
        letter-spacing:1px;
        line-height:1.5;
        --p-fontSize: 1.6rem;
    }
}

}

 body{
    background-color : ${({ theme }) => theme.background}; 
    transition: var(--transition-easeInOut-mode);
     /* overflow-x: hidden !important; */
    
} 

/* a{
    text-transform: uppercase;
    letter-spacing:1.2px;
    font-size:2rem;
    @media screen and (max-width: 1100px){
        font-size:1.8rem;
}
}  */


.svg-mode{
    width: 30px;
    position:absolute;
    top: 3rem;
    right:3rem;
    z-index:99;
    transition: var(--transition-easeInOut);
    cursor:pointer;
}



    /* .nav-toggle{
    display: none;
    @media  screen and (max-width: 650px){
    display:block;
    width:30px;
    height:30px;
    position:absolute;
    top: 3rem;
    left:3rem;
    outline:none;
    z-index:99;
    transition: var(--transition-easeInOut);
    cursor:pointer;
 }
    }
 .nav-toggle-close {
     display:none;
    @media  screen and (max-width: 650px){
        display: block;
        width: 30px;
        height: 30px;
        position: absolute;
        top: 3rem;
        right: 3rem;
        outline: none;
        z-index: 100;
        transition: var(--transition-easeInOut);
        cursor: pointer;
    }
 } */



 @media  screen and (max-width: 1200px){
    .nav-open {
    left: 0 !important;
    width: 100vw !important;
    z-index:1000 !important; 
  }
 }

`;

export const lightTheme = {
  background: 'var(--background-light-color)',
  color: 'var(--font-dark-color)',
  sideBar: 'var(--sidebar-light-color)',
  titleBefor: 'black',
  titleSpan: 'var(--background-dark-color-2)',
  BtnColor: 'var(--white-color)',
  BtnHover: 'var(--btn-light-hover)',
  borderColor: 'var( --border-light-color)',
  shadow: 'var( --shadow-black)',
  shadowHover: 'var(--shadow-black-hover)',
};
export const darkTheme = {
  background: 'var(--background-dark-color)',
  color: 'var(--font-light-color)',
  sideBar: 'var(--sidebar-dark-color)',
  titleBefor: 'red',
  titleSpan: 'var(--background-light-color-2)',
  BtnColor: 'var(--white-color)',
  BtnHover: 'var(--btn-light-hover)',
  borderColor: 'var( --border-dark-color)',
  shadow: 'var(--shadow-white)',
  shadowHover: 'var(--shadow-white-hover)',
};

export default GlobalStyle;
