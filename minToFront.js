// Min to Front
// Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.

function minToFront(arr)
{
    var min = arr[0];
    var position = 0;
    for (var i = 1; i < arr.length; i++)//=> i=2 => i=3 => i=4 => i=5 not less than arr.length - end this for loop
    {
        if (arr[i] < min) //2<4=>YES, 1<2=>YES, 3<1=>NO, 4<1=NO
        {
            min = arr[i]; //min=2, => min=1
            position = i;//i=1, => i=2
        }//this for loop just serves to define min=1 and position=2 - doesn't change array
    }

    for (var i = position; i > 0; i--)//starts 2=position then increments down to 1=position and for loop ends
    {
        var temp = arr[i];//temp=arr[2]=1 => temp=arr[1]=1
        arr[i] = arr[i-1];//arr[2]=arr[1], arr[2] now has value of 2 => arr[1]=arr[0], so now value 4 is in arr[1]
        arr[i-1] = temp; //arr[1] = temp = 1 => arr[0] = temp = 1, so 1 is now the minimum at the front
    }
    return arr;
}
// Min to Front
// Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.

function minToFront(arr)
{
    var min = arr[0];
    var position = 0;
    for (var i = 1; i < arr.length; i++)//=> i=2 => i=3 => i=4 => i=5 not less than arr.length - end this for loop
    {
        if (arr[i] < min) //2<4=>YES, 1<2=>YES, 3<1=>NO, 4<1=NO
        {
            min = arr[i]; //min=2, => min=1
            position = i;//i=1, => i=2
        }//this for loop just serves to define min=1 and position=2 - doesn't change array
    }

    for (var i = position; i > 0; i--)//starts 2=position then increments down to 1=position and for loop ends
    {
        var temp = arr[i];//temp=arr[2]=1 => temp=arr[1]=1
        arr[i] = arr[i-1];//arr[2]=arr[1], arr[2] now has value of 2 => arr[1]=arr[0], so now value 4 is in arr[1]
        arr[i-1] = temp; //arr[1] = temp = 1 => arr[0] = temp = 1, so 1 is now the minimum at the front
    }
    return arr;
}
console.log(minToFront([4,2,1,3,5]))