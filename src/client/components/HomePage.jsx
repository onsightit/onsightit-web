import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Invites from './Invites.jsx';
import Prices from './Prices.jsx';
import Balances from './Balances.jsx';
import Trade from './Trade.jsx';
import History from './History.jsx';
import {
  sendInvite,
  sendLogout
} from '../actionCreators.js';

class HomePage extends React.Component {
  constructor (props, context) {
    super(props, context);
    this.context.router = context.router;
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout (event) {
    event.preventDefault();
    this.props.sendLogout(this.context.router);
  }
  render () {
    var username = window.sessionStorage.getItem('username');
    return (
      <div className='app'>
        <h1>Welcome to the Virtual Currency Exchange, {username}</h1>
        <button className='btn btn-primary logout-btn' onClick={this.handleLogout}>Logout</button>
        <div className='details'>
          <Invites />
        </div>
        <div className='details'>
          <Prices />
        </div>
        <div className='details'>
          <Balances />
        </div>
        <div className='details'>
          <Trade />
        </div>
        <div className='details'>
          <History />
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  sendLogout: PropTypes.func
};

HomePage.contextTypes = {
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
      sendInvite,
      sendLogout
    },
    dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
