var i;
var array = [1,5,23,4,2,5,6],
    len = array.length;
var func = function () {
    for (i=0; i<len; i++) {
        if (array[i] % 2 === 0) {
           console.log (array[i]); 
        }
    };
};

func();
