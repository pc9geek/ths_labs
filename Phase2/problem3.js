/*
Write a Function that accepts the range to Find Odd Numbers between the input range.

Sample Input 1 : ( 1, 10)

Output :
1
3
5
7
9

*/

function problem (StartingValue, UpperLimit){
    var output;
    for (let i = StartingValue; i<= UpperLimit; i++){
        if (i % 2 !== 0 ) {
            output = i;
        }
        console.log(output);
    }
}

//problem(1,10);
problem(15,20);