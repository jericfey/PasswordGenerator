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
    //how long should the password be? 
  var inputPassLength = prompt("Input a password length between 8 - 128 characters.")
//Input should be validated as a number between 8 - 128

  if (isNaN(inputPassLength) || inputPassLength > 128 || inputPassLength < 8){
  alert("Please enter a value between 8 - 128.");
  return;
   } 
  
  // prompt for lowercase, uppercase, numeric and/or special characters
  var containsLowerCase = confirm("Select OK if you would like your password to include lowercase letters.");
 
  var containsUpperCase = confirm("Select OK if you would like your password to include upperase letters."); 
 
  var containsNumber = confirm("Select OK if you would like your password to include numbers.");

  var containsSpCharacter = confirm("Select OK if you would like your password to include special characters.");

  var passwordOptions = {
  length : inputPassLength,
  lower : containsLowerCase,
  upper : containsUpperCase,
  number : containsNumber, 
  spchar : containsSpCharacter
  }
    console.log(passwordOptions);
  
    // need a for loop to cycle inputPassLenth number of times
  for (i = 0; i < inputPassLength; i++){
    //random number from 0 to passwordOptions.length (lenght of password selected)
    var random = Math.random(passwordOptions.length)+1
  }
    //This function will generate the password characters

   var options = passwordOptions();
   var passwordOptions = [];
    //Final password
   var password = [];
   
   // define pools of content to run randomizer against
   var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
   var lowerCase = ['a','b','c','d','e','f','g,','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
   var numbers = ['1','2','3','4','5','6','7','8','9','0'];
   var spchars = ['!','#','$','%','&','(',')','*','+',',','-','.',':',';','<','>','=','?','@','[',']','^','_','`','{','}','|','~'];

   


  
  //  Need to generate a random index number if selected as a requirement
// 
// var temp = options(random)
// finalPassword.push(temp)
  
  
  // }
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);