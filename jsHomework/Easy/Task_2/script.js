var i;
var array = [1,92,-5,25],
    len = array.length;

var maxNumb = function () {
    for (i = 0; i < len; i++) {
        if (array[i] > array[0]) {
            array[0] = array[i];
        }
    };

    console.log(array[0]);
};

var minNumb = function () {
    for (i = 0; i < len; i++) {
        if (array[i] < array[0]) {
            array[0] = array[i];
        }
    };

    console.log(array[0]);

};
maxNumb();
minNumb();
