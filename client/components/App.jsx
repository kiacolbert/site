import React from 'react';
import { createGlobalStyle } from 'styled-components';
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
    <div style={{
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center",
      width: "100vw",
      height: "100vh",
      // backgroundColor: "red"
    }}>
      <div>
        <img src="pictures/white_full.png" style={{width: "320px"}}></img>
        <div style={{
          // display: "flex",

          // justifyContent: "space-evenly",
          // backgroundColor: "pink"
        }}>
        <div>
          <a href="https://github.com/reactrewind/react-rewind" target="_blank">
          <button style={{
            width: "150px", 
            height: "30px",
            border: "0px solid black", 
            borderRadius: "25px",
            // fontWeight: "600",
            // fontSize: "13px",
            padding: "0",
            marginRight: "3%",
          }}>
            GITHUB
          </button> 
          </a>
          <a href="https://chrome.google.com/webstore/detail/react-rewind/gaombjmfkfdcfaeehpflnkkfdbpmjohl?hl=en" target="_blank">
          <button style={{
            width: "150px", 
            height: "30px",
            border: "0px solid black", 
            borderRadius: "25px",
            // fontWeight: "600",
            // fontSize: "13px",
            padding: "0",
          }}>
            DOWNLOAD
          </button>
          </a> 
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App