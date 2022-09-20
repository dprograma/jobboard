import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
    state = {
        counters: [
          {id: 1, value: 0},
          {id: 2, value: 0},
          {id: 3, value: 0},
          {id: 4, value: 0},
          {id: 5, value: 0}
        ]
    }

  handleDelete = counterId => {
    console.log("clicked!", counterId)
    let filteredcounters = this.state.counters.filter(c => counterId != c.id)
    this.setState({counters:filteredcounters})
  }

  render() {
    return (
      <React.Fragment>
        {this.state.counters.map(c => <Counter key={c.id} value={c.value} id={c.id} doDelete={this.handleDelete} />)}
      </React.Fragment>
    );
  }
}

export default Counters;
