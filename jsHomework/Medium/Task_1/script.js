var reverse = function (num) {
    var num = num.toString();
    return num.split("").reverse().join("");
};

console.log(reverse(32243));
