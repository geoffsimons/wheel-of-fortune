import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Wheel from './wheel';
import Controls from './Controls';
import Meter from './lib/Meter';
import { updateWheel } from '../action';

class App extends Component {

  render() {
    const { dispatch, angle, velocity } = this.props;
    return(
      <div>
        <Wheel angle={angle} />
        <Controls updateWheel={(ang, vel) => dispatch(updateWheel(ang, vel))}/>
        <Meter value={velocity} />
      </div>
    )
  }
}

App.propTypes = {
  angle: PropTypes.number,
  velocity: PropTypes.number
};

function mapStateToProps(state) {
  const { wheel } = state;
  return {
    angle: wheel.angle,
    velocity: wheel.velocity
  };
}

export default connect(mapStateToProps)(App);
