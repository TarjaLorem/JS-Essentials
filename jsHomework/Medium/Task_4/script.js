var upperFunc = function (string) {
    var splitArr = string.split(" "),
        len = splitArr.length;
    var array = [];

    for (var i = 0; i < len; i++) {
        array.push(splitArr[i].charAt(0).toUpperCase() + splitArr[i].slice(1));
    };
    return array.join(" ");
};

console.log(upperFunc("star wars"));
