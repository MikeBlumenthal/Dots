import React from 'react';

class Line extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  render() {
    return (
      <h1>line</h1>
    )
  }

}

export default Line;
