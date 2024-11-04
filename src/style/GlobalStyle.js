//GlobalStyle.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {box-sizing:border-box;}
  body {
    background: #CCC;
    font-family: 'Pretendard', sans-serif;
  }
  button {
    background: none;margin: 0; padding: 0;
    border: none;
  }
  #root {
    width: 500px;min-height: 80vh;
    margin: 50px auto;background: #FFF;
    border: 1px solid #999;border-radius: 10px;
  }
`
export default GlobalStyle;