function setPropsOnObj(obj){
    
    obj.x = 7;
    obj['y'] = 8;
    obj["onePlus"] = function(x) {
        return x+1;
    }

    return;
}

function setPropsOnArr(obj) {

    obj.hello = function() {
        return "Hello!";
    }
    obj["full"] = "stack";

    obj[0] = 5;

    obj.twoTimes = function(y) {
        return y*2;
    }

    return;
}

function setPropsOnFunc(func) {

    func.year = "20??";
    func.divideByTwo = function(num) {
        return num/2;
    }
    func.prototype.helloWorld = function() {
        return "Hello World";
    }
}