import React, { Component } from 'react';
import Ski_area_table from '../template/Ski_area_table';
import axios from 'axios';


class Skiarea_list extends Component {
    //コンストラクタ stateを使う場会必須
    constructor (props) {
      super(props)
      this.state = {
        res:[],
      };
    
    var url = "http://localhost:4000/sarch";
    axios.post(url, {
      area: this.props.area,
      pref: this.props.pref
    })
    .then(response => (this.ResStateSet(response)))
    .catch(function (error) {
      console.log(error);
    });

    }
    ResStateSet(response){
      this.setState({res:response.data})
    }
  render() {
    return (
      <div className='skiarea_list'>
       {this.state.res.map((data,index) => {
         return <Ski_area_table key={index} data={data} />;
       })}
      </div>
    );
  }
}

export default Skiarea_list;
