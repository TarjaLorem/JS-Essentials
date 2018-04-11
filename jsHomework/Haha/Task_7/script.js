var rad2degree = function (rad) {
    var constValue = 180;
    var degree = rad * constValue / Math.PI;
    return degree;
};

console.log(rad2degree(0.7853981633974483));