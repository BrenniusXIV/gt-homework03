// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChars = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var passOptions;


//Password generator function

function generatePassword(passLength, lowerBool, upperBool, specialBool) {
  var generatedPassword = ""; //Assign function result
  var generatedLetter;
  if (passLength < 8 || passLength > 128) { //limit password length options
    return "Please choose a password length between 8 and 128 characters."
  };
  for (var i = 0; i < passLength; i++) {
    if (lowerBool === true && upperBool === false && specialBool === false) {
      generatedLetter = lowercaseLetters[(Math.floor(Math.random() * 26))];
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
