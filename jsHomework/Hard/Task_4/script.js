var arr = [2,2,2,6,6,6,67,54,54,-5,"a","a" ];

var duplicates = input.reduce(function (acc, elem, index, arr) {
    if (arr.indexOf(elem) !== index && acc.indexOf(elem) < 0) acc.push(elem);
    return acc;
}, []); // without loop

console.log(duplicates);
