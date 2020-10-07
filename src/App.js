import React, { Component } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import CounterList from "./component/CounterList";

class App extends Component {
  state = {
    counters: [
      {
        id: 1,
        value: 0,
      },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    console.log(index);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({
      counters: counters,
    });
  };
  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    if (counters[index].value >= 0)
      this.setState({
        counters: counters,
      });
    else return (counters[index].value = 0);
  };
  handleDelete = (id) => {
    const counters = [...this.state.counters];
    const filtCounters = counters.filter((counter) => counter.id !== id);
    this.setState({
      counters: filtCounters,
    });
  };
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({
      counters: counters,
    });
  };
  render() {
    return (
      <div>
        <Navbar
          totalCounter={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <CounterList
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
          />
        </main>
      </div>
    );
  }
}
export default App;
