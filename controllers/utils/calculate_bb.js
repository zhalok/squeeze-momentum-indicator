var BB = require("technicalindicators").BollingerBands;

const calculate_bb = (input) => {
  const bb_res = BB.calculate(input);
  return bb_res;
};

module.exports = calculate_bb;
