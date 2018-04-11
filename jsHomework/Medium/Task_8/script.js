var perceFunc = function (num, per) {
    var constValue = 100;
    var result = (num / constValue) * per;
    return result;
};

console.log(perceFunc(1000, 47.12));
