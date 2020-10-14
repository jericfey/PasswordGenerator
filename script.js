// Button assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);

// define pools of content to run randomizer against
 var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
 var lowerCase = ['a','b','c','d','e','f','g,','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
 var numbers = ['1','2','3','4','5','6','7','8','9','0'];
 var spchars = ['!','#','$','%','&','(',')','*','+',',','-','.',':',';','<','>','=','?','@','[',']','^','_','`','{','}','|','~'];

 //function that creates the object holding the value responses to password character inclusion questions
 function passwordOptions(){
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
   
      // Creating object that contains prompt/confirm values
      var passwordOptions = {
       length : inputPassLength,
       lower : containsLowerCase,
       upper : containsUpperCase,
       number : containsNumber, 
       spchar : containsSpCharacter
      }
    //Validating at least one option is selected
    if (!passwordOptions.lower && !passwordOptions.upper && !passwordOptions.number & !passwordOptions.spchar) {
      alert("Please select 'OK' for at least one option to generate a password.")
    }
  }

//Need a generatePassword function that prompts user to select criteria for the password
//this function's goal is to create the object passwordOptions
function generatePassword () {
  var options = passwordOptions();
    
    //Final password
   var password = [];
   

   //Array to store characters that should be included in password based on user's input selection
  //  var passwordOptions = [];
  //  console.log(passwordOptions);
 

   //IF STATEMENTS to determine pool of characters to include in password selection using passwordOptions object

    //Add all lowerCase passwordOptions array for required characters if true
    if (passwordOptions.lower){
    passwordOptions = passwordOptions.concat(lowerCase);
    }
    //Add all upperCase passwordOptions array for required characters if true
    if (passwordOptions.upper){
      passwordOptions = passwordOptions.concat(upperCase);
    }
      //Add all numbers passwordOptions array for required characters if true
    if (passwordOptions.number){
      passwordOptions = passwordOptions.concat(numbers);
    }
      //Add all special characters passwordOptions array forrequired characters if true
    if (passwordOptions.spchar){
      passwordOptions = passwordOptions.concat(spchars);
    }

    // need a for loop to cycle inputPassLenth number of times
  // for (i = 0; i < inputPassLength; i++){
    function 
    //random number from 0 to passwordOptions.length (length of array)
    var random = Math.floor(Math.random() * )
    }
 
  
  //  Need to generate a random index number if selected as a requirement// 
  // var temp = options(random)
  // finalPassword.push(temp)

   //Turns password array to string value 
  return password.join('');
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

