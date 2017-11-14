import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import $ from 'jquery';
import {
  getHistory
} from '../actionCreators.js';

class History extends React.Component {
  componentDidMount () {
    this.props.getHistory();
  }
  render () {
    const history = this.props.history;
    return (
      <div>
        <h3>History</h3>
        <ul>
          {
            $.map(history, function (i, idx) {
              return <li><h6><b>TxDate</b>: {i.txdate}, <b>Op</b>: {i.op}, <b>Asset</b>: {i.asset}, <b>Metric</b>: {i.metric}, <b>Amount</b>: {i.amount}, <b>Price</b>: {i.price}</h6></li>;
            })
          }
        </ul>
      </div>
    );
  }
}

History.propTypes = {
  history: PropTypes.array,
  getHistory: PropTypes.func
};

const mapStateToProps = state => {
  return {
    history: state.history
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getHistory
    },
    dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(History);
