//creating constructor functionnn
function RPNCalculator() {
    //creating empty stack
    this.stack = [];  
}

//creating ability to push nums onto the stack
RPNCalculator.prototype.push = function(x) {
    this.stack.push(x);
};
//creating value to be returned (return the last value in the stack)
RPNCalculator.prototype.value = function() {
    return this.stack[this.stack.length - 1];
};
//creating ability to add the last two nums on stack
RPNCalculator.prototype.plus = function() {
    var nums = this.popNums();
    this.stack.push(nums[0] + nums[1]);
}
//creating ability to subtract the last two nums on stack
RPNCalculator.prototype.minus = function() {
    var nums = this.popNums();
    this.stack.push(nums[1] - nums[0]);
}
//creating ability to multiply last two nums on stack
RPNCalculator.prototype.times = function() {
    var nums = this.popNums();
    this.stack.push(nums[0] * nums[1]);
}

//creating ability to divide last two nums on stack
RPNCalculator.prototype.divide = function() {
    var nums = this.popNums();
    this.stack.push(nums[1] / nums[0]);
}

//pop off numbers to be operated on 
RPNCalculator.prototype.popNums = function() {
    this.checkLength();
    var num1 = this.stack.pop();
    var num2 = this.stack.pop();
    return [num1, num2];
}

//check length, throw errors if not long enough
RPNCalculator.prototype.checkLength = function() {
    if (this.stack.length < 2) {
        throw "rpnCalculatorInstance is empty";
    }
}