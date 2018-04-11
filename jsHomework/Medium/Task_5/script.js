var notRepeat = function (string) {
    for (var i = 0; i < string.length; i++) {
        var result = string.charAt(i);
        if (string.indexOf(result) == i && string.indexOf(result, i + 1) == -1) {
            return result;
        };
    };
    return null;
};

console.log(notRepeat("abacddbec"));
