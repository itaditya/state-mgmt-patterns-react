import React, { Component } from 'react';

import { broadcast } from '../utils/eventBus';

class InputComponent extends Component {
  maxQuantity = 20
  state = {
    quantity: 0
  }
  updateQuantity = () => {
    broadcast('state/InputComponent:updateQuantity', {
      quantity: this.state.quantity
    })
    console.log(this.state.quantity);
  }
  inputChangeHandler = event => {
    this.setState({
      quantity: event.target.value
    })
  }
  render() {
    return (
      <div>
        {this.maxQuantity}
        <br />
        {this.state.quantity}
        <input type="text" placeholder="Enter Quantity" value={this.state.quantity} onChange={this.inputChangeHandler} />
        <button onClick={this.updateQuantity}>Update Everywhere</button>
      </div>
    )
  }
}

export default InputComponent;
