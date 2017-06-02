import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as Actions from '../action';
import App from '../component';
import debug from '../util/debug';

class AppContainer extends Component {
  // startAnim() {
  //   let ticker = () => {
  //     const { tickerStarted } = this.props;
  //
  //   }
  //   ticker();
  // }



  render() {
    return <App />;
  }
}

AppContainer.propTypes = {
  dispatch: PropTypes.func,

}

function mapStateToProps(state) {
  debug('mapStateToProps:', state);
  return {};
}

export default connect(mapStateToProps)(AppContainer);
