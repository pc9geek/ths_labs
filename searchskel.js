var fs = require('fs');

class SearchClass {
    constructor(array) {
        this.array = array;
        this.location;
    }
    

    defaultSearch(val) {
        var foundposition;
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i] == val) {
                foundposition = i;
            }
        }
        return foundposition;
    }

    mySearch(val) {
        // Rewrite this
        return (this.array.find(elm => elm === val));
        //rewrite
    }

    midsearch(val, lastpointer, pointer) {
        if(!lastpointer){
            lastpointer=0;
            pointer=this.array.length-1;
        }
        if (this.array[pointer] == val) {  
            this.location=pointer;          
            return pointer;
        }
        if (lastpointer == pointer) {
            return;
        }
        let stepsize=parseInt(Math.abs((pointer - lastpointer) / 2));
        if (val < this.array[pointer]) {
            this.midsearch(val, pointer, pointer - stepsize);
        } else {
            this.midsearch(val, pointer, pointer + stepsize);
        }
    }


    search(value) {
        let starttime = performance.now();
        let posn = this.defaultSearch(value);
        let elapsed = performance.now() - starttime;
        let mystarttime = performance.now();
        this.midsearch(value);
        let myposn=this.location;
        let myelapsed = performance.now() - mystarttime;

        if (myposn) {
            console.log(`Mysearch password ${value} FOUND at position ${myposn} in ${myelapsed.toFixed(3)}ms (vs ${elapsed.toFixed(3)})`);
        } else {
            console.log(`Mysearch password not found in ${myelapsed.toFixed(3)}ms (vs ${elapsed.toFixed(3)})`);
        }
        console.log(`mySearch was ${((1 - (myelapsed / elapsed)) * 100).toFixed(1)}% faster`);
        this.location=NaN;
    }
}

try {
    var data = fs.readFileSync('passwords.txt', 'utf8');
    data = data.split('\r\n');
    console.log(`List holds ${data.length} passwords`);
    data.sort();
    let searcher = new SearchClass(data);
    searcher.search("yellow3");
    searcher.search("zxcvb");
    searcher.search("richard15");
    searcher.search("blahblahbla");
}
catch (e) {
    console.log('file error', e.stack);
}