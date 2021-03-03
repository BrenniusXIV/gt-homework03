// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChars = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var passOptions;


//Password generator function

function generatePassword(passLength, lowerBool, upperBool, numbersBool, specialBool) {
  var generatedPassword = ""; //Assign function result
  var generatedLetter;
  if (passLength < 8 || passLength > 128) { //limit password length options
    return "Please choose a password length between 8 and 128 characters."
  };
  for (var i = 0; i < passLength; i++) {
    if (lowerBool === true && upperBool === false && numbersBool === false && specialBool === false) {
      generatedLetter = lowercaseLetters[(Math.floor(Math.random() * lowercaseLetters.length))];
      generatedPassword = generatedPassword.concat(generatedLetter);
    }
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
