// Assignment code here
const generatePassword = function () {

  // Creates the variable that will hold the character types the user chooses and sets it to an empty string by default
  let passwordChar = '';
  // These 4 lines define the strings for the character types.
  const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  // Creates a string of uppercase letters based on the lowercaseLetters string
  const uppercaseLetters = lowercaseLetters.toUpperCase();
  const numbers = '0123456789';
  const symbols = ` !"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`

  // Asks the user to type in they length they wish the password to be and turns it into a number
  const passwordLength = parseInt(prompt("Please choose a password length between 8 and 128 characters"));

  // Validates that what the user entered is a number and is between 8 and 128
  if (passwordLength === NaN || passwordLength < 8 || passwordLength > 128) {
    alert("Please choos a password length between 8 and 128 characters");
    return;
  }

  // Prompts the user for what types of characters to include in the password
  const includeLowercase = confirm("Include lowercase letters?");
  const includeUppercase = confirm("Include uppercase letters?");
  const includeNums = confirm("Include numbers?");
  const includeSymbols = confirm("Include symbols?");

  // Logic that will add the characters the user chose to the passwordChar string
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

  // Logic that ensures the user chooses at least 1 type of character
  if (passwordChar === '') {
    alert("At least one character type must be chosen");
    return;
  }

  // Sets the password to an empty string by default
  let password = '';

  // Loops through the length of the password that the user chose and selects a random character from the passwordChar string and adds it to the password string.
  for (let i = 0; i < passwordLength; i++) {
    let char = Math.floor(Math.random() * passwordChar.length);
    password += passwordChar[char];
  }

  // Returns the generated password so that the user can see the password that was created.
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
