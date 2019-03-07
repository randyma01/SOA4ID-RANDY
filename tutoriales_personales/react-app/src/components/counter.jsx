import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: []
    //imageUrl: "https://picsum.photos/200" <img src={this.state.imageUrl} alt="" />
  };

  /* constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  } */

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
  }

  handleIncrement = () => {
    //this.state.count++;
    this.setState({ count: this.state.count + 1 });
    //console.log("Increment Clicked", this);
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  /* render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  } */

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : count;
  }
}

export default Counter;
