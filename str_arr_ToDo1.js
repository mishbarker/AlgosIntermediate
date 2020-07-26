// To Do 1

// Remove Blanks - DONE
// Create a function that, given a string, returns all of that string’s contents, but without blanks. 

// If given the string " Pl ayTha tF u nkyM usi c ", return "PlayThatFunkyMusic".

function removeBlanks(str) {
    return str.split(" ").join("");
}
console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "))



// Get Digits - DONE
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1357924680.

function removeLetters(str){
    var stringArr = str.split("");
    var intString = "";
    for (var i = 0; i < stringArr.length; i++) {
        if (stringArr[i]%1 == 0) {
            intString += stringArr[i];
        }
    }
    return intString/1
}
console.log(removeLetters("0s1a3y5w7h9a2t4?6!8?0"))
    


// Acronyms - DONE
// Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). 

// Given " there's no free lunch - gotta pay yer way. ", return "TNFL-GPYW". 

// Given "Live from New York, it's Saturday Night!", return "LFNYISN".

function acronyms(str) {
    var strArr = str.split(" ");
    var retStr = "";
    for (var i = 0; i < strArr.length; i++) {
        if (strArr[i] == false) {
            continue;
        } 
        else {
            retStr += strArr[i][0].toUpperCase();
        }
    }
    return retStr;
}
console.log(acronyms(" there's no free lunch - gotta pay yer way. "))
console.log(acronyms("Live from New York, it's Saturday Night!"))

// Count Non-Spaces
// Accept a string and return the number of non-space characters found in the string. 

// For example, given "Honey pie, you are driving me crazy", return 29 (not 35).

function countNS(str) {
    var strArr = str.split("");
    var count = 0;
    for (var i = 0; i < strArr.length; i++) {
        if (strArr[i] == false) {
            continue;
        } else {
            count++;
        }
    }
    return count;
}
console.log(countNS("Honey pie, you are driving me crazy"))


// Remove Shorter Strings - DONE
// Given a string array and value (length), remove any strings shorter than the length from the array.

function removeShort(strArr, val) {
    for (var i = strArr.length-1; i >= 0; i--) {
        if (strArr[i].length < val) {
            for (var j = i; j < strArr.length-1; j++){
                var temp = strArr[j];
                strArr[j] = strArr[j+1];
                strArr[j+1] = temp;
            }
            strArr.pop();
        }
    }
    return strArr;
}
console.log(removeShort(["ducklings", "like", "to", "swim", "everyday"], 5))
