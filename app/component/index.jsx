import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Wheel from './wheel';
import Controls from './Controls';
import { updateWheel } from '../action';

class App extends Component {

  render() {
    const { dispatch, angle } = this.props;
    return(
      <div>
        <Wheel angle={angle} />
        <Controls updateWheel={ang => dispatch(updateWheel(ang))}/>
      </div>
    )
  }
}

App.propTypes = {
  angle: PropTypes.number
};

function mapStateToProps(state) {
  const { wheel } = state;
  return {
    angle: wheel.angle
  };
}

export default connect(mapStateToProps)(App);
