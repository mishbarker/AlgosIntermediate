//Reverse - DONE
//Given a numerical array, reverse the order of values, in-place. 
//The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. 
//Working ‘in-place’ means that you cannot use a second array – move values within the array that you are given. 
//As always, do not use built-in array functions such as splice().

//[9, 12, 24, 36, 42]
function reverse(arr)
{   
    for(var i=0; i<arr.length/2; i++){
        var temp = arr[i];
        arr[i]=arr[arr.length -1 -i];
        arr[arr.length -1 -i] = temp;
    }
    console.log(arr)
}
reverse([9, 12, 24, 35, 46, 56, 62])

//Rotate - DONE
// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr’s values to the right by that amount. ‘Wrap-around’ any values that shift off array’s end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), change the array to [3,1,2]. Don’t use built-in functions.

// Second: allow negative shiftBy (shift L, not R).

// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.

// Fourth: minimize the touches of each element.

//arr.length
//shiftBy
//if our shiftby is divisable by the length we dont have to do anything
//if the shiftby is negative go left instead of right
function rotateArr(arr, shiftBy)
                    
{
    var loopCounter=0
    if(shiftBy < 0) //applies ONLY to negative numbers
    {
        shiftBy=arr.length-Math.abs(shiftBy) //changing value of shiftBy
    }
        for(var i=0; i<shiftBy%arr.length; i++)   //outer for loop handling shift by
        {
            loopCounter++
            for(var j=0; j<arr.length-1; j++)   //inner for loop going through array
            {
                if(j==0)                    //the first time in the loop
                {
                    temp=arr[j+1] //put value in temp
                    arr[j+1]=arr[j] //move value up one index place
                }
                else
                {
                    if(j%2 !=0)    // if the index is odd
                    {
                        temp2=arr[j+1] //storing value of item in odd index+1 in temp2
                        arr[j+1]=temp //moving that value to temp
                        console.log(temp2)
                        console.log(temp2)
                    }
                    else // if index is even
                    {
                        temp=arr[j+1]
                        arr[j+1]=temp2
                    }
                }
            }
            arr[0]=temp2
        }
    
    console.log(loopCounter);
    return arr
}
console.log(rotateArr([1,2,3,4,5], 2));


// Filter Range - DONE
// Alan is good at breaking secret codes. One method is to eliminate values that lie within a specific known range. Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.

let test = [1,2,3,4,5]
function filterRange(arr, min, max) {
    
    for(let i = 0; i < arr.length; i++) {//0 - 1
        console.log(i)
        console.log(arr)
        if(arr[i] <= min || arr[i] >= max) {//passed - moves to for
            for(let j = i; j < arr.length - 1; j++) { //j=1
                arr[j] = arr[j + 1];
            }
            arr.length = arr.length - 1;//5=4
            
            console.log(arr.length)
            i--;
            console.log(i)
        }
    }
}
let test = [1,2,3,4,5]
console.log(filterRange(test, 1, 5))
console.log(test)


// Concat - DONE
// Replicate JavaScript’s concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array’s elements, followed by the second array’s elements. Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].

function arrConcat(arr1, arr2){

    newArr = []
    for(var i=0; i<arr1.length; i++){
    //loop through each array with a separate  for loop
        newArr.push(arr1[i])
        console.log(newArr)
    }
    for(var i=0; i<arr2.length; i++){
        newArr.push(arr2[i])
        console.log(newArr)
    }
    return newArr
}
console.log(arrConcat(['a','b'], [1,2]))