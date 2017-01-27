// Let's start with some interesting facts about functions.
// The first thing to be aware of is that inside a function,
// there is a special variable called `arguments`
//
// `arguments` looks and feels like an array (though be careful, it's not
// actually an array).


describe('The arguments array', function() {
  it('allows you to call a function with arguments like normal', function() {
    var result = concatString('David', ' ', 'Yang');
    expect(result).toEqual('David Yang');
  });

  it('allows you to call a function with as many arguments as you want', function() {
    var result = concatString('This', ' ', 'should', ' ', 'be done with join');
    expect(result).toEqual('This should be done with join');
  });
});


// This will explore the idea that JS' functions are just values that can be passed aroudn.
// For example, here we can have a function that creates another function.
describe('higher-order functions', function() {

  var callThisFunction = function() {
      return 'Called Value';
    };

  it('means that a function can take a function as an argument', function() {


    // Create a function that runs functions and returns their "return" value
    expect(yourFunctionRunner(callThisFunction)).toEqual('Called Value');

    var andThisFunction = function() {
      return ' and Other Value';
    };

    // `yourFunctionRunner` should run as many functions as it gets and concatenate their return values
    // You should try to use the `arguments` array here.
    expect(yourFunctionRunner(callThisFunction, andThisFunction)).toEqual('Called Value and Other Value');
  });
});

// Now we'll explore the idea of closure
// Closures describe functions that remember variables that were in scope
// when they were defined (defined being the operative word).
//
// Then, even if the scope that the function was defined in goes away, it continues to have access
// to have scope.
describe('makeAdder', function() {
  it("takes an argument A and returns a function that adds A to any value it's passed", function() {
    var adderOf2function = makeAdder(2);

    // Now let's call the function that we got back and add 5 to the closed-over value
    expect(adderOf2function(5)).toEqual(7);
  });
});

// Functions that decorate other functions.  These functions return a version of the function
// with some changed behavior.  This will depend on closure since the function needs to
// remember information that in a scope that will eventually go away.
//
// Given a function, return a new function will only run once, no matter how many times it's called
describe('once', function() {
  it('should only increment num one time', function() {
    var num = 0;
    var increment = once(function() {
      num++;
    });

    // run this function twice, but since it's a new function that's been modified by "once"
    // it will only run once and num won't be incremented again.
    increment();
    increment();
    increment();
    increment();

    expect(num).toEqual(1);
  });
});


// Closures are a bit stranger than you'd expect.  Here let's create
// an object that has two functions.  These functions can share a piece of information
// (that's not in the object itself).
//
// What's interesting about closure is that both of these functions have closed over
// the same value and can both read and modify it.
describe('Shared contexts', function() {
  var sharedObj;

  beforeEach(function(){
    sharedObj = createObjectWithClosures();
  })


  it('should return an object with four methods', function() {

    expect(typeof sharedObj.oneIncrementer).toBe('function');
    expect(typeof sharedObj.tensIncrementer).toBe('function');
    expect(typeof sharedObj.getValue).toBe('function');
    expect(typeof sharedObj.setValue).toBe('function');
    // Here we're testing that you're not storing anything
    // besides four methods.  The value that will
    // be incremented/decremented (and returned by getValue)
    // should be only in scope during the createObjectWithClosures function call and then
    // closed over by the four functions returned in the object
    expect(Object.keys(sharedObj).length).toBe(4);
  });


  it('should allow `oneIncrementer`, `tensIncrementer`, and `getValue` methods call the same value', function() {
    sharedObj.oneIncrementer();
    sharedObj.tensIncrementer();
    expect(sharedObj.getValue()).toEqual(11);

  });

  it('the `setValue` method overrides the existing value and sets it to the argument value', function(){
    sharedObj.tensIncrementer();
    sharedObj.oneIncrementer();

    sharedObj.setValue(7.5);

    expect(sharedObj.getValue()).toEqual(7.5);
  });


});

/* NOTE: Do not use ES6 "let" keyword */

describe('secret-guest-list', function(){
  describe('guestListFns', function() {
    var guestNameFunctions,
        guestsArray,
        secretCode;

    beforeEach(function(){
      guestsArray = ['James', 'Casey', 'Karen', 'Gene', 'Michele', 'Ashi'],
      secretCode = 404;

      guestNameFunctions = guestListFns(guestsArray, secretCode);

    });

    it('guestListFns returns an array of functions', function() {
      expect(Array.isArray(guestNameFunctions)).toEqual(true);
    });

    it('the resulting array is the same length as the given number', function() {
       expect(guestNameFunctions.length).toEqual(6);
    });

    it('all indexes in the array are functions', function(){
      // everything must be a function (hence the .every function)
      var onlyFuncs = guestNameFunctions.every(function(fn){
        if (typeof fn === 'function'){
          return true;
        }
      });
      expect(onlyFuncs).toEqual(true);
    });

    it('functions in the `guestNameFunctions` returns guest from the guestArray', function(){
      var guest = guestNameFunctions[0](secretCode);

      expect(guest).toEqual('James');
    });

    it('returns the string `secret code: invalid` if the wrong code is passed to a guestArray function', function() {
      var guest = guestNameFunctions[1](8910);

      expect(guest).toEqual('Secret-Code: Invalid');
    });

    it('functions in the `guestNameFunction` do not have additional property or methods attached(use closure)', function(){
      var guestFunction = guestNameFunctions[2];

      expect(Object.keys(guestFunction).length).toEqual(0);
    });

    it('guestListFns does not call Array.prototype methods', function(){
      spyOn(Array.prototype, 'forEach').and.callThrough();
      spyOn(Array.prototype, 'map').and.callThrough();

      guestListFns(guestsArray, secretCode);

      expect(Array.prototype.forEach.calls.any()).toEqual(false);
      expect(Array.prototype.map.calls.any()).toEqual(false);

    });

  });

  describe('generateGuestList', function() {
    //NOTE: YOU MAY NOT USE THE ES6 KEYWORD 'LET' IN THIS PROBLEM. FOR FULL CREDIT, YOU MUST COMPLETE THIS PROBLEM USING ONLY ES5

    var guestNameFunctions,
        guestsArray,
        secretCode;

    beforeEach(function(){
      guestsArray = ['James', 'Casey', 'Karen', 'Gene', 'Michele', 'Ashi'],
      secretCode = 404;

      guestNameFunctions = guestListFns(guestsArray, secretCode);
    });


    it('`generateGuestList` is a function object', function(){
      expect(typeof generateGuestList === 'function').toEqual(true);
    });

    it('returns an array of strings', function(){
      var officialGuestList = generateGuestList(guestNameFunctions, secretCode);

      var isString = officialGuestList.every(function(name){
        return typeof name === 'string';
      });

      expect(Array.isArray(officialGuestList)).toEqual(true);
      expect(isString).toEqual(true);

    });

    it('contains the original names from the guest list', function(){
      var officialGuestList = generateGuestList(guestNameFunctions, secretCode);

      expect(officialGuestList).toEqual(['James', 'Casey', 'Karen', 'Gene', 'Michele', 'Ashi']);

    });


  });

})

