import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
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

  handleIncrement = product => {
    //this.state.count++;
    this.setState({ value: this.state.value + 1 });
    //console.log("Increment Clicked", this);
  };

  render() {
    //console.log(this.props);
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => {
            this.handleIncrement({ id: 1 });
          }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm m-2"
        >
          {" "}
          Delete
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
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? <h1>Zero</h1> : count;
  }
}

export default Counter;
