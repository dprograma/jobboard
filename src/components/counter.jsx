import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageURL: "images/alfred.jpg",
  };

  // style = {
  //   width: "300px",
  //   height: "300px"
  // }

  formatCount = () => {
    const count = this.state.count;
    return count == 0 ? "Zero" : count;
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 })
  }

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 })
  }

  isdisabled = () => {
    let count = this.state.count
    if (count <= 0){
      return "disable"
    }
  }

  render() {
    console.log("Props", this.props)
    return (
      <div className="row">
        <span className={this.getClassesMethod()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement} className="btn btn-success m-1">+</button>
        <button onClick={this.handleDecrement} className="btn btn-danger m-1" disabled={this.isdisabled()}>-</button>
        <button onClick={() => this.props.doDelete(this.props.id)} className="btn btn-danger btn-sm m-1">Delete {this.props.id}</button>
      </div>
    );
  }

  getClassesMethod = () => {
    var classes = "badge m-2 badge-";
    classes += this.state.count == 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
