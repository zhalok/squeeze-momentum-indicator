const calculate_kc = require("../controllers/utils/calculate_kc");
const test_data = require("./kc_test_data.json");
const input = test_data.input;
const output = test_data.output;

test("lets check", () => {
  expect(calculate_kc(input)).toStrictEqual(output);
});
