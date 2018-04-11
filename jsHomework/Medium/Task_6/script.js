var factorial = function (numb) {
    if (numb === 0) {
        return 1;
    } else {
        return numb * factorial(numb - 1);
    };
};

console.log(factorial(5));
