function createPassword() {
    var userOptions = usersPWOptions();
    //store pw as it's being created
    var chosenPW =[]
// Array to store types of characters to include in password
var characterChoice = [];
// Array to contain one of each type of chosen character to make sure each will be used
var charactersToBeUsed = [];    
if(userOptions.confirmSpecialChar === true) {
    //function writePassword(gettingRandomChar(specialChars))
    characterChoice=characterChoice.concat(specialChars);
    charactersToBeUsed.push(gettingRandomChar(specialChars));
}
//if the boleon statement on confirmNumbers is truthy, run the following function/method
 if(userOptions.confrimNumbers === true) {
    characterChoice=characterChoice.concat(numbers);
    charactersToBeUsed.push(gettingRandomChar(numbers));
};
//if the boleon statement on confirmUpperCase is truthy, run the following function/method
if(userOptions.confirmUpperCase === true) {
    characterChoice=characterChoice.concat(upperCase);
    charactersToBeUsed.push(gettingRandomChar(upperCase));
};
//if the boleon statement on confirmLowerCase is truthy, run the following function/method
if(userOptions.confirmLowerCase === true) {
   characterChoice=characterChoice.concat(lowerCase);
   charactersToBeUsed.push(gettingRandomChar(lowerCase));
};
for (let index = 0; index < userOptions.confirmStrlength; index++) {
   var characterChoice= gettingRandomChar(characterChoice)
   chosenPW.push(characterChoice)
}
for (let index = 0; index < charactersToBeUsed.length; index++) {
   chosenPW[index]=charactersToBeUsed[index]
}
return chosenPW.join('')
    //running loop to check if all variables are false. If so, user is prompted to select again
   if (confirmLowerCase == false && confirmUpperCase == false && confrimNumbers== false && confirmSpecialChar == false) {
        alert("Please select one type of character");
        confirmLowerCase=confirm("Do you want to include lowercase characters?");
        confirmUpperCase=confirm("Do you want to include uppercase characters?");
        confrimNumbers=confirm("Do you want to include numeric characters?");
        confirmSpecialChar=confirm("Do you want to include special characters?");
    }
}
function writePassword() {
    var password = createPassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
};
generateBtn.addEventListener("click", writePassword);