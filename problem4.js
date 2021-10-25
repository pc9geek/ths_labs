/*
Write a function that prints the sum of 1-N numbers, where N is the given input.

Sample Input 1 : 3
Expected Output format:6 (1+2+3)

Sample Input 2 : 5
Expected Output format :15 (1+2+3+4+5)
*/

// resume at 07:50 IST

// Latest:
function printNums(top) {
    let outstring = "";
    let total = 0;
    for (let i = 1; i <= top; i++) {
      total += i;
      if (i === top) {
        outstring = outstring + i;
      } else {
        outstring = outstring + i + "+";
      }
    }
    outstring = total + ": " + "(" + outstring + ")";
    console.log(outstring);
  }
  printNums(5);