import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Wheel from './wheel';
import Controls from './Controls';
import Meter from './lib/Meter';
import { updateWheel, tickTime, startTicker, stopTicker } from '../action';
import debug from '../util/debug';

class App extends Component {
  startAnim() {
    debug('startAnim ...', this.props.tickerStarted);
    const { dispatch } = this.props;
    const ticker = () => {
      debug('ticker', this.props.tickerStarted);
      dispatch(tickTime());

      // TODO: There is a race condition where we don't loop.
      if(this.props.tickerStarted) {
        if(this.props.velocity <= 0) {
          dispatch(stopTicker());
        }

        // setTimeout(ticker, 33);
        window.requestAnimationFrame(ticker);
        // TODO: if v <= 0, dispatch(stopTicker());
        // if(this.props.velocity > 0) {
        // }
      }
    };
    if(!this.props.tickerStarted) {
      dispatch(startTicker());
      setTimeout(ticker, 10);
    }
  }
  render() {
    const { dispatch, angle, velocity, tickerStarted } = this.props;
    return(
      <div>
        <Wheel angle={angle} />
        <Controls updateWheel={(ang, vel) => dispatch(updateWheel(ang, vel))}/>
        <Meter value={velocity} />
        <button onClick={() => dispatch(tickTime())}>TICK</button>
        {
          tickerStarted ?
          <button onClick={() => dispatch(stopTicker())}>STOP</button> :
          <button onClick={::this.startAnim}>ANIM</button>
        }
      </div>
    )
  }
}

App.propTypes = {
  angle: PropTypes.number,
  velocity: PropTypes.number,
  tickerStarted: PropTypes.bool
};

function mapStateToProps(state) {
  const { wheel, anim } = state;
  debug('App.mapStateToProps:', wheel);
  return {
    angle: wheel.angle,
    velocity: wheel.velocity,
    tickerStarted: anim.tickerStarted
  };
}

export default connect(mapStateToProps)(App);
