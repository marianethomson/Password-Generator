//button to generate pw
var generateBtn = document.querySelector("#generate");

//button to reset form
var resetBtn = document.querySelector("#reset");

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

//variable to store input checkbox
var numberCheckbox = document.querySelector("#number");

//variable to store input checkbox
var symbolCheckbox = document.querySelector("#symbol");

//variable to store input checkbox
var uppCaseCheckbox = document.querySelector("#upp-case");

//variable to store input checkbox
var lowCaseCheckbox = document.querySelector("#low-case");

//variable to store password size
var pwSize = document.querySelector("#pw-size");

//defines the requested pw size as string and converts back into int. Return pwSize for random
function getPWSize() {
  pwSize = parseInt(pwSize, 10);
  return pwSize;
}

//get values from the checkbox number and push array type into the pw pool
function includeNumber() {
  if ((numberCheckbox.checked = true)) {
    pwPool.push(arrNumber);
  }
}

//get values from the checkbox symbol and push array type into the pw pool
function includeSymbol() {
  if ((symbolCheckbox.checked = true)) {
    pwPool.push(arrSymbol);
  }
}

//get values from the checkbox upp-case and push array type into the pw pool
function includeUppCase() {
  if ((uppCaseCheckbox.checked = true)) {
    pwPool.push(arrUpperChar);
  }
}

//get values from the checkbox low-case and push array type into the pw pool
function includeLowCase() {
  if ((lowCaseCheckbox.checked = true)) {
    pwPool.push(arrLowerChar);
  }
}

// function to check if at least one type of requirement was selected
function checkRequirements() {
  if (
    numberCheckbox === false &&
    symbolCheckbox === false &&
    uppCaseCheckbox === false &&
    lowCaseCheckbox === false
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
  pwSize = getPWSize();
  pwPool = includePassword();
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
  var copyPW = document.querySelector("#password");
  copyPW.select();
  copyPW.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyPW.value);
}

//clear local storage
function clearForm() {
  localStorage.removeItem("pw-size");
  localStorage.removeItem("number");
  localStorage.removeItem("symbol");
  localStorage.removeItem("upp-case");
  localStorage.removeItem("low-case");
}

// Add event listener to generate button and saves input into localStorage
generateBtn.addEventListener("click", function () {
  preventDefault(), localStorage.setItem("pw-size", pwSize.value);
  localStorage.setItem("number", numberCheckbox.checked);
  localStorage.setItem("symbol", symbolCheckbox.checked);
  localStorage.setItem("upp-case", uppCaseCheckbox.checked);
  localStorage.setItem("low-case", lowCaseCheckbox.checked);
  checkRequirements(), writePassword();
});

//Add event listener to the reset button
generateBtn.addEventListener("click", function () {
  document.body.onload = clearForm();
});
