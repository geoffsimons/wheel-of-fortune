export default function wheel(state = {
  angle: 0,
  velocity: 0,
  // prizes: [] // Should we have a prizes array in the state?
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
  if(action.type === 'UPDATE_WHEEL') {
    return Object.assign({}, state, {
      angle: action.angle,
      velocity: action.velocity
    });
  }
  return state;
}
