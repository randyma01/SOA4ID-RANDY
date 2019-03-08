import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counter: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = counterId => {
    //console.log("Event Handler Called.", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        {this.state.counter.map(counter => (
          <Counter
            key={counter.id}
            value={counter.value}
            id={counter.id}
            onDelete={this.handleDelete}
            selected
          />
        ))}
      </div>
    );
  }
}

export default Counters;
