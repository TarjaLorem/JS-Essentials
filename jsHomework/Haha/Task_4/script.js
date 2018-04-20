var data;
var userName = prompt("Enter your name:", " ");
var city = prompt("In which city:", " ");
do {
   data = prompt("When you able to meet:", "");
} while (isNaN(data));

if (userName && city && data) {
    alert(userName + ' has a meeting ' + data + ' in ' + city);
} else {
    alert("Please, try again");
}