var person=function(name, language){
    return{    
    name: name,
    Language: language
    }
}

var Dance=function(){
    let result="";
    for(let i=0;i<this.name.length;i++){
        if(i%2){
            result+=this.name[i].toUpperCase();
        }else{
            result+=this.name[i];
        }
    }
    console.log(result);
}


var steve=person("steve","English");
var prash=person("prash","English");
Dance.call(steve);
Dance.call(prash);

var steveDance=Dance.bind(steve);

steveDance();

