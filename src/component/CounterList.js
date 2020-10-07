import React, { Component } from "react";
import CounterItem from "./CounterItem";

export class CounterList extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => this.props.onReset()}
          className="btn btn-success m-2"
        >
          <i className="fa fa-sync" />
        </button>
        {this.props.counters.map((counter) => (
          <CounterItem
            key={counter.id}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            onDelete={this.props.onDelete}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default CounterList;
