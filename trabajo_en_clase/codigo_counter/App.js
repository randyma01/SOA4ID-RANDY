import React, { Component } from 'react';
import Counter from './Counter';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
       <p>
         <Counter />
       </p>
      </div>
    );
  }
}

export default App;
