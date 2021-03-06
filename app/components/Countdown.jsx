import React from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm'

class Countdown extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0
    }

    this.handleSetCountdown = this.handleSetCountdown.bind(this)
  }

  handleSetCountdown(seconds) {
    this.setState({
      count: seconds
    });
  }

  render() {
    var { count } = this.state;
    return (
      <div className="">
        <Clock totalSeconds={count}/>
        <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      </div>
    );
  }
}

export default Countdown;
