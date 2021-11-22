// // //const {factorial} = require('./factorial');
// // var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// // // console.log(factorial(3));

// // function getURL(url){
// //     var http=new XMLHttpRequest();
// //     http.open("GET",url,false);
// //     http.send(null);
// //     return http.responseText;
// // }

// // console.log(getURL("https://api.ipify.org"));



// let data="this is a string";

// const myObject = {
//     *[Symbol.iterator]() {
//         yield 1;
//         yield 2;
//         yield 3;
//     }
// }

// for(const elm of myObject){
//     console.log(elm);
// }

// // for(const char of data){
// //     console.log(char);
// // }

//   *
//  ***
// *****

// scope

// function myFunc(val){
//     val[0]++;
// }

// let data=[7];
// myFunc(data);
// console.log(data[0]);

let data1=[];
let data2={};

data1["hello"]=1;
data2["hello"]=1;

console.log(data1);
console.log(data2);

// for(let i=0;i<7;i++){
//     let line="";
//     for(let j=0;j<=i;j++){
//         line +="#";
//     }
//     console.log(line);
// }
