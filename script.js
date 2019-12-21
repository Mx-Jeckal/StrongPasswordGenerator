// var CHARACTER_SETS = [
//     [true, "Numbers", "0123456789"],
//     [true, "Lowercase", "abcdefghijklmnopqrstuvwxyz"],
//     [false, "Uppercase", "ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
//     [false, "Special", "!\"#$%" + String.fromCharCode(38) + "'()*+,-./:;" + String.fromCharCode(60) + "=>?@[\\]^_`{|}~"],
//     [false, "Space", " "],
// ];
var inputIndex = document.getElementsByTagName('input')[0];
var inputIndex1 = document.getElementsByTagName('input')[1];
var inputIndex2 = document.getElementsByTagName('input')[2];
var inputIndex3 = document.getElementsByTagName('input')[3];
var NumbersEl = document.querySelector('Numbers');
var LowercaseEl = document.getElementById('lowercase');
var UppercaseEl = document.getElementById('uppercase');
var SpecialEl = document.getElementById('special');
var lengthEl = document.getElementById('length');
var displayPW = document.querySelector('#password');
var genBtn = document.createElement("button");
var copyBtn = document.createElement("button");

var numeric = ""
var string = ""; //to upper 
var punctuation = '';
var upper = string.toUpperCase

function password_generator(len) {
    event.preventDefault
    var length = (len) ? (len) : (10);
    var password = "";
    var character = "";
    var crunch = true;

    while (password.length < length) {
        entity1 = Math.ceil(string.length * Math.random() * Math.random());
        entity2 = Math.ceil(numeric.length * Math.random() * Math.random());
        entity3 = Math.ceil(punctuation.length * Math.random() * Math.random());
        hold = string.charAt(entity1);
        hold = (password.length % 2 == 0) ? (hold) : (hold);
        character += hold;
        character += numeric.charAt(entity2);
        character += punctuation.charAt(entity3);
        password = character;
    }
    password = password.split('').sort(function() { return 0.5 - Math.random() }).join('');
    return password.substr(0, len);

}

document.querySelector("#generate").appendChild(genBtn);
genBtn.textContent = "Generate Password";
genBtn.onclick = function() {
    displayPW.textContent = password_generator()
};

// copy to clipboard
document.querySelector("#copy").appendChild(copyBtn);
copyBtn.textContent = "Copy to Clipboard";

// add numbers to generator

inputIndex.addEventListener("click", function() {
    if (inputIndex.checked == true) {
        numeric = "0123456789"
    } else { numeric = "" }
});
inputIndex1.addEventListener("click", function() {
    if (inputIndex1.checked == true) {
        string = "abcdefghijklmnopqrstuvwxyz"
    } else { string = "" }
});
inputIndex2.addEventListener("click", function() {
    if (inputIndex2.checked == true) {
        numeric = "0123456789"
    } else { numeric = "" }
});
inputIndex3.addEventListener("click", function() {
    if (inputIndex3.checked == true) {
        punctuation = "!@#$%^&*()_+~`|}{[]\:;?><,./-="
    } else { punctuation = "" }
})




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