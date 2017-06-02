const MAX_VELOCITY = 720; // degrees per second

function clamp(x, min, max) {
  if(x < min) return min;
  if(x > max) return max;
  return x;
}

export default function wheel(state = {
  angle: 0,
  velocity: 0,
  // prizes: [] // Should we have a prizes array in the state?
  pressTime: null,
}, action) {
  if(action.type === 'SPIN_PRESS') {
    return Object.assign({}, state, {
      pressTime: Date.now()
    });
  }
  if(action.type === 'SPIN_RELEASE') {
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
  // if(action.type === 'TIME_TICK') {
  //   const dt = Date.now() - state.lastFrameTime;
  //   // dv is change in velocity, as measured in degress per second
  //   const dv = state.pressTime ? 20 : -10; // Power from spin, or friction
  //   const velocity = state.velocity + (dv * dt / 1000);
  //
  //   return Object.assign({}, state, {
  //     angle: state.angle + (state.velocity * dt), // dAngle
  //     velocity: clamp(velocity, 0, MAX_VELOCITY)
  //   });
  // }
  return state;
}
