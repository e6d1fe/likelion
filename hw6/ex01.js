// let answer = "";

// for (let i = 5; i >= 1; i--) {
//   answer += "&nbsp".repeat(5 - i) + "*".repeat(2 * i - 1) + "<br>";
// }

// document.write(answer);

// var temperature = 10;
// var message;

// message = temperature > 0 ? "기온이 영상입니다." : "기온이 영하입니다.";

// console.log(message);

var fruitArray1 = ["apple", "orange", "banana"];
var fruitArray2 = ["pear", "melon", "peach", "cherry"];

let slice1;
let slice2;

function remove(array1, array2) {
  slice1 = array1.slice(array1.length - 2);
  slice2 = array2.slice(array2.length - 2);
  console.log(slice1, slice2);
}

remove(fruitArray1, fruitArray2);

var fruitArray3 = slice1.concat(slice2);

console.log(fruitArray3);
