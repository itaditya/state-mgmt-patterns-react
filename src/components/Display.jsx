import React, { Component } from 'react';

import { subscribe } from '../utils/eventBus';

class DisplayComponent extends Component {
  state = {
    quantity: 0
  }
  updateQuantity = (quantity) => {
    this.setState({ quantity });
  }
  componentDidMount() {
    subscribe('state/InputComponent:updateQuantity', ({ quantity }) => {
      this.updateQuantity(quantity);
    })
  }
  render() {
    return (
      <div>
        <br />
        Hey did you know, we have {this.state.quantity} quantity of this.
      </div>
    )
  }
}

export default DisplayComponent;
