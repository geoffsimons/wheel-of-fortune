import debug from '../util/debug';

export default function anim(state = {
  tickerStarted: false,
  lastFrameTime: null
}, action) {
  if(action.type === 'START_TICKER') {
    return Object.assign({}, state, {
      tickerStarted: true,
      lastFrameTime: Date.now()
    });
  }
  if(action.type === 'STOP_TICKER') {
    return Object.assign({}, state, {
      tickerStarted: false
    });
  }
  if(action.type === 'TIME_TICK') {
    debug('TIME_TICK');
    return Object.assign({}, state, {
      lastFrameTime: action.time || Date.now()
    });
  }
  return state;
}
