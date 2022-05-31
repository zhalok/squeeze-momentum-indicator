const ATR = require("technicalindicators").ATR;
const calculate_atr = (atr_data, period) => {
  let high = [];
  let low = [];
  let close = [];
  console.log(atr_data);
  for (let i = 0; i < atr_data.length; i++) {
    high.push(atr_data[i].high);
    low.push(atr_data[i].low);
    close.push(atr_data[i].close);
  }

  const atr = ATR.calculate({ high, low, close, period });
  return atr;
};

module.exports = calculate_atr;
