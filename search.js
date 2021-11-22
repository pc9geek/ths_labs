var fs=require('fs');


class SearchClass{
    constructor(array){
        this.array=array;
    }
    defaultsearch(val){
        let foundposition=-1;
        for(let i=0;i<this.array.length;i++){
            if(this.array[i]==val){
                foundposition=i;
            }
        }
        return foundposition;
        
    }

    search(value){
        let starttime=process.hrtime();        
        let posn=this.defaultsearch(value);
        let elapsed=process.hrtime(starttime)[1]/1000000;        
        if(posn>-1){
            console.log(`password ${value} FOUND at position ${posn} in ${elapsed}ms`)
        }else{
            console.log(`password not found in ${elapsed}ms`)
        }        
    }
}

try{
    var data=fs.readFileSync('passwords.txt','utf8');
    //var data=fs.readFileSync('10mpasswords.txt','utf8');
    data=data.split('\r\n');
    console.log(`List holds ${data.length} passwords`);
    let searcher=new SearchClass(data);
    searcher.search("yellow3");
    searcher.search("zxcvb");
    searcher.search("richard15");
}
catch(e){
    console.log('file error',e.stack);
}