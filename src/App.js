import styled, { ThemeProvider } from 'styled-components';
import Home from './Pages/Home';
import About from './Pages/About';
import Experience from './Pages/Experience';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import { Route, Switch } from 'react-router';
import { useDarkMode } from './Styles/useDarkMode';
import { ThemeToggleBTN } from './Components/ThemeToggleBTN';
import GlobalStyle, { lightTheme, darkTheme } from './Styles/GlobalStyle';
import NavOpenBtn from './Components/NavOpenBtn';
import Navbar from './Components/Navbar';
import React, { useEffect } from 'react';

function App() {
  let [theme, toggleTheme] = useDarkMode();
  theme = localStorage.getItem('theme', theme);
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <div className='App'>
        <GlobalStyle />
        <Navbar theme={theme} />
        <MainContentStyle>
          <ThemeToggleBTN theme={theme} toggleTheme={toggleTheme} />
          <NavOpenBtn theme={theme} />
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/experience'>
              <Experience />
            </Route>
            <Route path='/portfolio'>
              <Portfolio />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
          </Switch>
        </MainContentStyle>
      </div>
    </ThemeProvider>
  );
}
const MainContentStyle = styled.main`
  position: relative;

  margin-left: 30rem;
  min-height: 100vh;

  @media screen and (max-width: 1200px) {
    margin: 0 auto;
  }
  @media screen and (max-width: 650px) {
    /* margin: 0 auto; */
  }
`;
export default App;
