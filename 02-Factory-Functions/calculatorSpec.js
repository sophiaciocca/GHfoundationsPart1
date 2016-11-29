// In this exercise create a function that can
// create and return a calculator object
// that performs basic mathematic operations.
 
// We'll be using a pattern called the factory pattern where
// our function, `createCalculator` creates an object tailored
// to our needs.  

describe("Create a Calculator", function() {
  var calculator;

  // Below we're calling the `createCalculator` function, it returns
  // a value we are naming calculator. The tests below give us hints about
  // what functionality 'calculator' should have.
  
  // This will happen before each `it` block of tests,
  // which means each set of tests will start with a new calculator variable.
  beforeEach(function() {
    calculator = createCalculator();
  });

  it("initially has a value of 0", function() {
    
    //This line tells us a lot!
    //First, it tells us that `calculator` must be an object that has a method called value
    //Second, this tells us that its property `value` is a function, and should return the 
    //outcome of the calculations
    //hmm.. I guess we'll need to store those outcomes somewhere..
    expect(calculator.value()).toEqual(0);
  });

  it("can add a number", function() {
    calculator.add(2);
    expect(calculator.value()).toEqual(2);
  });

  it("can add two numbers", function() {
    calculator.add(2);
    calculator.add(3);
    expect(calculator.value()).toEqual(5);
  });

  it("can add many numbers", function() {
    calculator.add(2);
    calculator.add(3);
    calculator.add(4);
    expect(calculator.value()).toEqual(9);
  });

  it("can subtract a number", function() {
    calculator.subtract(2);
    expect(calculator.value()).toEqual(-2);
  });

  it("can add and subtract numbers", function() {
    calculator.add(3);
    calculator.subtract(2);
    expect(calculator.value()).toEqual(1);
  });

  it("can clear its value", function() {
    calculator.add(5);
    calculator.add(10);
    calculator.subtract(7);
    calculator.clear();
    expect(calculator.value()).toEqual(0);
  })
});
