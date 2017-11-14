const fmysql = require('../../utils/fmysql.js');
const { S } = require('../../utils/sanctuaryEnv.js');
const getHistory = user => {
  const safeUsername = fmysql.escape(user);
  const query = `SELECT txdate, op, asset, metric, amount, price FROM history WHERE username = ${safeUsername} ORDER BY txdate DESC;`;
  return fmysql.statelessQuery(query)
    .map(S.compose(JSON.parse, JSON.stringify));
};

const setHistory = (user, txdate, op, asset, metric, amount, price) => {
  const safeUsername = fmysql.escape(user);
  const safeTxdate = fmysql.escape(txdate);
  const safeOp = fmysql.escape(op);
  const safeAsset = fmysql.escape(asset);
  const safeMetric = fmysql.escape(metric);
  const setQuery = `INSERT INTO history (username, txdate, op, asset, metric, amount, price) VALUES (${safeUsername}, ${safeTxdate}, ${safeOp}, ${safeAsset}, ${safeMetric}, ${amount}, ${price});`;
  const query = `START TRANSACTION; ${setQuery} COMMIT;`;
  return fmysql.statelessQuery(query);
};

module.exports = {
  getHistory,
  setHistory
};
