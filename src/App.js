import React, { Component } from 'react';

import './App.css';
import InputComponent from './components/Input';
import DisplayComponent from './components/Display';

class App extends Component {
  render() {
    return (
      <div className="App">
        <InputComponent />
        <DisplayComponent />
      </div>
    );
  }
}

export default App;
