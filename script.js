//button to generate pw
var generateBtn = document.querySelector("#generate");

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

//initializes array to receive pw requirements type
var pwPool = [];

//creates an empty string to receive pw
var password = "";

//variable to store checkbox status for number
var numberCheckbox = document.querySelector("#number").checked;

//variable to store checkbox status for symbol
var symbolCheckbox = document.querySelector("#symbol").checked;

//variable to store checkbox status for Upper Case
var upperCheckbox = document.querySelector("#upp-case").checked;

//variable to store checkbox status for lower case
var lowerCheckbox = document.querySelector("#low-case").checked;

//defines the requested pw size as string and converts back into int. Return pwSize for random
function getPWSize() {
  var pwSize = document.querySelector("#pw-size").value;
  pwSize = parseInt(pwSize, 10);
  return pwSize;
}

//get values from the checkbox number and push array type into the pw pool
function includeNumber() {
  if ((document.getElementById("number").checked = true)) {
    pwPool.push(arrNumber);
  }
}

//get values from the checkbox symbol and push array type into the pw pool
function includeSymbol() {
  if ((document.getElementById("symbol").checked = true)) {
    pwPool.push(arrSymbol);
  }
}

//get values from the checkbox upp-case and push array type into the pw pool
function includeUppCase() {
  if ((document.getElementById("upp-case").checked = true)) {
    pwPool.push(arrUpperChar);
  }
}

//get values from the checkbox low-case and push array type into the pw pool
function includeLowCase() {
  if ((document.getElementById("low-case").checked = true)) {
    pwPool.push(arrLowerChar);
  }
}

// function to check if at least one type of requirement was selected
function checkRequirements() {
  if (
    numberCheckbox === false &&
    symbolCheckbox === false &&
    upperCheckbox === false &&
    lowerCheckbox === false
  ) {
    alert("You need to select at least one type of password element");
  }
}

//function to run requirements and include them into an array. Multi dimensional goes into flat array. Return array to random
function includePassword() {
  pwPool = includeNumber();
  pwPool = includeSymbol();
  pwPool = includeUppCase();
  pwPool = includeLowCase();
  pwPool = pwPool.flat;
  return pwPool;
}

//randomizing elements in the pw and returning the randomized array
function generatePassword() {
  var pwSize = getPWSize();
  pwPool = pwPool[Math.floor(Math.random() * pwSize)];
  return pwPool;
}

//function to change array back into string and removing commas
function passToString() {
  password = generatePassword();
  password = password.toString.replace(/,/g, "");
  return password;
}

// Write password to the #password input
function writePassword() {
  var passwordText = passToString();
  passwordText.document.createElement("#password");
  body.appendChild(textarea);
}

//function to copy pw to clipboard
function copyToClipboard() {
  var copyPW = document.getElementById("password");
  copyPW.select();
  copyPW.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyPW.value);
}

// Add event listener to generate button
generateBtn.addEventListener("click", checkRequirements, writePassword);
