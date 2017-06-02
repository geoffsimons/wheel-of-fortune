import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Wheel from './wheel';
import Controls from './Controls';
import Meter from './lib/Meter';
import { updateWheel, tickTime, startTicker, stopTicker, pressSpin, releaseSpin } from '../action';
import debug from '../util/debug';

class App extends Component {
  startAnim() {
    debug('startAnim ...', this.props.tickerStarted);
    const { dispatch } = this.props;
    const ticker = () => {
      debug('ticker', this.props.tickerStarted);
      dispatch(tickTime());

      if(this.props.tickerStarted) {
        if(this.props.velocity <= 0) {
          dispatch(stopTicker());
        }

        // setTimeout(ticker, 33);
        window.requestAnimationFrame(ticker);
      }
    };
    if(!this.props.tickerStarted) {
      dispatch(startTicker());
      // TODO: There is a race condition where we don't loop.
      setTimeout(ticker, 10); // This is kind of a hack.
    }
  }
  startSpin() {
    debug('startSpin');
    const { dispatch } = this.props;
    dispatch(pressSpin());
    ::this.startAnim();
  }
  render() {
    const { dispatch, angle, velocity, tickerStarted } = this.props;
    return(
      <div>
        <Wheel angle={angle} />
        <Meter value={velocity} />
        <button
          onMouseDown={::this.startSpin}
          onTouchStart={::this.startSpin}
          onMouseUp={() => dispatch(releaseSpin())}
          onTouchEnd={() => dispatch(releaseSpin())}
          >SPIN</button>
      </div>
    )
  }
}
// <Controls updateWheel={(ang, vel) => dispatch(updateWheel(ang, vel))}/>
//   <button onClick={() => dispatch(tickTime())}>TICK</button>
//   {
//     tickerStarted ?
//     <button onClick={() => dispatch(stopTicker())}>STOP</button> :
//     <button onClick={::this.startAnim}>ANIM</button>
//   }

App.propTypes = {
  angle: PropTypes.number,
  velocity: PropTypes.number,
  tickerStarted: PropTypes.bool
};

function mapStateToProps(state) {
  const { wheel, anim } = state;
  // debug('App.mapStateToProps:', wheel);
  return {
    angle: wheel.angle,
    velocity: wheel.velocity,
    tickerStarted: anim.tickerStarted
  };
}

export default connect(mapStateToProps)(App);
