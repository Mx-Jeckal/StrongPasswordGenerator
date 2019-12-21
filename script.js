var inputIndex = document.getElementsByTagName('input')[0];
var inputIndex1 = document.getElementsByTagName('input')[1];
var inputIndex2 = document.getElementsByTagName('input')[2];
var inputIndex3 = document.getElementsByTagName('input')[3];
var lengthEl = document.getElementsByTagName("input")[4]
var displayPW = document.querySelector('#password');
var genBtn = document.createElement("button");
var copyBtn = document.createElement("button");
var numeric = ""
var string = "";
var punctuation = '';
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"


lengthEl.step = "1"
lengthEl.max = '128'
lengthEl.min = '8'

function password_generator(len) {
    event.preventDefault
    var slider_value = parseInt(lengthEl.value)
    var length = slider_value;
    var password = "";
    var character = "";

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
    console.log(slider_value);

}
// append generate PW button
document.querySelector("#generate").appendChild(genBtn);
genBtn.textContent = "Generate Password";

// click the generate password button to get a result
genBtn.onclick = function() {
    if (this.textContent == "") {
        alert('You must select at least one character set')
    } else { displayPW.textContent = password_generator() }

};



// copy to clipboard
document.querySelector("#copy").appendChild(copyBtn);
copyBtn.textContent = "Copy to Clipboard";

copyBtn.onclick = function() {
    /* Get the text field */
    var copyText = displayPW.innerHTML;
    navigator.clipboard.writeText(copyText)

    /* Alert the copied text */
    alert("Copied the clipboard: " + copyText);
}

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
    if (string == false) {
        string = upper
    } else { string = "" }
});
inputIndex3.addEventListener("click", function() {
    if (inputIndex3.checked == true) {
        punctuation = "!@#$%^&*()_+~`|}{[]\:;?><,./-="
    } else { punctuation = "" }
})