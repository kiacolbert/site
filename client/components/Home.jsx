import React from 'react';

function Home(props) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100vw",
      height: "100vh"
    }}>
      <div>
        <img src="pictures/white_full.png" style={{width: "320px"}}></img>
        <div>
        <div>
          <a href="https://github.com/reactrewind/react-rewind" target="_blank">
          <button style={{
            width: "150px",
            height: "30px",
            border: "0px solid black",
            borderRadius: "25px",
            padding: "0",
            marginRight: "3%",
            marginBottom: "3em",
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
            padding: "0",
            marginBottom: "3em",
          }}>
            DOWNLOAD
          </button>
          </a>
        </div>
        </div>
      </div>
    </div>
  )
}
export default Home;
