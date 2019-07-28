import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
div .button{
text-align:center;
}
`;

class Buttun extends Component {

  handleToAboutPage = () => {
          //未入力の場合プロップスに何が入っているか調べる。ifで表示されるページを分岐
    this.props.history.push("/skiarea")
  }
  
  render() {
    return (
    <div className='button'>
      <GlobalStyle />
      <Button variant="contained" color="primary" onClick={this.handleToAboutPage}>
            検索
          </Button>
    </div>
    )}
}

export default Buttun;