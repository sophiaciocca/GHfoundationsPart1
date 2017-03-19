function concatString() {
    var string = "";
    //for loop to run thru arguments and join them
    for (i = 0; i < arguments.length; i++) {
        string += arguments[i];
    }

    return string;
}

function yourFunctionRunner() {

    var string = "";
    for (i = 0; i < arguments.length; i++) {
        string += arguments[i]();
    }

    return string;
}

function makeAdder(A) {

    return function(x) {
        return x + A;
    }
}

function once(inFunc) {

    var hasRun = false;

    function newFunc() {
        if (!hasRun) {
            hasRun = true;
            inFunc();
        }
    }
    
    return newFunc;
}

function createObjectWithClosures() {

    var val = 0;

    //the object itself
    var object = {
        oneIncrementer: function() {
            val += 1;
        },
        tensIncrementer: function() {
            val += 10;
        },
        getValue: function() {
            return val;
        },
        setValue: function(x) {
            val = x;
        }
    }

    return object;
}

function guestListFns(guestArray, code) {
    var guest;
    var funcArr = [];

    //for loop to go thru guestArray 
    for (var i = 0; i < guestArray.length; i++) {
        guest = guestArray[i];
        //push functions onto array
        funcArr.push(holder(code, guest));
    }

    function holder(code, guest) {
        return function(pass) {
            if (pass === code) { 
                return guest;
            }
            else {
                return "Secret-Code: Invalid";
            }
        }
        
    }


    return funcArr;
}

function generateGuestList(codedArray, code) {

    //map codedArray with function that decodes it
    return codedArray.map(function(guestFnc) {
        return guestFnc(code);
    })


}