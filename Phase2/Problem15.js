/*
    Defang IPv4 and Validation

    Input 1 : 255.64.12.11
    Output 1 : 255.64.12.11
    valid IP
    Defanged IP: 255[.]64[.]12[.]11
    Input 2 : 255.642.32.11
    Output 2 : 255.642.32.11
    Invalid IP
*/

/* Validiation
 Valid if:
    4 elements, separated by dot's X
    each element is numeric
    each element between 0 and 255

 invalid if:
    string has a leading 0    X
*/


function Pattern15(ip){
    let valid=true;
    var quads=ip.split(".");

    /// TEST
    if(quads.length!=4){
        valid=false;
    }
    for(let i=0;i<quads.length;i++){
        if(isNaN(parseInt(quads[i]))){
            valid=false;
        }
        if(quads[i][0]=="0" && quads[i]!="0"){
            valid=false;
        }   
        if(quads[i] < 0 || quads[i] > 255){
            valid=false;
        }     
    }
    // END TEST
    if(valid){
        console.log(`valid IP:`);
        console.log(`Defanged IP: ${quads[0]}[.]${quads[1]}[.]${quads[2]}[.]${quads[3]}`)
    }else{
        console.log("Invalid IP");
    }
}

Pattern15("255.64.12.11");
Pattern15("255.642.32.11");