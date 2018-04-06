import React, { Component } from 'react';

import './App.css';
import InputComponent from './components/Input';
import DisplayComponent from './components/Display';
import QuantityContext from './utils/QuantityContext';

const QuantityContextProvider = QuantityContext.Provider;

class App extends Component {
  state = {
    quantity: 0
  }
  updateQuantity = (quantity) => {
    this.setState({ quantity });
  }
  render() {
    return (
      <div className="App">
        <InputComponent updateQuantity={this.updateQuantity} />
        <QuantityContextProvider value={this.state.quantity}>
          <DisplayComponent/>
        </QuantityContextProvider>
      </div>
    );
  }
}

export default App;
