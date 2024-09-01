// Assignment code here
const generatePassword = function () {
  let passwordChar = '';
  const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseLetters = lowercaseLetters.toUpperCase();
  const numbers = '0123456789';
  const symbols = ` !"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`

  const passwordLength = parseInt(prompt("Please choose a password length between 8 and 128 characters"));

  if (passwordLength === NaN || passwordLength < 8 || passwordLength > 128) {
    alert("Please choos a password length between 8 and 128 characters");
    return;
  }

  const includeLowercase = confirm("Include lowercase letters?");
  const includeUppercase = confirm("Include uppercase letters?");
  const includeNums = confirm("Include numbers?");
  const includeSymbols = confirm("Include symbols?");

  if (includeLowercase) {
    passwordChar += lowercaseLetters;
  }

  if (includeUppercase) {
    passwordChar += uppercaseLetters;
  }

  if (includeNums) {
    passwordChar += numbers;
  }

  if (includeSymbols) {
    passwordChar += symbols;
  }

  if (passwordChar === '') {
    alert("At least one character type must be chosen");
    return;
  }

  let password = '';

  for (let i = 0; i < passwordLength; i++) {
    let char = Math.floor(Math.random() * passwordChar.length);
    password += passwordChar[char];
  }

  return password;

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
