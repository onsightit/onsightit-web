const { S, F, P, seq } = require('../utils/sanctuaryEnv.js');

const bitfinexTracker = require('./exchangeTrackers/BTC/bitfinexTracker.js');
const bittrexTracker = require('./exchangeTrackers/ALT/bittrexTracker.js');
const gdaxTracker = require('./exchangeTrackers/BTC/gdaxTracker.js');
const krakenTracker = require('./exchangeTrackers/BTC/krakenTracker.js');
const hitbtcTracker = require('./exchangeTrackers/ALT/hitbtcTracker.js');
const poloniexTracker = require('./exchangeTrackers/ALT/poloniexTracker.js');

// exchangeTrackers :: [(String, String) -> Future Error PriceVolume]
let exchangeTrackersBtc = [
  bitfinexTracker.getPriceVolume,
  gdaxTracker.getPriceVolume,
  krakenTracker.getPriceVolume
];

let exchangeTrackersAlt = [
  bittrexTracker.getPriceVolume,
  hitbtcTracker.getPriceVolume,
  poloniexTracker.getPriceVolume
];

// data PriceVolume = { price :: Number, volume :: Number }

// pvProduct :: PriceVolume -> Number
const pvProduct = exchangeA => exchangeA.price * exchangeA.volume;

// reduceVolumeAverage :: PriceVolume -> PriceVolume -> PriceVolume
const pvAverage = S.curry2((exchangeA, exchangeB) => {
  const numerator = pvProduct(exchangeA) + pvProduct(exchangeB);
  const denominator = exchangeA.volume + exchangeB.volume;
  return { price: numerator / denominator, volume: denominator };
});

// priceVolumeOfPair :: [(String, String) -> Future Error PriceVolume] -> String -> String -> Future Error PriceVolume
const priceVolumeOfPair = S.curry3((trackers, asset, metric) =>
  seq(S.reduce(
    S.lift2(pvAverage),
    P(F.of({ price: 0, volume: 0 })),
    S.map(tracker => P(tracker(asset, metric)), trackers)
  )));

module.exports = {
  exchangeTrackersBtc,
  exchangeTrackersAlt,
  priceVolumeOfPair,
  pvAverage
};
