var BB = require("technicalindicators").BollingerBands;

const calculate_bb = (data, period, standard_deviation) => {
  const bb_res = BB.calculate({
    values: data,
    period,
    stdDev: standard_deviation,
  });
  return bb_res;
};

module.exports = calculate_bb;
