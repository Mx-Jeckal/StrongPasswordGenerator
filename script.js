var CHARACTER_SETS = [
    [true, "Numbers", "0123456789"],
    [true, "Lowercase", "abcdefghijklmnopqrstuvwxyz"],
    [false, "Uppercase", "ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
    [false, "ASCII symbols", "!\"#$%" + String.fromCharCode(38) + "'()*+,-./:;" + String.fromCharCode(60) + "=>?@[\\]^_`{|}~"],
    [false, "Space", " "],
];


// // Assignment Code
// var generateBtn = document.querySelector("#generate");


// // Write password to the #password input
// function writePassword() {
//     var password = generatePassword();
//     var passwordText = document.querySelector("#password");

//     passwordText.value = password;

//     copyBtn.removeAttribute("disabled");
//     copyBtn.focus();
// }

// function copyToClipboard() {
//     // BONUS
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER

// if box is checked add var to charset 

// min length 8 max is 128 step 1
// need arrays of chars in each set
//check respective box add chars to randomization
//either a slider bar or a up/down button for length
//generate button presents a random password based on user selection