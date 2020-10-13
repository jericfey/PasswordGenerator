// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Need a generatePassword function that prompts user to select criteria for the password
//this function's goal is to create the object passwordOptions
function generatePassword () {
var passwordOptions = [];
  var password = [];
    //how long should the password be? 
var inputPassLength = prompt("Input a password length between 8 - 128 characters.")
//Input should be validated as a number between 8 - 128

  if (isNaN(inputPassLength) || inputPassLength > 128 || inputPassLength < 8){
  alert("Please enter a value between 8 - 128.");
  return;
   } else {

   }
  // var passLength = inputPassLength;
  
  // prompt for lowercase, uppercase, numeric and/or special characters
  var containsLowerCase = confirm("Select OK if you would like your password to include lowercase letters.");
 
  var containsUpperCase = confirm("Select OK if you would like your password to include upperase letters."); 
 
 var containsNumeric = confirm("Select OK if you would like your password to include numbers.");

 var containsSpCharacter = confirm("Select OK if you would like your password to include special characters.");

var passwordOptions = {
length : inputPassLength,
lower : containsLowerCase,
upper : containsUpperCase,
number : containsNumeric, 
spchar : containsSpCharacter
}

return passwordOptions;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
