import React from 'react';

class Line extends React.Component {

  getSelf(queryID){
    return this.props.data.gameState.find( obj => obj.id === queryID);
  }

  render() {
    // const id = this.props.className;
    // const self = this.getSelf(id);
    // console.log(self);

    return (

      <div onClick={this.props.clickLine} id={this.props.className}>

      </div>
    )
  }

}

export default Line;
