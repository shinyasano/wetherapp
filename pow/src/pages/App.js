import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from '../template/Header';
import Mainmessage from '../template/Mainmessage';
import Sarchbar from '../template/Sarchbar';
import Skiarea_list from './Skiarea_list';
import Buttun from '../template/Buttun';

class App extends Component {
  //コンストラクタ stateを使う場会必須
  constructor (props) {
    super(props)

    this.state = {
      area:'',
      pref:'',
    };
 
  }


  AreaStateSet(getstate) {
    this.setState({ area: getstate },);
  }
  PrefStateSet(getstate) {
    this.setState({ pref: getstate },);
  }
  render() {
    return (
      <BrowserRouter>
      <div className='main'>
        <Header />
      </div>

        <Route exact path='/' component={Mainmessage} />
        <Route exact path='/' render={props => 
        <Sarchbar 
        SuperAreaStateSet={getstate => this.AreaStateSet(getstate)}
        SuperPrefStateSet={getstate => this.PrefStateSet(getstate)}
        />} />
        <Route exact path='/' render={props => 
        <Buttun 
          area={this.state.area} pref={this.state.pref} {...props}/>}
         />

        <Route  path='/skiarea' render={props => <Skiarea_list area={this.state.area} pref={this.state.pref} />} />


      </BrowserRouter>
    );
  }
}

export default App;
