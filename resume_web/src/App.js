import React, { useState, useEffect } from "react";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/Globalstyles";
import { lightTheme, darkTheme } from "./components/Themes";
import "./App.css";
import 'semantic-ui-css/semantic.min.css';
import { Button, Container, Menu, Radio } from "semantic-ui-react";
import styled from 'styled-components';
//import Header from './components/Header';
import {BrowserRouter as Router, Link} from "react-router-dom";

const App = () => {
  const [theme, setTheme] = useState('dark');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
}

const TopBar = styled.div`
  padding: 5%;
  margin: auto auto;
  width: 100%
`;

const MenuItem = styled.div`
  margin: 2%;
  display: inline-block;
  box-shadow: 0 0 0 0 transparent;
`;

const ResumeBtn = styled.div`
  margin: 1.25%;
  float left;
`;

const MenuBar = styled.div`
  width: 70%;
  float: right;
  text-align: end;
`;


function menuButton(buttontext, link) {
    return(
        <MenuItem>
        <Button inverted color="blue">
            {buttontext}
        </Button> 
        </MenuItem>
    ); 
}

const cscs = <div><Link to='/#About'>{menuButton("About", '')}</Link>
<Link to='/#Exp'>{menuButton("Experience", '')}</Link>
<Link to='/#Proj'>{menuButton("Projects", '')}</Link>
<Radio toggle onClick={themeToggler}/></div> ;

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles/>
        <div className="App">
          <Container>
          <Router>
            <TopBar>
              <ResumeBtn>
              <Button content="Resume" ></Button>
              </ResumeBtn>
              <MenuBar>
                <Menu stackable floated="right" inverted="true" size="huge">
                  <Menu.Item >About</Menu.Item>
                  <Menu.Item >Experience</Menu.Item>
                  <Menu.Item >Projects</Menu.Item>
                </Menu>
              </MenuBar>
            </TopBar>
          </Router>
          <section id="#About">
            <Container></Container>
          </section>
          <section id="#Exp">
            <Container></Container>
          </section>
          <section id="#Proj">
            <Container></Container>
          </section>
          </Container>
        </div>
      </>
    </ThemeProvider>
  );
};
export default App;