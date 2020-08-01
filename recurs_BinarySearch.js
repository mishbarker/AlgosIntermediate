

// Recursive Binary Search
// Given a sorted array and a value, recursively determine whether value is found within array. 
// rBinarySearch([1,3,5,6],4) = false; 
// rBinarySearch([4,5,6,8,12],5) = true.

function rBinarySearch(arr, value) {
    var mid = Math.floor(arr.length/2);//we'll get the middle value in the array
    if(arr[mid] == value) { //base case is if the value in the middle of arr == value we want to find
        return true;
    }
    else if(value < arr[mid] && arr.length > 1) { //otherwise start binary search if value less that the middle point and keep searching through left side of arry 
        return rBinarySearch(arr.slice(0, mid), value);//in that case it will call the rBinary search again with an array that's only the 1st half
    }
    else if(value > arr[mid] && arr.length > 1) {//alternative case is when the value is greater than the midpoint and searches the right side
        return rBinarySearch(arr.slice(mid, arr.length), value)//then it calls rBinary search on the 2nd half
    } else {// final case is we've looked both sides to the end, the edge cases, and the value was never found
        return false
    }
}

console.log(rBinarySearch([1, 3, 5, 6], 4));
console.log(rBinarySearch([4, 5, 6, 8, 12], 5));

// Greatest Common Factor
// Given two integers, create rGCF(num1,num2) to recursively determine Greatest Common Factor (the largest integer dividing evenly into both). Greek mathematician Euclid demonstrated these facts:
// gcf(a,b) == a, if a == b;
// gcf(a,b) == gcf(a-b,b), if a>b;
// gcf(a,b) == gcf(a,b-a), if b>a.
// Second: rework facts #2 and #3 to reduce stack consumption and expand rGCF’s reach. You should  be able to compute rGCF(123456,987654).

function rGCF(param1, param2) {
    if (param1 == param2) {
        return param1;//this is the GCF of the two that are compared
    }
    if (param1 > param2) {//checking and looking is 1st num greater than 2nd num
        return rGCF(param1-param2, param2); //runs the recursive call, reducing param1 by a factor of param2, and recursively running the function
    }
    if (param1 < param2) {//checking the opposite, if the 2nd number is greater than the 1st number and 
        return rGCF(param1, param2-param1);//recursively reduces the second number by the first number
    }
}

console.log(rGCF(3, 7));   
console.log(rGCF(18, 27)); 
console.log(rGCF(49, 14)); 

function GCF(param1, param2) {
    if (param1 == param2) {
        return param1;
    }
    if (param1 > param2) {
        if ((param1/param2) % 1 === 0) {
            return param2;
        } else {
            return GCF(param1-param2, param2);
        }
    }
    if (param1 < param2) {
        if ((param1/param2) % 1 === 0) {
            return param2;
        } else {
            return GCF(param1, param2-param1);
        }
    }
}
console.log(GCF(123456, 987654));