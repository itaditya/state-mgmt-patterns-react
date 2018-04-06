import React, { Component } from 'react';

class InputComponent extends Component {
  maxQuantity = 20
  state = {
    quantity: 0
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
        <button onClick={() => this.props.updateQuantity(this.state.quantity)}>Update Everywhere</button>
      </div>
    )
  }
}

export default InputComponent;
