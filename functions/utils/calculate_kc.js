const calculate_atr = require("../../functions/utils/calculate_atr");
const calculate_ema = require("../../functions/utils/calculate_ema");
const kc = require("technicalindicators").keltnerchannels;
const calculate_kc = (data, atr_data, period, multiplier) => {
  // const ema = calculate_ema(data, period);
  // const atr = calculate_atr(atr_data, period);
  // console.log(atr);
  // return [];
  let high = [];
  let low = [];
  let close = [];
  // console.log(atr_data);
  for (let i = 0; i < atr_data.length; i++) {
    high.push(atr_data[i].high);
    low.push(atr_data[i].low);
    close.push(atr_data[i].close);
  }
  const kc_res = kc({ high, low, close });
  return kc_res;
};

module.exports = calculate_kc;
