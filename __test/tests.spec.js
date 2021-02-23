const {evaluate} = require('../public/script.js')

// Things we can test, i.e. module exports from script.js
// module.exports = {
//   screen,
//   calculation,
//   append_value,
//   valid_leadingzeros,
//   valid_decimals,
//   trim_invalid_numerics,
//   control_pressed,
//   digit_pressed,
//   operator_pressed,
//   evaluate
//   }

test('adds 1 + 2 to equal 3', () => {
  expect(evaluate("1+2")).toBe(3);
});

