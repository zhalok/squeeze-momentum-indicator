const calculate_atr = require("../../functions/utils/calculate_atr");
const calculate_ema = require("../../functions/utils/calculate_ema");

const calculate_kc = (data, atr_data, period, multiplier) => {
  const ema = calculate_ema(data, period);
  const atr = calculate_atr(atr_data, period);
  console.log(ema);
  console.log("atr data", atr_data);
  const kc_res = [];
  for (let i = 0; i < atr_data.length; i++) {
    const kc_mid = ema[0];
    const kc_high = ema + multiplier * atr[1];
    const kc_low = ema - multiplier * atr[0];
    kc_res.push({ high: kc_high, mid: kc_mid, low: kc_low });
  }
  return kc_res;
  // let high = [];
  // let low = [];
  // let close = [];
  // // console.log(atr_data);
  // for (let i = 0; i < atr_data.length; i++) {
  //   high.push(atr_data[i].high);
  //   low.push(atr_data[i].low);
  //   close.push(atr_data[i].close);
  // }
  // const kc_res = kc({ high, low, close });
  // return kc_res;
};

module.exports = calculate_kc;
