const {evaluate,calculation} = require('../public/script.js')

/* Things we can test, i.e. module exports from script.js
  screen
 
  calculation
      - push(exp) (adds push to expression)
      - pop() (removes last value from the array)
      - last (returns the last value from the array)
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

test('calc pop should remove input from array', ()=> {
  calculation._expression = ['5','*','8']
  calculation.pop()
  expect(calculation._expression).toEqual(['5','*'])
})

test('calc last returns the last item in the array', ()=> {
  calculation._expression = ['2','+','8','*','5']
  expect(calc.last()).to.equal('5')
  expect(calculation._expression).toEqual(['2','+','8','*'])
})


