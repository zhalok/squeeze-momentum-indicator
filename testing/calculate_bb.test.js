const calculate_bb = require("../controllers/utils/calculate_bb");
const test_data = require("./bb_test_data.json");
const input = test_data.input;
const output = test_data.output;

test("Let's check bb calculation", () => {
  expect(calculate_bb(input)).toStrictEqual(output);
});
