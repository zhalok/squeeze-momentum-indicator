const calculate_bb = require("./utils/calculate_bb");
const calculate_kc = require("./utils/calculate_kc");

const calcualate_squeeze_momentum = (req, res, next) => {
  const {
    data,
    standard_deviation,
    period,
    useSMA,
    maPeriod,
    atrPeriod,
    multiplier,
    high,
    low,
    close,
  } = req.body;
  const bb_input = {
    values: data,
    stdDev: standard_deviation,
    period,
  };
  const kc_input = {
    useSMA,
    maPeriod,
    atrPeriod,
    high,
    low,
    close,
    multiplier,
  };
  const bb_res = calculate_bb(bb_input);
  const kc_res = calculate_kc(kc_input);
  const squeeze_points = [];
  for (let i = 0; i < bb_res.length; i++) {
    if (bb_res.high < kc_res.high && bb_res.low > kc_res.low)
      squeeze_points.push(1);
    else squeeze_points.push(0);
  }

  squeeze_points.push(2);
  const squeezed_segments = [];

  for (let i = 0; i < squeeze_points.length; i++) {
    if (squeeze_points[i] == 1) {
      for (let j = i + 1; j < squeeze_points.length; j++) {
        if (squeeze_points[j] != 1) {
          squeezed_segments.push([i, j - 1]);
          i = j - 1;
          break;
        }
      }
    }
  }

  res.json({ squeezed_segments });
};

module.exports = { calcualate_squeeze_momentum };
