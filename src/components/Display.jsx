import React, { Component } from 'react';

import QuantityContext from '../utils/QuantityContext';

const QuantityContextConsumer = QuantityContext.Consumer;

class DisplayComponent extends Component {
  state = {
    quantity: 0
  }
  render() {
    return (
      <div>
        <br />
        <QuantityContextConsumer>
          {quantity => {
            return <p>Hey did you know, we have {quantity} quantity of this.</p>
          }}
        </QuantityContextConsumer>
      </div>
    )
  }
}

export default DisplayComponent;
