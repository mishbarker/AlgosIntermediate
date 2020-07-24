//Reverse
//Given a numerical array, reverse the order of values, in-place. 
//The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. 
//Working ‘in-place’ means that you cannot use a second array – move values within the array that you are given. 
//As always, do not use built-in array functions such as splice().

//[9, 12, 24, 36, 42]
// function reverse(arr)
// {   
//     for(var i=0; i<arr.length/2; i++){
//         var temp = arr[i];
//         arr[i]=arr[arr.length -1 -i];
//         arr[arr.length -1 -i] = temp;
//     }
//     console.log(arr)
// }
// reverse([9, 12, 24, 35, 46, 56, 62])

//Rotate
// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr’s values to the right by that amount. ‘Wrap-around’ any values that shift off array’s end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), change the array to [3,1,2]. Don’t use built-in functions.

// Second: allow negative shiftBy (shift L, not R).

// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.

// Fourth: minimize the touches of each element.

// function rotate(arr, shiftBy) {
//     let t = Math.abs(shiftBy);
//     while (t>0) {
//         if(shiftBy > 0) {
//             let temp = arr[arr.length-1]
//             for(let i = arr.length -1; i> 0; i--)
//                 arr[i] = arr[i-1];
//                 arr[0] = temp;
//         }
//         else {
//             let temp = arr[0];
//             for(let i=0; i<arr.length - 1; i++) {
//                 arr[i]= arr[i+1];
//             }
//             arr[arr.length - 1] = temp;
//         }
//         t--;
//     } 
// }
// console.log(rotate([7,8,9,10,11,12], 1))

// Filter Range
// Alan is good at breaking secret codes. One method is to eliminate values that lie within a specific known range. Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.

function filterRange(arr, min, max) {
    for(var i=0; i<arr.length; i++)
    {
        if(arr[i]> min && arr[i] < max){
            for(var j=i; j<arr.length - 1; j++){
                arr[j] = arr[j + 1]
            }
        arr.length = arr.length -1;
        i--;
        }
    }
}
console.log(filterRange([1,2,3,4,5]))

// Concat
// Replicate JavaScript’s concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array’s elements, followed by the second array’s elements. Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].