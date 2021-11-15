/*
Problem 1

0 * 9 + 8 = 8
9 * 9 + 7 = 88
98 * 9 + 6 = 888
987 * 9 + 5 = 8888
9876 * 9 + 4 = 88888
98765 * 9 + 3 = 888888
987654 * 9 + 2 = 8888888
9876543 * 9 + 1 = 88888888
98765432 * 9 + 0 = 888888888

*/

function problem1(value){
    var j=0;
    for(let i=0;i<value;i++ ){
        console.log(`${j} * ${value} + ${value-i-1} = ${j*value+(value-i-1)}`);
        j=j*10+(value-i);
    }
}

function problem1a(value){
    var j=0;
    for(let i=value-1;i>=0;i-- ){
        console.log(`${j} * ${value} + ${i} = ${j*value+(i)}`);
        j=j*10+(i+1);
    }
}


function problem1b(value){
    var first=0;
    for(let i=value-1;i>=0;i-- ){
        var second=value;
        var third=i;
        var result=first*second+third;

        console.log(`${first} * ${second} + ${third} = ${result}`);
        first=first*10+(third+1);
    }
}


//problem1(9);
//problem1a(9);
problem1b(9);
