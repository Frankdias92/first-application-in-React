import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    font-family: 'poppins', sans-serif;
    border: 0;
    box-sizing: border-box;
  }
  
  body {
    width: 100vh;
    height: auto;
    display: flex;
    justify-content: center;
    margin: auto;
    background-color: #121212;
    color: #fff;
  }

  button:hover {
    transform: scale(110%);
    filter: brightness(90%);
  }
`;

export default Global;