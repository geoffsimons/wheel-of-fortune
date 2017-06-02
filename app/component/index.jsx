import React, { Component, PropTypes } from 'react';
import Wheel from './wheel';
import Controls from './Controls';

class App extends Component {
  render() {
    return(
      <div>
        <Wheel angle={45} />
        <Controls />
      </div>
    )
  }
}

export default App;
