var add = function(number1, number2) {

return number1 + number2;
};

var subtract = function(number1,number2) {
  return number1 - number2
}

var multiply = function(number1,number2) {
  return number1 * number2
}
var divide = function(number1,number2) {
  return number1 /number2
}

var number1 = parseInt(prompt("Enter a Number:"));
var number2 = parseInt(prompt("Enter a Number:"));
var result = add(number1,number2)

alert(result);
