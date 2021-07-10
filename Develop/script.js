// Assignment code here

// Initialize arrays for character types
var lower = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
var upper = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"];
var special = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];
var num = ["1","2","3","4","5","6","7","8","9","0"];
var chars = [];

// Initialize variables for password
var buildPass = "";
var passLength = 0;

// function to create the password
function generatePassword() {
  // ask for password length
  passLength = window.prompt("How many characters would you like your password to have? Please enter a number between 8 and 128")
  // confirm valid password length
  while(passLength < 8 || passLength > 128) {
    passLength = window.prompt("Please enter a number between 8 and 128 for the number of characters in your password. Try again!");
  }
  // ask for character types to include
  var confirmLower = window.confirm("Would you like lowercase letters in your password?");
  var confirmUpper = window.confirm("Would you like uppercase letters in your password?");
  var confirmSpecial = window.confirm("Would you like special characters in your password?");
  var confirmNum = window.confirm("Would you like numbers in your password?");

  // put all desired character types into 1 array
  if (confirmLower) {
    chars = chars.concat(lower);
  }
  if (confirmUpper) {
    chars = chars.concat(upper);
  }
  if (confirmSpecial) {
    chars = chars.concat(special);
  }
  if (confirmNum) {
    chars = chars.concat(num);
  }

  // add characters to password until desired length reached
  while(buildPass.length < passLength) {
    buildPass = buildPass + chars[Math.floor(Math.random()*chars.length)];
  }

  // function to check for desired characters
    function containsChar(password, characters) {
        for (var i = 0; i < password.length; i++) {
           var letter = password.charAt(i);
           if (characters.includes(letter)){
             return true;
           }
           else {
             return false;
           }
        }
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
