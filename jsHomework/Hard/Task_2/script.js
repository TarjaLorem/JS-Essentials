var list = {
    name: "Darya",
    surname: "Ulyanova"
};

var valid = function (obj) {
    for (var key in obj) {
        return true;
    };
    return false;
};
console.log((valid(list.name))); //true
console.log((valid(list.age))) // false

try {
    valid(list.name);
} catch (err) {
    console.log(err)
}
