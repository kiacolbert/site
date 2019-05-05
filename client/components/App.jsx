import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
// import { createBrowserHistory } from 'history';

import Home from './Home.jsx';
import Demo from './Demo.jsx';
import About from './About.jsx';
import NavBar from './NavBar.jsx';
// import from styled components to create global styles
const GlobalStyle = createGlobalStyle`
 html {
   box-sizing: border-box;
   font-size: 10px;
   height: 100%;
   width: 100%;
 }
 * *:before,* :after {
   box-sizing: inherit;
 }
 body {
   padding: 0;
   margin: 0;
   font-size: 1.5rem;
   line-height: 2;
   height: 100%;
   width: 100%;
   background-color: #729D5E;
 }
`;
const App = (props) => {

  return (
    <>
    <GlobalStyle />
    <Router>
      <div>
      <Route exact path="/" component={Home} />
      </div>
    </Router>
    </>
  )
}

export default App;
