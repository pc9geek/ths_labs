'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {    
    // Write your code here
    let records=[0,0];    
    if(scores.length<2) return records;
    let games=scores[0];
    if (games<1) return records;
    let maxmin=[scores[1],scores[1]];
    for(var i=1;i<scores.length;i++){
        if(scores[i]>maxmin[0]){
            maxmin[0]=scores[i]
            records[0]++;
        }
        if(scores[i]<maxmin[1]){
            maxmin[1]=scores[i];
            records[1]++;
        }     
    }
    return records;
}

const result = breakingRecords([9,10, 5, 20 ,20 ,4 ,5 ,2, 25, 1]);
console.log(result);

