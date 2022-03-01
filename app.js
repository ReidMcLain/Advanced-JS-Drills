name = "Reid";
var name;
console.log(name);

setName();
function setName() {
  var name = "Covalence";
  console.log(name);
}

console.log("first");
let avg = findAvg(2, 2);
console.log("second", avg);

function findAvg(a, b) {
  console.log("third");
  var answer = (a + b) / 2;
  return answer;
}

let fruits = ["grapes", "apples", "watermelon"];

let favFruit;
let leastFav;

function printFruits() {
  favFruit = fruits[2];
  console.log(fruits[0]);

  function printFavFruit() {
    console.log(favFruit);
    let leastFav = 'banana'
    console.log(leastFav)
  }
  printFavFruit();
}

printFruits();

someFunc();
function someFunc() {
    console.log("hello, Jupiter")
}

let exampleFunc = function(){
    alert("AHHHHHHHHHHHH")
}
exampleFunc()