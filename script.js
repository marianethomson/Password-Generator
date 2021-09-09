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

//array to shuffle elements
var tempArray = [];

//clear local storage
function clearForm() {
  localStorage.removeItem("password");
}

//Added feature: function to copy pw to clipboard
function copyToClipboard() {
  var copyPW = document.querySelector("#password");
  copyPW.select();
  copyPW.setSelectionRange(0, 127);
  navigator.clipboard.writeText(copyPW.value);
}

// Add event listener to generate button and saves input into localStorage
generateBtn.addEventListener("click", function (event) {
  //inhibit form submit
  event.preventDefault();
  //creates obj password
  password = {
    size: document.getElementById("pw-size").value.trim(),
    number: document.getElementById("number").checked,
    symbol: document.getElementById("symbol").checked,
    uppCase: document.getElementById("upp-case").checked,
    lowCase: document.getElementById("low-case").checked,
  };
  //checks size requirement and if not met delete obj
  if (Number(password.size) < 8 || Number(password.size) > 128) {
    alert(
      "The password requires a minumum of 8 characters and a maximum of 128 characters."
    );
    clearForm();
  }
  //checks pw elements and if not met delete obj
  else if (
    password.number == false &&
    password.symbol == false &&
    password.uppCase == false &&
    password.lowCase == false
  ) {
    alert("You need to select at least one type of password element.");
    clearForm();
  }
  //if requirements met
  else {
    //var to store the calculated password
    var pwContent = [];
    //save obj as string
    localStorage.setItem("password", JSON.stringify(password));
    // if checkbox true, populate temporary array with numbers
    if (password.number == true) {
      tempArray = tempArray.concat(arrNumber);
    }
    // if checkbox true, populate temporary array with symbols
    if (password.symbol == true) {
      tempArray = tempArray.concat(arrSymbol);
    }
    // if checkbox true, populate temporary array with upper case
    if (password.uppCase == true) {
      tempArray = tempArray.concat(arrUpperChar);
    }
    // if checkbox true, populate temporary array with lower case
    if (password.lowCase == true) {
      tempArray = tempArray.concat(arrLowerChar);
    }
    //random array with password size, where each element is picked from a random
    //index pickup from tempArray using math random
    for (let i = 0; i < password.size; i++) {
      var randomElement = tempArray[Math.floor(Math.random() * password.size)];
      pwContent.push(randomElement);
    }
    pwContent = pwContent.join("");
    var passwordText = document.getElementById("password");
    passwordText.value = pwContent;
  }
});

//Add event listener to the reset button
resetBtn.addEventListener("click", function () {
  clearForm();
});
