import debug from '../util/debug';

const MAX_VELOCITY = 2000; // degrees per second
const ACCELERATION = 100;  // % per second per second
const FRICTION     = -50; // % per second per second

function clamp(x, min, max) {
  if(x < min) return min;
  if(x > max) return max;
  return x;
}

export function startTicker() {
  return { type: 'START_TICKER' };
}

export function stopTicker() {
  return { type: 'STOP_TICKER' };
}

export function pressSpin() {
  return { type: 'PRESS_SPIN' };
}

export function releaseSpin() {
  return { type: 'RELEASE_SPIN' };
}

export function tickTime() {
  return (dispatch, getState) => {
    const { wheel, anim } = getState();
    debug('TICK wheel:', wheel);
    debug('TICK anim:', anim);
    const t = Date.now();
    if(anim.lastFrameTime) {
      const dt = (t - anim.lastFrameTime) / 1000;
      // TODO: calculate wheel delta
      const v = wheel.velocity * MAX_VELOCITY / 100;
      const da = v * dt;
      debug('v:', v);
      debug('dt:', dt);
      const dv = wheel.pressTime ?
                 ACCELERATION * dt :
                 FRICTION * dt;
      debug('dv:', dv);
      dispatch(updateWheel(
        wheel.angle + da,
        clamp(wheel.velocity + dv, 0, 100)
      ));
    }
    dispatch({ type: 'TIME_TICK', time: t });
  };
}

export function updateWheel(angle, velocity) {
  // TODO: assert 0 < velocity < 100
  return {
    type: 'UPDATE_WHEEL',
    angle: angle % 360,
    velocity
  };
}

// TODO Deal with END_OF_SPIN
