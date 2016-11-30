// See http://en.wikipedia.org/wiki/Reverse_Polish_notation

describe('Calculator using reverse polish notation', function() {
  var rpnCalculatorInstance;

  beforeEach(function() {
    // How is the RPNCalculator function invoked? Is this a factory function or a ...?
    rpnCalculatorInstance = new RPNCalculator();
  });

  it('adds two numbers', function() {
    // Infix: 2 + 3
    // Postfix: 2 3 +
    rpnCalculatorInstance.push(2);
    rpnCalculatorInstance.push(3);
    rpnCalculatorInstance.plus();
    expect(rpnCalculatorInstance.value()).toEqual(5);
  });

  it('adds three numbers', function() {
    // Infix: 2+3+4
    // Postfix: 2 3 4 + +
    rpnCalculatorInstance.push(2);
    rpnCalculatorInstance.push(3);
    rpnCalculatorInstance.push(4);
    rpnCalculatorInstance.plus();
    expect(rpnCalculatorInstance.value()).toEqual(7);
    rpnCalculatorInstance.plus();
    expect(rpnCalculatorInstance.value()).toEqual(9);
  });

  it('subtracts two numbers', function() {
    // Infix: 2-3
    // Postfix: 2 3 -
    rpnCalculatorInstance.push(2);
    rpnCalculatorInstance.push(3);
    rpnCalculatorInstance.minus();
    expect(rpnCalculatorInstance.value()).toEqual(-1)
  })

  it('adds and subtracts', function() {
    // Infix: 2 + 3 - 4
    // Postfix: 2 3 4 - +
    rpnCalculatorInstance.push(2);
    rpnCalculatorInstance.push(3);
    rpnCalculatorInstance.push(4);
    rpnCalculatorInstance.minus();
    expect(rpnCalculatorInstance.value()).toEqual(-1);
    rpnCalculatorInstance.plus();
    expect(rpnCalculatorInstance.value()).toEqual(1);
  });

  it('multiplies and divides', function() {
    // Infix: 2 * 3 / 4
    // Postfix: 2 3 4 / *
    rpnCalculatorInstance.push(2);
    rpnCalculatorInstance.push(3);
    rpnCalculatorInstance.push(4);
    rpnCalculatorInstance.divide();
    expect(rpnCalculatorInstance.value()).toEqual(0.75);
    rpnCalculatorInstance.times();
    expect(rpnCalculatorInstance.value()).toEqual(1.5);
  });

  /* The following test spec tests if a custom exception is thrown.  This will help a user know
  what is wrong with their calculator when their calculator is empty.  There are a few
  ways of throwing an exception, review the `throw statement` - https://mzl.la/1CkHpEM and create
  an exception.
  */


  it("fails informatively when there's not enough values stashed away", function() {
    expect(function() {
      rpnCalculatorInstance.plus();
    }).toThrow('rpnCalculatorInstance is empty');

    expect(function() {
      rpnCalculatorInstance.minus();
    }).toThrow('rpnCalculatorInstance is empty');

    expect(function() {
      rpnCalculatorInstance.times();
    }).toThrow('rpnCalculatorInstance is empty');

    expect(function() {
      rpnCalculatorInstance.divide();
    }).toThrow('rpnCalculatorInstance is empty');
  });

  it('All methods should be on the RPNCalculator.prototype', function() {
    expect(typeof RPNCalculator.prototype.plus).toEqual('function');
    expect(typeof RPNCalculator.prototype.minus).toEqual('function');
    expect(typeof RPNCalculator.prototype.divide).toEqual('function');
    expect(typeof RPNCalculator.prototype.value).toEqual('function');
  });

  /* This unit test uses the `instanceof` operator. `instanceof` checks if an object has
  prototype property (.prototype) of a constructor.  Here is a link to the documentation
  for `instanceof`: https://mzl.la/1dqYtqW */

  it('the rpnCalculatorInstance object should be an instance of the RPNCalculator Constructor', function() {
    expect(rpnCalculatorInstance instanceof RPNCalculator).toEqual(true);
  });

});
