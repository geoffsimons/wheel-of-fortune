const debug = console.log;

export default function wheel(state = {
  angle: 0,
  velocity: 0,
  // prizes: [] // Should we have a prizes array in the state?
  spins: [],
  pressTime: null,
}, action) {
  if(action.type === 'PRESS_SPIN') {
    return Object.assign({}, state, {
      pressTime: Date.now()
    });
  }
  if(action.type === 'RELEASE_SPIN') {
    return Object.assign({}, state, {
      pressTime: null
    });
  }
  if(action.type === 'COMPLETE_SPIN') {
    debug('COMPLETE_SPIN', action.spin);
    return Object.assign({}, state, {
      spins: [action.spin, ...state.spins]
    });
  }
  if(action.type === 'UPDATE_WHEEL') {
    return Object.assign({}, state, {
      angle: action.angle,
      velocity: action.velocity
    });
  }
  return state;
}
