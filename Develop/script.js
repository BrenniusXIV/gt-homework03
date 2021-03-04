// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChars = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

//DOM number input; use .value method to check input
var numInput = document.getElementById("num-inp");

//DOM checkboxes. Use .checked method to determine true/false for conditional logic
var checkboxLower = document.getElementById("checkbox-lower");
var checkboxUpper = document.getElementById("checkbox-upper");
var checkboxNum = document.getElementById("checkbox-num");
var checkboxSpec = document.getElementById("checkbox-spec");

//Password generator function
function generatePassword() {
  var generatedPassword = ""; //Assign function result
  var generatedLetter;
  var passLength = numInput.value;
  var lowerBool = checkboxLower.checked;
  var upperBool = checkboxUpper.checked;
  var numbersBool = checkboxNum.checked;
  var specialBool = checkboxSpec.checked;
  if (passLength < 8 || passLength > 128) { //limit password length options
    return "Please choose a password length between 8 and 128 characters."
  };

  var selectedChars = [];
  if (lowerBool !== true && upperBool !== true && numbersBool !== true && specialBool !== true) {
    return "Please choose at least one password criterion to generate."
  };
  if (lowerBool === true) {
    selectedChars = selectedChars.concat(lowercaseLetters);
  }
  if (upperBool === true) {
    selectedChars = selectedChars.concat(uppercaseLetters);
  }
  if (numbersBool === true) {
    selectedChars = selectedChars.concat(numbers);
  }
  if (specialBool === true) {
    selectedChars = selectedChars.concat(specialChars)
  };
  
  for (var i = 0; i < passLength; i++) {
    generatedLetter = selectedChars[(Math.round(Math.random() * selectedChars.length))];
    generatedPassword = generatedPassword.concat(generatedLetter);
  };
  return generatedPassword;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
