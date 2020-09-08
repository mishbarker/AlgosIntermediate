function swap(arr) {
    var temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    return arr;
}
console.log(swap([1, 5, 10, -2]));

function sum_even() {
    var sum = 0;
    for (var num = 6; num <= 17; num++) {
        if (num % 2 === 0) {
            sum = sum + num;
        }
    }
    return sum;
}
console.log(sum_even());
