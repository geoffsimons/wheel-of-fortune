import React, { Component, PropTypes } from 'react';
import Wheel from './wheel';

class App extends Component {
  render() {
    return(
      <div>
        <Wheel angle={45} />
      </div>
    )
  }
}

export default App;
