/* Problem 21
Write an AlgorittimeArr to convert 24 hours format time into 12 hours format time.
Input 1 : 18:00
Output 1 : 6:00 PM
Input 2 : 10:30
Output 2 : 10:30 AM
*/

function oldTime(val){
    let timeArr=val.split(":");   
    let valid=true; 
    timeArr.map(elm=>parseInt(elm));  
    timeArr.forEach(function(elm){
        (elm>60 || elm <0)?valid=false:valid=true;
    })
    if(timeArr[0]>-1 && timeArr[0] <12){
         var AP=" AM";
    }else{
        AP=" PM";
        timeArr[0]-=12;
    }
    if (valid){
        return `${timeArr[0]}:${timeArr[1].toString().padStart(2,0)}${AP}`;
    }
    else{
        return `${val} is invalid`;
    }
}

console.log(oldTime("00:66"));