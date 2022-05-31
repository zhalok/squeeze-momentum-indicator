const EMA = require("technicalindicators").EMA;
const calculate_ema = (data, period) => {
  const ema = EMA.calculate({ period, values: data });
  return ema;
};

module.exports = calculate_ema;
