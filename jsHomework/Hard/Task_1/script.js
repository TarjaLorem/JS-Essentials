(recursion = function (num) {
    console.log(num);
    if (num < 1) {
      return 0;
    } else if (num >= 0) {
        return num * recursion(num - 1);
    };
    
})(10);
