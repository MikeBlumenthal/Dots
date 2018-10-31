import React from 'react';
import Box from '../components/Box';
import Dot from '../components/Dot';
import Line from '../components/Line';

class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = null;
  }
  render(){
    return(
      <div className="wrapper">
        <Dot className="one"/>
        <Line className="two"/>
        <Dot className="three"/>
        <Line className="four"/>
        <Box className="five"/>
        <Line className="six"/>
        <Dot className="seven"/>
        <Line className="eight"/>
        <Dot className="nine"/>
      </div>
    )
  }
}

export default Board;
