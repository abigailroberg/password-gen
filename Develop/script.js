// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Generate random password
var generatePassword = function() {
  // Prompt for password length
    // Validate response between 8 and 128 characters
  // Prompt for character types to include
    //  Validate at least 1 character type selected
  // Create password based on inputs
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
