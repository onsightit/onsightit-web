const { S } = require('../../../utils/sanctuaryEnv.js');
const { getPriceVolume } = require('../exchangeTracker.js');
const { USD, BTC } = require('../../../utils/symbolConstants.js');

const API_URL = 'https://api.kraken.com';

const tickerMap = {
  [BTC]: {
    [USD]: 'XXBTZUSD'
  }
};

const tradingPairs = [{ asset: BTC, metric: USD }];

const apiEndpoint = S.curry2((asset, metric) => API_URL + '/0/public/Ticker?pair=' + tickerMap[asset][metric]);

const transformResponse = (asset, metric) => data => {
  const ticker = typeof data.result === 'object' ? data.result[tickerMap[asset][metric]] : null;
  const price = ticker ? ticker.c[0] : '0.0';
  const volume = ticker ? ticker.v[1] : '0.0';
  return { price, volume };
};

module.exports = {
  getPriceVolume: getPriceVolume(tradingPairs, apiEndpoint, transformResponse)
};
