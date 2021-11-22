

function factorial(x){
    console.log(`factorial(${x}) called`);
    if(x===0){
        return 1;
    }
    let result=x* factorial(x-1);
    console.log(`factorial(${x}) returning ${result}`);
    return result;
}

exports.factorial=factorial;

