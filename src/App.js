import React, { Component } from 'react';
import { QuoteMachine } from "./components/QuoteMachine";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <QuoteMachine />
      </div>
    );
  }
}

export default App;
