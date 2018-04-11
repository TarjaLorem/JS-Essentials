var subStr = function (string) {
    var output = "",
        len = string.length;
    for (var i = 0; i < len; i++) {
        for (var k = i + 1; k < len + 1; k++) {
            output = output + string.substring(i, k) + ",";
        };
    };
    return output.substring(0, output.length - 1);

};
console.log(subStr("dog"));
