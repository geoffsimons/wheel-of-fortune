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
  if(action.type === 'TIME_TICK') {
    return Object.assign({}, state, {
      lastFrameTime: Date.now()
    });
  }
  return state;
}
