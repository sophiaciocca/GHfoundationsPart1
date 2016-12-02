describe('the function `hello`', function() {
  it('says hello', function() {
    expect(hello()).toEqual(FILL_ME_IN);
  });

  it('says hello to someone', function() {
    expect(hello('Fred')).toEqual(FILL_ME_IN);
  });
});

describe('the function `add`', function(){

  var returnValue = 0;

  beforeEach(function(){
    // re-assign returnValue to 0 before each spec
  });

  it('adds 4 and 5, the value returned is 9', function(){
    returnValue+= add(4, 5);

    expect(returnValue).toEqual(9);
  });

  it('adds 7 and 8, the value returned is 15', function(){
    returnValue += add(7, 8);

    expect(returnValue).toEqual(15);
  });
})
