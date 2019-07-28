import React, { Component } from 'react';
import { createGlobalStyle } from "styled-components";
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { styled } from '@material-ui/styles';


//googleフォントしていのところdivでしか動作できない。
//HTMLはspanなのに・・。
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Kosugi+Maru&display=swap');
@import url('https://fonts.googleapis.com/css?family=M+PLUS+1p&display=swap');
div .root{
  text-align:center;
  width: 100%;
}
div .font{
  font-family: 'Kosugi Maru', sans-serif;
}
span .nowrap{
  white-space: nowrap;
}
div .bigfont{
  font-family: 'M PLUS 1p', sans-serif;
  font-size: 18px;
  color: white;
}
`;
//CSS定義
const MyTable = styled(Table)({
  padding: '100px 30px',
  width:"600px",
  marginLeft  : 'auto',
  marginRight : 'auto',
});
const Headercell = styled(TableCell)({
  height: "30px",
  background: 'linear-gradient(45deg, #0a0a0a 30%, #FF8E53 90%)',
});
const MyPaper = styled(Paper)({
  padding: '30px 30px',
  width:"640px",
  textAlign: 'center',
  marginLeft  : 'auto',
    marginRight : 'auto',
});
class Ski_area_table extends Component {
    //コンストラクタ stateを使う場会必須
    constructor (props) {
      super(props)
      this.state = {
        json :[],
      };
    
    var url = `http://localhost:4000/wether`;
    axios.post(url, {
      latlong: this.props.data.latlong
    })
    .then(response => (this.JsonStateSet(response)))
    .catch(function (error) {
      console.log(error);
    });

    }
    JsonStateSet(response){
      this.setState({json:response.data.daily})
        }

  render() {

    var rowsDay = [];
    var rowswether = [];
    var rowstempertureHigh = [];
    var rowstempertureLow = [];
    var rowsprecipProbbility = [];
    var rowsprecipIntensity = [];
    var rowswindSpeed = [];

    if(this.state.json.data !== undefined){
      var todaydate = new Date();
      rowswether.push(<TableCell align="left"><span className="font">
        {`天気`}
        </span>
        </TableCell>);
        rowstempertureHigh.push(<TableCell align="left"><span className="font">
          <span className="nowrap">
        {`最高気温`}
        </span></span>
        </TableCell>);
        rowsDay.push(<TableCell align="left"><span className="font">
        {``}
        </span>
        </TableCell>);
        rowstempertureLow.push(<TableCell align="left"><span className="font">
        <span className="nowrap">
        {`最低気温`}
        </span></span>
        </TableCell>);
        rowsprecipProbbility.push(<TableCell align="left"><span className="font">
        <span className="nowrap">
        {`降水確率`}
        </span></span>
        </TableCell>);
        rowsprecipIntensity.push(<TableCell align="left"><span className="font">
        <span className="nowrap">
        {`最大降水量`}
        </span></span>
        </TableCell>);
        rowswindSpeed.push(<TableCell align="left"><span className="font">
       <span className="nowrap">
        {`最大瞬間風速`}
        </span></span>
        </TableCell>);
      for(var i = 0;i < 3; i++){
        rowsDay.push(<TableCell align="center"><span className="font">
        <span className="nowrap">
         {`${todaydate.getMonth()+1}/${todaydate.getDate()+i}`}
        </span></span>
        </TableCell>);
      }
      for(i = 0;i < 3; i++){
        rowswether.push(<TableCell align="left"><span className="font">
          {this.state.json.data[i].summary}
          </span>
          </TableCell>);
      }
      for(i = 0;i < 3; i++){
        rowstempertureHigh.push(<TableCell align="center"><span className="font">
          <span className="nowrap">
            {(this.state.json.data[i].temperatureHigh)+"℃"}
          </span></span>
          </TableCell>);
      }
      for(i = 0;i < 3; i++){
        rowstempertureLow.push(<TableCell align="center"><span className="font">
          <span className="nowrap">
           {(this.state.json.data[i].temperatureLow)+"℃"}
          </span></span>
          </TableCell>);
      }
      for(i = 0;i < 3; i++){
        rowsprecipProbbility.push(<TableCell align="center"><span className="font">
          <span className="nowrap">
            {(this.state.json.data[i].precipProbability*100)+"%"}
          </span></span>
          </TableCell>);
      }
      for(i = 0;i < 3; i++){
        rowsprecipIntensity.push(<TableCell align="center"><span className="font">
          <span className="nowrap">
            {(this.state.json.data[i].precipIntensityMax)+"mm/時"}
          </span></span>
          </TableCell>);
      }
      for(i = 0;i < 3; i++){
        rowswindSpeed.push(<TableCell align="center"><span className="font">
          <span className="nowrap">
           {(this.state.json.data[i].windGust)+"m/s"}
          </span></span>
          </TableCell>);
      }
  }
    return (
    <div className="root">
      <GlobalStyle />
     <MyPaper >
      <div className="table">
        <MyTable size="small">
            <TableRow>
            <Headercell colSpan={4} align="left">
              <span className="bigfont">
                {this.props.data.name}
              </span>
              </Headercell>
            </TableRow>
          <TableBody>
              <TableRow >
                {rowsDay}
              </TableRow>
              <TableRow >
                {rowswether}
              </TableRow>
              <TableRow >
                {rowstempertureHigh}
              </TableRow>
              <TableRow >
                {rowstempertureLow}
              </TableRow>
              <TableRow >
                {rowsprecipProbbility}
              </TableRow>
              <TableRow >
                {rowsprecipIntensity}
              </TableRow>
              <TableRow >
                {rowswindSpeed}
              </TableRow>
          </TableBody>
        </MyTable>
      </div>
    </MyPaper>
  
    </div>
    )}
          
}

export default Ski_area_table;