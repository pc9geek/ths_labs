
// LAB Format
// Post problems...
// Split into breakout rooms
// work opn problems for 1hr
// rejoin for 40 mins for a discussion


/*
Problem 11
Split the array and add the first part to the end. There is a given array and split it from a
specified position, and move the first part of the array add to the end. Write a function that
accepts an array and index position to split as arguments.
Sample Input : arr = [12, 10, 5, 6, 52, 36], index position to split = 2
Sample Output : [5, 6, 52, 36, 12, 10]
*/
// var arr = [12, 10, 5, 6, 52, 36];


// function Problem11(thearray,p){
//     console.log(thearray.slice(p,thearray.length).concat(thearray.slice(0,p)));
// }
// Problem11(arr,2);



// /* Problem 12
// Write a program to calculate trailing zero's count for factorial of N, where N is an input
// parameter given to the function.
// Sample Input 1 : 10
// Sample Output 1 : The factorial of the given number 10 is 3628800
// Number of zeroes in the factorial are 2
// Sample Input 2 : 5
// Sample Output 2: The factorial of the given number 5 is 120
// Number of zeroes in the factorial number are 1
// */

// function factorial(x){
//     if(x<=1) return 1;
//     return x*factorial(x-1);
    
// }

// function Problem12a(x){
//     let f=factorial(x);
//     console.log(`The factorial of the given number 10 is ${f}`)
//     let counter=0;
//     while(f % 10 ==0){
//         counter++;
//         f=f/10;
//     }
//     console.log(`Number of zeroes in the factorial are ${counter}`);
// }


// function problem12(x) {
//   if (x < 0) {
//     console.log("not a valid number");
//   } else if (x === 0) {
//     console.log("factorial is 1");
//   } else {
//     let fact = 1;
//     for (i = 1; i <= x; i++) {
//       fact *= i;
//     }
//     console.log(`The factorial of ${x} is ${fact}.`);
//   }
// }
//problem12(10);
//Problem12a(10);



/*
13. Write an Algorithm to subtract two integers without using the "minus(-)" operator
Method1(Using negation operator in a function):
Sample Input 1 : (2, 3)
Sample Output 1 : -1
Sample Input 2 : (5, 3)
Sample Output 2 : 2
Method2(Using loop logic and counter):
Sample Input 1 : (2, 3)
Sample Output 1 : -1
Sample Input 2 : (5, 3)
Sample Output 2 : 2
Sample Input 3 : (1, 1)
Sample Output 3 : 0
*/

var a;
function subtract(x,y){
    var a;
    //return x-y;
    if (y < 0) {        
        for (let i = y; i < 0; i++) {
            x++;
        }

    } else {
        for (let i = y; i > 0; i--) {
            x--;
        }
    }
    return x;
}

console.log(subtract(10,12));
