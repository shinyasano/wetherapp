import React, { Component } from 'react';
import { createGlobalStyle } from "styled-components";

//コンポーネント全体のフォント指定
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c:500&display=swap');
div .message{
  font-family: 'M PLUS Rounded 1c', sans-serif;
  width: 100%;
  height: 200px;
  text-align: center;
  line-height: 200px;
  font-size: 30px;
}
`;

class Mainmessage extends Component {
    
  render() {
    return (
      <div className='message'>
      <GlobalStyle />
        スキー場のピンポイント天気予報を検索してみましょう。
      </div>
    )}
}

export default Mainmessage;