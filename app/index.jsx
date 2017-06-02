import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import { browserHistory } from 'react-router';
// import { syncHistoryWithStore } from 'react-router-redux';

import AppContainer from './container/AppContainer';
// import reducer from './reducer';
import configureStore from './config-store';

// TODO Apply thunk middleware?
// const store = createStore(reducer);
const store = configureStore();
// const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>
  // <div>Test</div>
  ,document.getElementById('root')
);
