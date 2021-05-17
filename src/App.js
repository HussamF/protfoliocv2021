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
import React from 'react';

function App() {
  const [theme, toggleTheme] = useDarkMode();
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
            <Route path='/about' exact>
              <About />
            </Route>
            <Route path='/experience' exact>
              <Experience />
            </Route>
            <Route path='/portfolio' exact>
              <Portfolio />
            </Route>
            <Route path='/contact' exact>
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
