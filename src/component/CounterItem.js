import React, { Component } from "react";

class CounterItem extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-1">
            <span className="badge  badge-primary" style={{ fontSize: 24 }}>
              {this.props.counter.value}
            </span>{" "}
          </div>
          <div className="col-md-4">
            <button
              className="btn btn-success"
              onClick={() => this.props.onIncrement(this.props.counter)}
            >
              <i className="fa fa-plus" />
            </button>{" "}
            <button
              onClick={() => this.props.onDecrement(this.props.counter)}
              className="btn btn-danger"
            >
              <i className="fa fa-minus" />
            </button>{" "}
            <button
              type="button"
              onClick={() => this.props.onDelete(this.props.counter.id)}
              className="btn btn-outline-danger"
            >
              <i className="fa fa-trash" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CounterItem;
