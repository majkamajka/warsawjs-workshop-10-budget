import React, { Component } from 'react';

class HelloStatefull extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
    };
  }
  render() {
    return <p>stateful {this.state.name}</p>
  }
}
export default HelloStatefull;
