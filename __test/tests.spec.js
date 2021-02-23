const {evaluate,calculation,append_value} = require('../public/script.js')

/* Things we can test, i.e. module exports from script.js
  screen
 
  calculation
      - push(exp) (adds push to expression)
      - pop() (removes last value from the array)
      - last() (returns the last value from the array)
      - clear() (clears the array)
      - debug() (console logs the array)
      - expression() returns array with apprend value
  append_value 
      "This function expects four arguments (the last ‘spacer' is optional and defaults to false of not provided). The result is based on the original value being updated so that it includes the appended value prefixed with the glue value; if the spacer is true it also includes a “ “ character. If the original value is blank the returned string only contains the appended value; example tests are shown below."
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

test('calc clear should remove all the objects in the array', ()=> {
  calculation._expression = ['3','/','5','+','1']
  calculation.clear()
  expect(calculation._expression).toEqual([])
})

test('debug function should console log the exp array contents', ()=> {
  // this may not work
  calculation._expression = ['7']
  calculation.debug()
  expect(console.log).toHaveBeenCalledWith(['7'])
})

test('calc expression function returns exp as a nicely spaced object ', ()=> {
  calculation._expression = ['7','*','5','+','4']
  expect(calculation.expression()).toEqual('7 * 5 + 4')
})


// append_value function works
test('append_value function exists',()=>{
  expect(append_value()).toBeDefined;
})

test('append_value test 1 works',()=>{
  expect(append_value('20', '30', '+', false)).toBe("20+30");
})

test('append_value test 2 works',()=>{
  expect(append_value('20', '30', '+', true)).toBe("20 + 30");
})

test('append_value test 3 works',()=>{
  expect(append_value('20', '30', '+')).toBe("20+30");
})

test('append_value test 4 works',()=>{
  expect(append_value('', '30', '+', true)).toBe("30");
})

test('append_value test 5 works',()=>{
  expect(append_value('hello','developer','there')).toBe("hellotheredeveloper")
})
