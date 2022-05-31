const calculate_bb = require("../functions/utils/calculate_bb");
const calculate_kc = require("../functions/utils/calculate_kc");

const calcualate_squeeze_momentum = (req, res, next) => {
  const { data, period, standard_deviation, atr_data, multiplier } = req.body;

  const bb_res = calculate_bb(data, period, standard_deviation);
  const kc_res = calculate_kc(data, atr_data, period, multiplier);
  const squeeze_data = [];
  // for (let i = 0; i < bb_res.length; i++) {}

  res.json({ bb_res, kc_res });
};

module.exports = { calcualate_squeeze_momentum };
