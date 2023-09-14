import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.decrementHandler = this.decrementHandler.bind(this);
    this.incrementHandler = this.incrementHandler.bind(this);
  }

  decrementHandler() {
    this.setState((curState) => {
      return { count: curState.count - 1 };
    });
  }

  incrementHandler() {
    this.setState((curState) => {
      return { count: curState.count + 1 };
    });
  }

  render() {
    const date = new Date("june 27 2027");
    date.setDate(date.getDate() + this.state.count);

    return (
      <div>
        <button onClick={this.decrementHandler}>-</button>
        <span>
          {date.toDateString()} {this.state.count}
        </span>
        <button onClick={this.incrementHandler}>+</button>
      </div>
    );
  }
}
