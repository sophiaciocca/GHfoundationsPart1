function repeat(string, num) {
    //basecase: if num is less than one, return empty string
    if (num < 1) {
        return "";
    }

    //loop to repeat the phrase, add to repeatedString
    var repeatedString = "";
    for (i = 0; i < num; i++) {
        repeatedString += string;
    }

    return repeatedString;
}

function sum(array) {
   //basecase: if array is empty, return 0
    if (array.length < 1) {
        return 0;
    }

    //loop to sum the numbers in the array
    var sum = 0;
    for (i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum;
}

function join(array, separator) {
    //basecase: if array is empty, return empty string
    if (array.length < 1) {
        return "";
    }

    //loop to join elements
    var string = "";
    for (i = 0; i < array.length; i++) {
        string += array[i];
        if (separator !== undefined && i != array.length - 1) {
            string += separator;
        }
    }

    return string;
}

function gridGenerator(num) {
    //basecase: if input is 0, return empty string 
    if (num < 1) {
        return "";
    }

    //loop through num times to make num lines
    var grid = "";
    for (i = 0; i < num; i++) {
        //loop through num times per line 
        for (j = 0; j < num; j++) {
            //if i is even & j is even, make it a "#"
            if (i % 2 == 0 && j % 2 == 0) {
                grid += "#";
            }
            else if (i % 2 == 0 && j % 2 == 1) {
                grid += " ";
            }
            else if (i % 2 == 1 && j % 2 == 0) {
                grid += " ";
            }
            else if (i % 2 == 1 && j % 2 == 1) {
                grid += "#";
            }    
        }
        //new line
            grid += "\n";
    }

    return grid;

}

function paramify(object) {
    //basecase: if object is empty, return empty string
    if (object === {}) {
        return "";
    }

    //for loop to go through object
    var arr = [];
    var string = "";
    for (var key in object) {
        //only iterate over objects actually PART of object
        if (object.hasOwnProperty(key)) {
            arr.push(key + "=" + object[key]);
        }
    }

    arr.sort();
    return arr.join("&");
}

function paramifyObjectKeys(object) {
    //basecase: if object empty, return empty string
    if (object === {}) {
        return "";
    }

    //for loop -- iterate over Object.keys
    var arr = [];
    for (i = 0; i < Object.keys(object).length; i++) {
        arr.push(Object.keys(object)[i] + "=" + object[Object.keys(object)[i]]);
    }

    arr.sort();
    return arr.join("&");
}


function renameFiles(array) {

    //set up the newArray for new names we'll return
    var newArray = [];


    //for loop to iterate through list of names
    for (i = 0; i < array.length; i++) {
        var name = array[i];
        //set up the number
        var n = 1;

        //if it's not already in newArray by itself, then add it
        if (newArray.indexOf(name) === -1) {
            newArray.push(name);
        }
        //if it's already in newArray, let's fix it up
        else {
            //if a version of it with parentheses is already in newArray, we'll increase n
            while (newArray.indexOf(name + "(" + n + ")") !== -1) {
                n++;
            }
            newArray.push(name + "(" + n + ")");
        }

        
    }
    return newArray;
}
