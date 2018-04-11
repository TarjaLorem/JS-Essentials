var arr = [2,2,2,67,54,54,-5,"a","a" ];

var sort = arr.sort();
var result = [];
for (var i = 0; i < sort.length; i++) {
    if (sort[i] === sort[i + 1]) {
        result.push(arr[i]);
    };
};

console.log(result.join());
