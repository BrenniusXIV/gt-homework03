// Assignment Code
const generateBtn = document.querySelector("#generate");
const lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialChars = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

//DOM number input; use .value method to check input
const numInput = document.getElementById("num-inp");

//DOM checkboxes. Use .checked method to determine true/false for conditional logic
const checkboxLower = document.getElementById("checkbox-lower");
const checkboxUpper = document.getElementById("checkbox-upper");
const checkboxNum = document.getElementById("checkbox-num");
const checkboxSpec = document.getElementById("checkbox-spec");

//Password generator function
function generatePassword() {
  let generatedPassword = ""; //Assign function result
  let generatedLetter;
  const passLength = numInput.value;
  const lowerBool = checkboxLower.checked;
  const upperBool = checkboxUpper.checked;
  const numbersBool = checkboxNum.checked;
  const specialBool = checkboxSpec.checked;
  if (passLength < 8 || passLength > 128) { //limit password length options
    return "Please choose a password length between 8 and 128 characters."
  };

  let selectedChars = [];
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
  
  for (let i = 0; i < passLength; i++) {
    generatedLetter = selectedChars[(Math.floor(Math.random() * selectedChars.length))];
    generatedPassword = generatedPassword.concat(generatedLetter);
  };
  return generatedPassword;
};

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
