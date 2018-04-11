var i;
var array = [1,4,2],
    len = array.length;

var average = function () {
    var sum = 0;
    for (i = 0; i < len; i++) {
        sum += array[i];
    };

    var result = sum / len;
    console.log(result);
};

average();
