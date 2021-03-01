// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChars = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var passOptions;


//Password generator function

function generatePassword(passLength, lowerBool, upperBool, specialBool) {
  var generatedPassword; //Assign function result
  if (passLength < 8 || passLength > 128) { //limit password length options
    return "Please choose a password length between 8 and 128 characters."
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
