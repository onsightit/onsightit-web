import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Prices from './Prices.jsx';
import {
  sendLogout
} from '../actionCreators.js';

class Landing extends React.Component {
  constructor (props, context) {
    super(props, context);
    this.context.router = context.router;
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleLogin (event) {
    event.preventDefault();
    this.props.sendLogout(this.context.router);
  }
  render () {
    return (
      <div className='app'>
        <h1>OnsightIT: Virtual Currency Exchange Prices</h1>
        <button className='btn btn-primary login-btn' onClick={this.handleLogin}>Login</button>
        <div className='details'>
          <Prices />
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  sendLogout: PropTypes.func
};

Landing.contextTypes = {
  router: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      sendLogout
    },
    dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
