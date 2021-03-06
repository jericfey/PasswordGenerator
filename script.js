// Button assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// define pools of content to run randomizer against
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var spchars = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  ":",
  ";",
  "<",
  ">",
  "=",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "}",
  "|",
  "~",
];

//This function selects a random number from 0 to the length of the array to randomly select a character for the password
//random number from 0 to passwordOptions.length (length of array)
//added +1 b/c it will only return values from  0 to passwordOptions.length - 1 without the  + 1
function randomizer(array) {
  var randomNum = Math.floor(Math.random() * array.length);
  var random = array[randomNum];
  return random;
}

//function that creates the object holding the value responses to password character inclusion questions
function passwordOptions() {
  //how long should the password be?
  var inputPassLength = prompt(
    "Input a password length between 8 - 128 characters."
  );

  //Input should be validated as a number between 8 - 128
  if (isNaN(inputPassLength) || inputPassLength > 128 || inputPassLength < 8) {
    alert("Please enter a value between 8 - 128.");
    return;
  }
  // prompt for lowercase, uppercase, numeric and/or special characters
  var containsLowerCase = confirm(
    "Select OK if you would like your password to include lowercase letters."
  );

  var containsUpperCase = confirm(
    "Select OK if you would like your password to include uppercase letters."
  );

  var containsNumber = confirm(
    "Select OK if you would like your password to include numbers."
  );

  var containsSpCharacter = confirm(
    "Select OK if you would like your password to include special characters."
  );

  //Validating at least one option is selected
  if (
    !containsLowerCase &&
    !containsUpperCase &&
    !containsNumber &&
    !containsSpCharacter
  ) {
    alert("Please select 'OK' for at least one option to generate a password.");
  }

  // Creating object that contains prompt/confirm values
  var passwordOptions = {
    length: inputPassLength,
    lower: containsLowerCase,
    upper: containsUpperCase,
    number: containsNumber,
    spchar: containsSpCharacter,
  };
  return passwordOptions;
}

//this function generates the password
function generatePassword() {
  var options = passwordOptions();

  //Array to store characters that should be included in password based on user's input selection
  var charactersSelected = [];

  //array to hold all required types of characters for the password
  var passwordCharacters = [];

  //Final password array to be filled as password characters are selected
  var finalPassword = [];

  //IF STATEMENTS to determine pool of characters to include in password selection using passwordOptions object

  //Add all lowerCase passwordOptions array for required characters passwordCharacters if true
  if (options.lower) {
    //if this is true then add these characters to pool of characters
    charactersSelected = charactersSelected.concat(lowerCase);
  }
  //Add all upperCase passwordOptions array for required characters passwordChar if true
  if (options.upper) {
    charactersSelected = charactersSelected.concat(upperCase);
  }
  //Add all numbers passwordOptions array for required characters passwordChar if true
  if (options.number) {
    charactersSelected = charactersSelected.concat(numbers);
  }
  //Add all special characters passwordOptions array for required characters passwordChar if true
  if (options.spchar) {
    charactersSelected = charactersSelected.concat(spchars);
  }
  // console.log(`total options: ${charactersSelected}`);
  // need a for loop to cycle inputPassLength number of times
  for (let i = 0; i < options.length; i++) {
    let temp = randomizer(charactersSelected);
    finalPassword.push(temp);
  }

  // console.log(`final password: ${finalPassword}`);

  //Turns password array to string value
  return finalPassword.join("");
}
