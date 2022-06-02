const calculate_bb = require("./utils/calculate_bb");
const calculate_kc = require("./utils/calculate_kc");
const { SMA, Highest, Lowest } = require("technicalindicators");
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
  // const bb_res = calculate_bb(bb_input);
  // const kc_res = calculate_kc(kc_input);
  // const squeeze_points = [];
  // for (let i = 0; i < bb_res.length; i++) {
  //   if (bb_res.high < kc_res.high && bb_res.low > kc_res.low)
  //     squeeze_points.push(1);
  //   else squeeze_points.push(0);
  // }

  // squeeze_points.push(2);
  // const squeezed_segments = [];

  // for (let i = 0; i < squeeze_points.length; i++) {
  //   if (squeeze_points[i] == 1) {
  //     for (let j = i + 1; j < squeeze_points.length; j++) {
  //       if (squeeze_points[j] != 1) {
  //         squeezed_segments.push([i, j - 1]);
  //         i = j - 1;
  //         break;
  //       }
  //     }
  //   }
  // }

  const inputBB = {
    values: close,

    period: 20,

    stdDev: 2,
  };

  const bb_res = calculate_bb(inputBB);

  const keltnerchannelsInput = {
    useSMA: true,

    maPeriod: 20,

    atrPeriod: 10,

    multiplier: 1.5,

    high: high,

    low: low,

    close: close,
  };

  const kc_res = calculate_kc(keltnerchannelsInput);

  let inputHighest = {
    values: high,

    period: 20,
  };

  let inputLowest = {
    values: low,

    period: 20,
  };

  const currentBolinger = bb_res[bb_res.length - 1];

  const currentKeltner = kc_res[kc_res.length - 1];

  const sqzOn =
    currentBolinger.lower > currentKeltner.lower &&
    currentBolinger.upper < currentKeltner.upper;

  const sqzOff =
    currentBolinger.lower < currentKeltner.lower &&
    currentBolinger.upper > currentKeltner.upper;

  const highest = Highest.calculate(inputHighest);

  const lowest = Lowest.calculate(inputLowest);

  const avg = (highest + lowest) / 2;

  const currentHigh = highest[highest.length - 1];

  const currentLow = lowest[lowest.length - 1];

  const currentClose = close[close.length - 1];

  const sma = SMA.calculate({ period: 20, values: close });
  // console.log(sma);

  const currentSMA = sma[sma.length - 1];

  const values =
    currentClose - ((currentHigh + currentLow) / 2 + currentSMA) / 2;

  res.json({ sqzOn, sqzOff, values });

  // res.json({ squeezed_segments });
};

module.exports = { calcualate_squeeze_momentum };
