var BB = require("technicalindicators").BollingerBands;

const calculate_bb = (input) => {
  const bb_res = BB.calculate(input);
  return bb_res;
};
// const input = {
//   values: [
//     127.75, 129.02, 132.75, 145.4, 148.98, 137.52, 147.38, 139.05, 137.23,
//     149.3, 162.45, 178.95, 200.35, 221.9, 243.23, 243.52, 286.42, 280.27,
//   ],
//   period: 10,

//   stdDev: 2,
// };

// console.log(calculate_bb(input));
module.exports = calculate_bb;
// yes it also passed
// so i am not understanding what problem is occuring to your testing
// I request you to test again with the data set here
// the data set was directly copied from the github repo
