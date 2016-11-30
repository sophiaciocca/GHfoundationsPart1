// See http://en.wikipedia.org/wiki/Reverse_Polish_notation

describe('Calculator using reverse polish notation', function() {
  var rpnCalculator;

  beforeEach(function() {
    // How is the RPNCalculator function invoked? Is this a factory function or a ...?
    rpnCalculator = new RPNCalculator();
  });

  it('adds two numbers', function() {
    // Infix: 2 + 3
    // Postfix: 2 3 +
    rpnCalculator.push(2);
    rpnCalculator.push(3);
    rpnCalculator.plus();
    expect(rpnCalculator.value()).toEqual(5);
  });

  it('adds three numbers', function() {
    // Infix: 2+3+4
    // Postfix: 2 3 4 + +
    rpnCalculator.push(2);
    rpnCalculator.push(3);
    rpnCalculator.push(4);
    rpnCalculator.plus();
    expect(rpnCalculator.value()).toEqual(7);
    rpnCalculator.plus();
    expect(rpnCalculator.value()).toEqual(9);
  });

  it('subtracts two numbers', function() {
    // Infix: 2-3
    // Postfix: 2 3 -
    rpnCalculator.push(2);
    rpnCalculator.push(3);
    rpnCalculator.minus();
    expect(rpnCalculator.value()).toEqual(-1)
  })

  it('adds and subtracts', function() {
    // Infix: 2 + 3 - 4
    // Postfix: 2 3 4 - +
    rpnCalculator.push(2);
    rpnCalculator.push(3);
    rpnCalculator.push(4);
    rpnCalculator.minus();
    expect(rpnCalculator.value()).toEqual(-1);
    rpnCalculator.plus();
    expect(rpnCalculator.value()).toEqual(1);
  });

  it('multiplies and divides', function() {
    // Infix: 2 * 3 / 4
    // Postfix: 2 3 4 / *
    rpnCalculator.push(2);
    rpnCalculator.push(3);
    rpnCalculator.push(4);
    rpnCalculator.divide();
    expect(rpnCalculator.value()).toEqual(0.75);
    rpnCalculator.times();
    expect(rpnCalculator.value()).toEqual(1.5);
  });

  /* The following test spec tests if a custom exception is thrown.  This will help a user know
  what is wrong with their calculator when their calculator is empty.  There are a few
  ways of throwing an exception, review the `throw statement` - https://mzl.la/1CkHpEM and create
  an exception.
  */


  it("fails informatively when there's not enough values stashed away", function() {
    expect(function() {
      rpnCalculator.plus();
    }).toThrow('rpnCalculator is empty');

    expect(function() {
      rpnCalculator.minus();
    }).toThrow('rpnCalculator is empty');

    expect(function() {
      rpnCalculator.times();
    }).toThrow('rpnCalculator is empty');

    expect(function() {
      rpnCalculator.divide();
    }).toThrow('rpnCalculator is empty');
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

  it('the rpnCalculator object should be an instance of the RPNCalculator Constructor', function() {
    expect(rpnCalculator instanceof RPNCalculator).toEqual(true);
  });

});
