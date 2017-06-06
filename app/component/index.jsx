import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Wheel from './Wheel';
import Controls from './Controls';
import Meter from './lib/Meter';
import SpinButton from './SpinButton';
import StartButton from './StartButton';
import { updateWheel, tickTime, startTicker, stopTicker, pressSpin, releaseSpin, completeSpin, startGame } from '../action';
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
  startClicked(evt) {
    evt.preventDefault();
    this.props.dispatch(startGame());
  }
  // TODO: html,body need to be full size.
  // TODO: Scale wheel to fit screen.
  // TODO: React docs say that creating anon handlers can be a performance hit.
  render() {
    const { dispatch, angle, velocity, spins, tickerStarted, numSpins, score } = this.props;
    return(
      <div className="event-skin"
        onMouseUp={() => dispatch(releaseSpin())}
        onTouchEnd={() => dispatch(releaseSpin())}
        >
        <header>
          <div className="title">
            Wheel of Fortune
          </div>
        </header>
        <main>
          <div className="app">
            <div className="num-spins">
              {numSpins}
              <label>SPINS</label>
            </div>
            <div className="score">
              {score}
              <label>SCORE</label>
            </div>
            <Wheel angle={angle} />
            <div className="btn-container">
            {
              numSpins <= 0 && velocity <= 0 ?
              <button className="btn pressable"
                onMouseUp={::this.startClicked}
                onTouchEnd={::this.startClicked}
                >
                START
              </button> :
              <SpinButton
                startSpin={::this.startSpin}
                isSpinning={velocity > 0 ? true : false}
                velocity={velocity}
                />
            }
            </div>
          </div>
        </main>
        <footer>Copyright &copy; 2017 Geoff Simons</footer>
      </div>
    )
  }
}
// onClick={::this.startClicked}
// <StartButton handleClick={::this.startClicked} /> :
// <div className="spin-log">
//   {
//     spins.map((spin, index) => {
//       return <div key={index}>{Math.round(spin.angle)}: {spin.prize.label}</div>;
//     })
//   }
// </div>
// <button
//   onMouseDown={::this.startSpin}
//   onTouchStart={::this.startSpin}
//   disabled={velocity > 0 ? true : false}
//   style={{
//     width: '100px',
//     transform: 'translateX(-50%)'
//   }}
//   >SPIN</button>
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
