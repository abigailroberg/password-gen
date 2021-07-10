// Assignment code here

// Initialize arrays for character types
var letters = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];

// Initialize variables for password
var buildPass = "";
var passLength = 0;

// function to create the password
function generatePassword() {
  passLength = window.prompt("How many characters would you like your password to have? Please enter a number between 8 and 128")
  while(passLength < 8 || passLength > 128) {
    passLength = window.prompt("Please enter a number between 8 and 128 for the number of characters in your password. Try again!");
  }
  for (var i = 0; i < passLength; i++) {
    buildPass = buildPass + letters[Math.floor(Math.random()*letters.length)];
  }
  return buildPass;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  buildPass ="";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
