// Assignment code here
const generatePassword = function () {
  let passwordChar = [];

  const passwordLength = parseInt(prompt("Please choose a password length between 8 and 128 characters"));

  if (passwordLength === NaN || passwordLength < 8 || passwordLength > 128) {
    alert("Please choos a password length between 8 and 128 characters");
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
