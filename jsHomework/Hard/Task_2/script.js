var list = {
    name: "Darya",
    surname: "Ulyanova"
};

function valid(array, obj) {
    resArr = [];
    for (var key in list) {
        resArr.push(key);
    }
    return array.length == resArr.length && array.every((value, index) => value === resArr[index]);
}

var arr = ["name", "surname"];
console.log(valid(arr, list));

var arr = ["name", "surname", "age"];
console.log(valid(arr, list));

