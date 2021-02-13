import React, { Component } from 'react';
import Btn from './Button/index';
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleCounter = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  };
  render() {
    const { counter } = this.state;
    return (
      <div>
        <h1>Total click counts(Click on click counter): {counter}</h1>
        <Btn label="Click Counter" type="default" handleClick={this.handleCounter}/>
      </div>
    );
  }
}
export default Contact;
