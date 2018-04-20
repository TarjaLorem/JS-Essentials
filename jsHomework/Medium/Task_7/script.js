var getRandom = function (a, b) {
    var res = Math.floor(Math.random() * (max - min + 1) + min);
    return res;
};

console.log(getRandom(1, 20));
