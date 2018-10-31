import React from 'react';

class Line extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    console.log("click");
    this.setState({clicked: "clicked"});
  }

  render() {
    return (
      <div onClick={this.handleClick} className={this.state.clicked}>
      </div>
    )
  }

}

export default Line;
