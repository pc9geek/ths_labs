/*
The reduce() method executes a user-supplied “reducer” callback function on each element of the array, 
passing in the return value from the calculation on the preceding element. The final result of running 
the reducer across all elements of the array is a single value.

Perhaps the easiest-to-understand case for reduce() is to return the sum of all the elements in an array.
*/

const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15