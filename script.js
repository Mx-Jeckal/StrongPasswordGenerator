// var CHARACTER_SETS = [
//     [true, "Numbers", "0123456789"],
//     [true, "Lowercase", "abcdefghijklmnopqrstuvwxyz"],
//     [false, "Uppercase", "ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
//     [false, "Special", "!\"#$%" + String.fromCharCode(38) + "'()*+,-./:;" + String.fromCharCode(60) + "=>?@[\\]^_`{|}~"],
//     [false, "Space", " "],
// ];

// var NumbersEl = document.getElementById('numbers')
// var LowercaseEl = document.getElementById('lowercase')
// var UppercaseEl = document.getElementById('uppercase')
// var SpecialEl = document.getElementById('special')
var lengthEl = document.getElementById('length')
var displayPW = document.querySelector('#password');
var genBtn = document.createElement('button');
var copyBtn = document.createElement('button');
document.querySelector("#generate").appendChild(genBtn);
genBtn.textContent = "Generate Password";
genBtn.onclick = function() {
        password_generator;
        console.log(password_generator());
        displayPW.textContent = password_generator()

    }
    // copy to clipboard
document.querySelector("#copy").appendChild(copyBtn);
copyBtn.textContent = "Copy to Clipboard";

// lengthEl.ejSlider({
//     sliderType: ej.SliderType.Range,
//     values: [30, 60],
//     width: "500",
//     showButtons: true
// });
lengthEl.ejSlider({
    SliderType: EJ.SliderType.Range,
    values: [20, 50],
    width: "150",
})

function password_generator(len) {
    event.preventDefault
    var length = (len) ? (len) : (10);
    var string = "abcdefghijklmnopqrstuvwxyz"; //to upper 
    var numeric = '0123456789';
    var punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    var password = "hey";
    var character = "";
    var crunch = true;
    while (password.length < length) {
        entity1 = Math.ceil(string.length * Math.random() * Math.random());
        entity2 = Math.ceil(numeric.length * Math.random() * Math.random());
        entity3 = Math.ceil(punctuation.length * Math.random() * Math.random());
        hold = string.charAt(entity1);
        hold = (password.length % 2 == 0) ? (hold.toUpperCase()) : (hold);
        character += hold;
        character += numeric.charAt(entity2);
        character += punctuation.charAt(entity3);
        password = character;
    }
    password = password.split('').sort(function() { return 0.5 - Math.random() }).join('');
    return password.substr(0, len);

};
// generateBtn.addEventListener("click", console.log("something"))

// var passwordText = password_generator.value
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