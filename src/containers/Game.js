import React from 'react';
import Box from '../components/Box';
import Dot from '../components/Dot';
import Line from '../components/Line';

class Game extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      gameState:
      [

          {id: "a1"},
          {id: "a2", clicked: "unclicked"},
          {id:"a3"},
          {id:"a4", clicked: "unclicked"},
          {id:"a5"}
        ,


          {id: "b1", clicked: "unclicked"},
          {id:"b2", filled: "unfilled"},
          {id: "b3", clicked: "unclicked"},
          {id:"b4", filled: "unfilled"},
          {id:"b5", clicked: "unclicked"}
        ,


          {id:"c1"},
          {id:"c2", clicked: "unclicked"},
          {id:"c3"},
          {id:"c4", clicked: "unclicked"},
          {id:"c5"}

      ]
    }
    this.clickLine = this.clickLine.bind(this);
  }

  clickLine(evt){
    const id = evt.target.id;
    const reqObj = this.state.gameState.find(obj=>obj.id ===id);
    const index = this.state.gameState.indexOf(reqObj);
    this.setState(this.state.gameState[index]={id:id, clicked:"clicked"});
  }


  render(){

    return(
      <div className="wrapper">
        <Dot className="a1" data={this.state}/>
        <Line className="a2" data={this.state} clickLine={this.clickLine}/>
        <Dot className="a3" data={this.state}/>
        <Line className="a4" data={this.state} clickLine={this.clickLine}/>
        <Dot className="a5" data={this.state}/>
        <Line className="b1" data={this.state} clickLine={this.clickLine}/>
        <Box className="b2" data={this.state}/>
        <Line className="b3" data={this.state} clickLine={this.clickLine}/>
        <Box className="b4" data={this.state}/>
        <Line className="b5" data={this.state} clickLine={this.clickLine}/>
        <Dot className="c1" data={this.state}/>
        <Line className="c2" data={this.state} clickLine={this.clickLine}/>
        <Dot className="c3" data={this.state}/>
        <Line className="c4" data={this.state} clickLine={this.clickLine} />
        <Dot className="c5" data={this.state}/>
      </div>
    )
  }

}

export default Game;
