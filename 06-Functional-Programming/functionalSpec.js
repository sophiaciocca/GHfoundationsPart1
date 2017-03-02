
// In this spec, you will use Functional Programming concepts to create functions
// that iterate over collections and perform some function. 

// map takes an array, performs a function on each element
// and returns an array that contains each transformed element
describe("the function map", function() {

  beforeEach(function() {
    //Here we are making sure that you don't use the built in Array#map method
    spyOn(Array.prototype, 'map').and.callThrough();
  });

  it('first, create a function that takes an element and returns double of it', function () {
    expect(doubler(15)).toEqual(30);
  });

  // Now let's use the `doubler` function and apply it over an
  // entire array using a map function that we will create
  
  // Observe here how we're not actually iterating here, we're writing a function that handles
  // the looping so we can focus on higher-level code semantics
  it("takes our doubling function and applies it to an array", function() {
    expect(map([1, 2, 3], doubler)).toEqual([2, 4, 6]);
  });

  it("takes a tripling function", function() {
    // Here we create an anonymous function that triples and pass it into map
    expect(map([1, 2, 3], function(elem) {
      return elem * 3;
    })).toEqual([3, 6, 9]);
  });

  it('should not use Array.prototype.map', function () {
    map([1, 2, 3], doubler);
    expect(Array.prototype.map.calls.any()).toEqual(false)
  });
});

// filter takes an array (we can also call this a collection) and 
// a function and filters the collection using that function.
// If the function it's passed returns true for an element, 
// it will keep the value, otherwise remove it from the array
describe("the function filter", function() {

  beforeEach(function() {
    spyOn(Array.prototype, 'filter').and.callThrough();
  });

  // `evenFilter` returns true if a number is even
  var evenFilter = function(element) {
    if (element % 2 === 0)
      return true;
    else
      return false;
  };
  
  // `oddFilter` returns true if a number is odd
  var oddFilter = function(element) {
      return !evenFilter(element);
    };

  it("filters an array based on evens", function() {
    expect(filter([1, 2, 3, 4, 5, 6, 7, 8], evenFilter)).toEqual([2, 4, 6, 8]);
  });

  it("filters an array based on odds", function() {

    expect(filter([1, 2, 3, 4, 5, 6, 7, 8], oddFilter)).toEqual([1, 3, 5, 7]);
  });

  it('should not use Array.prototype.filter', function () {
    filter([1, 2, 3, 4, 5, 6, 7, 8], oddFilter);
    expect(Array.prototype.filter.calls.any()).toEqual(false)
  });
});

// contains checks if a collection has an element that matches the second parameter's value
describe("the function contains", function() {
  it("should return true if a collection contains a user-specified value", function() {
    expect(contains([1, 2, 3], 2)).toEqual(true);
    expect(contains({
      moe: 1,
      larry: 3,
      curly: 9
    }, 3)).toEqual(true);
  });

  it("should return false if a collection does not contain a user-specified value", function() {
    expect(contains([1, 3, 9], 2)).toEqual(false);
  });
});

describe("the function countWords - a utility function we'll need soon", function() {
  it("counts words in a sentence separated by empty space", function() {
    expect(countWords("this is a sentence with 7 words")).toEqual(7);
  });
});

// Reduce takes a collection and combines the values in the
// collection into a single value by defining a combination function.
describe("the function reduce", function() {
  var wordArray;
  beforeEach(function() {
    //You can't use the built in Array#reduce!
    spyOn(Array.prototype, 'reduce').and.callThrough();
  });

  it("sums up the array", function() {
    var add = function(a, b) {
      return a + b;
    };
    //Reduce is taking an array, starting value, and combining function
    expect(reduce([3, 5, 7], 0, add)).toEqual(15);
  });

  it("counts the number of words in an array of strings", function() {
    wordArray = ["hello there this is line 1", "and this is line 2"];
    expect(reduce(wordArray, 0, countWordsInReduce)).toEqual(11);
  });

  it('should not use Array.prototype.reduce', function () {
    reduce(wordArray, 0, countWordsInReduce);
    expect(Array.prototype.reduce.calls.any()).toEqual(false)
  });


});

// Use reduce inside a sum function that takes an array of integers
describe("the sum function", function() {
  it("uses reduce to add up the numbers in an array", function() {
    spyOn(window, 'reduce').and.callThrough();
    expect(sum([1, 2, 3])).toEqual(6);
    expect(reduce).toHaveBeenCalled();
  });
});


//These next two are very tricky!
//The functions every and any **should use your reduce function**
//to combine the collections into a true or false value.
describe("the function every", function() {

  //every asks 'does every element in this array pass the test given by the provided function?'
  //If so, every should return true, otherwise false.
  beforeEach(function() {
    spyOn(Array.prototype, 'every').and.callThrough();
    spyOn(window, 'reduce').and.callThrough();
  });

  var isEven = function(num) {
    return num % 2 === 0;
  };

  var getValue = function(i) {
    return i;
  };

  it("should handle an empty set", function() {
    //This gives a hint as to what your initial value for reduce should be...
    expect(every([], getValue)).toEqual(true);
  });

  it("should handle a set that contains even numbers", function() {
    expect(every([0, 10, 28], isEven)).toEqual(true);
  });

  it("should handle a set that contains an odd number", function() {
    expect(every([0, 11, 28], isEven)).toEqual(false);
  });

  it('should not use Array.prototype.every', function () {
    every([1,2,3], isEven);
    expect(Array.prototype.every.calls.any()).toEqual(false)
  });

  it('should re-use the reduce function created in previous specs', function(){
    every([0, 10, 28], isEven)
    expect(reduce).toHaveBeenCalled();
  });
});

describe("the function any", function() {
  //any asks 'does at least one element in this array pass the test given by the provided function?'
  //If so, any should return true, otherwise false.
  beforeEach(function() {
    spyOn(window, 'reduce').and.callThrough();
  });

  var isEven = function(number) {
    return number % 2 === 0;
  };

  it("should handle the empty set", function() {
    expect(any([])).toEqual(false);
  });

  it("should handle a set that contains all odd numbers", function() {
    expect(any([1, 11, 29], isEven)).toEqual(false);
  });

  it("should handle a set that contains an even number", function() {
    expect(any([1, 10, 29], isEven)).toEqual(true);
  });

  it('should re-use the reduce function created in previous specs', function(){
    any([0, 10, 28], isEven)
    expect(reduce).toHaveBeenCalled();
  });

});
