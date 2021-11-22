/* Problem 22
Extend the array object with a method that prepends zero to an array of single-digit numbers.
Input 1 : [5, 17, 3, 9, 98]
Output 1 : [ '05', 17, '03', '09', 98 ]
Input 2 : [54, 1, 0, 96, 8]
Output 2 : [ 54, '01', '00', 96, '08' ]
*/



Array.prototype.PadNums = function () {
  return this.map((elem) => {
    if (elem < 10 && elem >= 0) {
      return "0" + elem.toString();
    }else{
	    return elem;
    }
  });  
};

let inputArr = [5, 17, 3, 9, 98];
console.log(inputArr.PadNums());
