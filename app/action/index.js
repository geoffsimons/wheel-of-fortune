export function startTicker() {
  return { type: 'START_TICKER' };
}

export function pressSpin() {
  return { type: 'PRESS_SPIN' };
}

export function releaseSpin() {
  return { type: 'RELEASE_SPIN' };
}

export function tickTime() {
  return { type: 'TIME_TICK' };
}

export function updateWheel(angle, velocity) {
  return {
    type: 'UPDATE_WHEEL',
    angle,
    velocity
  };
}

// TODO Deal with END_OF_SPIN
