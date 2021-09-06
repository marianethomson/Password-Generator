/* pw requirements
checks at least one array type
size of pw - 8 to 128 

get element by id from form

array types
if statement
create pw array pool
from pool math.random for each character

display in the page*/

//chnaging to getElementByID as I just want to return the specific button to generate
var generateBtn = document.getElementById("generate");

//Array of lowercase characters
var arrLowerChar = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of Uppercase using map to run elements and toUpperCase to manipulate string
var arrUpperChar = arrLowerChar.map((letter) => letter.toUpperCase());

console.log(arrUpperChar);

// Array of special characters to be included in password
var arrSymbol = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numbers
var arrNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document. ("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
