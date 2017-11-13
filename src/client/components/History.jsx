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
    console.error(JSON.stringify(history));
    return (
      <div>
        <h3>History</h3>
        {
          $.map(history, function (i, idx) {
            return <h6><b>{idx + 1}</b> TxDate: {i.txdate}, Op: {i.op}, Asset: {i.asset}, Metric: {i.metric}, Amount: {i.amount}, Price: {i.price}</h6>;
          })
        }
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
