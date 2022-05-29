const kc = require("keltnerchannel").kc;
const calculate_kc = (atr_data, period, multiplier) => {
  const _kc_res = kc(atr_data, period, multiplier, true);
  let kc_res = [];
  //   console.log(_kc_res);
  for (let i = 0; i < _kc_res.upper.length; i++) {
    kc_res.push({
      upper: _kc_res.upper[i],
      lower: _kc_res.lower[i],
      mid: _kc_res.mid[i],
    });
  }
  return kc_res;
};

module.exports = calculate_kc;
