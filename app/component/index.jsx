import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Wheel from './wheel';
import Controls from './Controls';
import Meter from './lib/Meter';
import { updateWheel, tickTime, startTicker, stopTicker, pressSpin, releaseSpin, completeSpin } from '../action';
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
          dispatch(completeSpin());
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
  // TODO: html,body need to be full size.
  // TODO: Scale wheel to fit screen.
  render() {
    const { dispatch, angle, velocity, spins, tickerStarted, numSpins, score } = this.props;
    return(
      <div
        style={{
          width: '100%',
          height: '100%',
          border: '1px solid green'
        }}
        onMouseUp={() => dispatch(releaseSpin())}
        onTouchEnd={() => dispatch(releaseSpin())}
        >
        <div style={{
            border: '1px solid black',
            padding: '5px',
            margin: '5px',
            float: 'left'
          }}>
          {numSpins}
        </div>
        <div style={{
            border: '1px solid black',
            padding: '5px',
            margin: '5px',
            float: 'right'
          }}>
          {score}
        </div>
        <div style={{
            padding: '5%',
            margin: '0 auto',
            width: '200px'
          }}>
          <Wheel angle={angle} />
        </div>

        <div
          style={{
            padding: '5%',
            width: '0',
            margin: '0 auto'
          }}
          >
          <button
            onMouseDown={::this.startSpin}
            onTouchStart={::this.startSpin}
            style={{
              width: '100px',
              transform: 'translateX(-50%)'
            }}
            >SPIN</button>
        </div>
        <div
          style={{
            height: '200px',
            width: '100%',
            border: '1px solid blue',
            overflow: 'scroll'
          }}
          >
          {
            spins.map((spin, index) => {
              return <div key={index}>{Math.round(spin.angle)}: {spin.prize.label}</div>;
            })
          }
        </div>
      </div>
    )
  }
}
// <Meter value={velocity} />
// <div>{angle}</div>
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
  spins: PropTypes.array,
  tickerStarted: PropTypes.bool,
  score: PropTypes.number,
  numSpins: PropTypes.number
};

function mapStateToProps(state) {
  const { wheel, anim, player } = state;
  // debug('App.mapStateToProps:', wheel);
  return {
    angle: wheel.angle,
    velocity: wheel.velocity,
    spins: wheel.spins,
    tickerStarted: anim.tickerStarted,
    score: player.score,
    numSpins: player.numSpins
  };
}

export default connect(mapStateToProps)(App);
