import React, { Component } from 'react';
import { createGlobalStyle } from "styled-components";

//コンポーネント全体のフォント指定
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Acme&display=swap');
div .header{
font-size: 50px;
font-family: 'Acme', sans-serif;
text-align: left;
padding-left: 100px;
}
`;

class Header extends Component {
    
  render() {
    return (
      <div className='header'>
      <GlobalStyle />
        P.O.W
      </div>
    )}
}

export default Header;