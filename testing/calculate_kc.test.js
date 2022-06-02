const calculate_kc = require("../controllers/utils/calculate_kc");
const test_data = require("./kc_test_data.json");
const input = test_data.input;
const output = test_data.output;
// unit testing function for testing kc calculation
// as you can see it passed successfully
// now lets try using the function you imported
test("lets check", () => {
  expect(calculate_kc(input)).toStrictEqual(output);
});
