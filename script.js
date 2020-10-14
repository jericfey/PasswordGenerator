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
    
    var containsUpperCase = confirm("Select OK if you would like your password to include uppercase letters."); 
    
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
   
  //This function selects a random number from 0 to the length of the array to randomly select a character for the password
   //random number from 0 to passwordOptions.length (length of array)
  //added +1 b/c it will only return values from  0 to passwordOptions.length - 1 without the  + 1
    function randomizer (array) {
      var random = 1 + Math.floor(Math.random() * passwordOptions.length);
      var randomCh = array[random];
      return randomCh;
    }

  

  
  //this function generates the password
  function generatePassword () {
    var options = passwordOptions();
    
    //array to hold all required types of characters for the password
    var passwordChar = [];

    //Final password
    var finalPassword = [];
    // var password = "";
    
    // var random = 1 + Math.floor(Math.random() * passwordOptions.length);
    //Array to store characters that should be included in password based on user's input selection
    //  var passwordOptions = [];
    //  console.log(passwordOptions);

        // need a for loop to cycle inputPassLength number of times
     for (i = 0; i < inputPassLength; i++){
    
    //IF STATEMENTS to determine pool of characters to include in password selection using passwordOptions object
    
    //Add all lowerCase passwordOptions array for required characters passwordChar if true
    if (options.lower){
      //if this is true then add these characters to pool of characters
      passwordChar = passwordChar.concat(lowerCase);
      //if this is true append array with random value from this pool of characters
      finalPassword.push(randomizer(lowerCase));
    }
    console.log(passwordChar);
    //Add all upperCase passwordOptions array for required characters passwordChar if true
    if (options.upper){
      passwordChar = passwordChar.concat(upperCase);
    }
      //Add all numbers passwordOptions array for required characters passwordChar if true
    if (options.number){
      passwordChar = passwordChar.concat(numbers);
    }
      //Add all special characters passwordOptions array for required characters passwordChar if true
    if (options.spchar){
      passwordChar = passwordChar.concat(spchars);
    }


       
  }
  
  // var temp = options(random)
  // finalPassword.push(temp)

   //Turns password array to string value 
  return finalPassword.join('');
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

