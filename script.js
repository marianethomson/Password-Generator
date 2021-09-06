/* pw requirements
checks at least one array type
size of pw - 8 to 128 

get element by id from form

array types
if statement
create pw array pool
from pool math.random for each character

display in the page*/

//changing to getElementByID as I just want to return the specific button to generate
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

//check pw size
/* function checkPwSize() {
  let requiredSize = document.getElementById("pw-size");
  if (requiredSize < 5 || requiredSize > 128) {
    let errorMsg = document.createElement("div");
    errorMsg.textContent(
      "The specified size does not meet the password requirements."
    );
    errorMsg.appendChild(this);
    errorMsg.setAttribute("style", "color: red");
  }
} */

//error message if pw doesn't meet minimum requirements
/* function checkRequirements() {
  let arrayCheckbox = document.querySelectorAll("checkbox");
  for (i=0, i<arrayCheckbox, i++){
    (if arrayCheckbox[i]=true){
      
    }
  }
} */

//defines pw size
var pwSize = document.getElementById("pw-size");

//initializes array to receive pw requirements type
var pwPool = [];

//get values from the checkbox number and push array type into the pw pool
if ((document.getElementById("number").checked = true)) {
  pwPool.push(arrNumber);
}

//get values from the checkbox symbol and push array type into the pw pool
if ((document.getElementById("symbol").checked = true)) {
  pwPool.push(arrSymbol);
}

//get values from the checkbox upp-case and push array type into the pw pool
if ((document.getElementById("upp-case").checked = true)) {
  pwPool.push(arrUpperChar);
}

//get values from the checkbox low-case and push array type into the pw pool
if ((document.getElementById("low-case").checked = true)) {
  pwPool.push(arrLowerChar);
}

//transforms multi-level array into flat array
pwPool.flat;

//function to random select elements from the pwPool
//up to the lenght required

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.getElementsByClassName("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
