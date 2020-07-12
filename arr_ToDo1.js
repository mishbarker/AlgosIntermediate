//Push Front
//Given an array and an additional value, 
//insert this value at the beginning of the array. 
//Do this without using any built-in array methods. pop, push, shift, unshift

//#1 I figured out after doing Insert At with Drew
//[2,3,4,5]
function pushFront(arr, value)
{
    var newArr = new Array(arr.length + 1) //increase size of given array by 1 index
    newArr[0] = value; //put new value into 0 index of new array
    console.log(newArr)
    for(var i = 1; i <= arr.length; i++)//starting at index 1
    {
        newArr[i] = arr[i-1];
    }
    return newArr;
}
console.log(pushFront([2,3,4,5], 6))

//#2 Worked through with Drew, but used .push
// function pushFront(arr, value)
// {
//     var newArr = [value]; //create a new array, and add the new value first
//     for(var i = 0; i < arr.length; i++)
//     {
//         newArr.push(arr[i])
//     }
//     console.log(newArr);
// }
// pushFront([2,3,4,5], 6)


//Pop Front
//Given an array, remove and return the value at the beginning of the array.
//Do this without using any built-in array methods except pop().

function popFront(arr) {
    var temp = arr[arr.length-1];
    arr[arr.length - 1] = arr[0];
    arr[0] = temp;
    //console.log(arr); //[9,6,7,8,5]
    return arr.pop();
}
console.log(popFront([5,6,7,8,9]))


// Insert At
// Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

// [2,3,4,5], arr[1], 6

//#1 worked out with Drew
function insertAt(arr, position, value)
{
    var newArr = new Array(arr.length + 1) //before new value
    for(var i = 0; i < position; i++)
    {
        newArr[i] = arr[i];
    }
    newArr[i] = value //new value

    for(var i = position + 1; i < arr.length +1; i++)//after new value
    {
        newArr[i] = [i-1];
    }
    console.log(newArr)
}

// //#2 from solution
// function insertAt(arr, index, val) {
//     arr[arr.length] = val;//what is this doing exactly? arr[4] = val = 6? Is it just increasing the index spot of the array by one, so it creates arr[4] and puts 6 at the end of the array.
//     for (var i = arr.length -1; i > index; i--) {//iterating down through the array starting with arr[4], which we just created and is defined as 6 when I call the function.
//         var temp = arr[i];//value at that index is stored in temp: arr[4]=6
//         arr[i] = arr[i-1];//moves value down arr[4] = arr[3], so ...
//         arr[i-1] = temp; //arr[3] becomes 6
//         //console.log(arr);//then it loops through continuing to move 6 to arr[1]
//     }
//     return arr;
// }
// console.log(insertAt([2,3,4,5], 1, 6))

//Remove At
//Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).

function removeAt(arr, position) {
    
    var temp = arr[arr.length-1];
    arr[arr.length - 1] = arr[position];
    arr[position] = temp;
    console.log(arr); 
    return arr.pop();
}
console.log(removeAt([2,13,24,35,56,57], 3))

//Swap Pairs
//Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.

function swapPairs(arr)
{
    if (arr.length % 2 == 0)
    {
        for (var i = 0; i < arr.length; i+=2)
        { 
            var temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    }
    else
    {
        for (var i = 0; i < arr.length - 1; i+=2)
        { 
            var temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    }
    return arr
}
console.log(swapPairs([6,12,18,24,30]))

//Remove Duplicates
//Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.

//Second: Solve this without using any nested loops.

//#1 From Lecture with Claire
function removeDuplicates(arr)
{
    var newArr = [];
    newArr.push(arr[0]); // puts first value in new array
    for (var i = 1; i < arr.length; i++) //can start at index 1 because index 0 is already in new array
    {
        if (arr[i] != newArr[newArr.length - 1]) //comparing indexes and values between the two arrays. If not equal, the push the value of arr into newArr.
        {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(removeDuplicates(["Adam", "Adam", "Barbara", "John", "John", "Claire", "Sarah", "Stan", "Stan", "Susan", "Tom", "Tom"]))

//#2 From Solutions - I don't understand this one at all. And it doesn't work.
// function removeDups(arr) {
//     var i = 0;
//     var count = 1;
//     while (count < arr.length) {
//         if (arr[i] == arr[count]){
//             count++;
//         } else {
//             arr[i+1] = arr[count];
//             i++;
//             count++;
//         }
//     }
//     for (var x = 0; x < i; x++) {
//         arr.pop();
//     }
//     return arr;
// }
//console.log(removeDups(["Adam", "Adam", "Barbara", "John", "John", "Claire", "Sarah", "Stan", "Stan", "Susan", "Tom", "Tom"]))