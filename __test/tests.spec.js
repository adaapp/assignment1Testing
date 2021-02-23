const {evaluate,calculation} = require('../public/script.js')

/* Things we can test, i.e. module exports from script.js
  screen
 
  calculation
      - push(exp) (adds push to expression)
  append_value 

  valid_leadingzeros 
  
  valid_decimals 

  trim_invalid_numerics

  control_pressed

  digit_pressed
  
  operator_pressed,
  
  evaluate
  }
  */

test('adds 1 + 2 to equal 3', () => {
  expect(evaluate("1+2")).toBe(3);
});

// testing calculation object
test('calculation object exists', () => {
  expect(calculation).toBeDefined;
});

test('calculation object has an expression array', () => {
  expect(calculation._expression).toBeDefined;
});

test('expression array can be manipulated via testing', () => {
  calculation._expression = ['1']
  expect(calculation._expression).toBeDefined;
  expect(calculation._expression).toEqual(['1'])
});

test('calc push should add inputs to an array', ()=> {
  calculation._expression = []
  calculation.push('1')
  expect(calculation._expression).toEqual(['1'])
})
