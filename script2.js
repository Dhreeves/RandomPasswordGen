
// Variables

var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var uppercaseArr = uppercase.split("");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var lowercaseArr = lowercase.split("");
var number = "0123456789";
var numberArr = number.split("");
var symbol = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";
var symbolArr = symbol.split("");
var Password = "";

// call the generate function
window.onload = function generate() {
    var allChars = [];



    // Dynamic variables
    // prompt happens 

    var passwordLength = prompt("You can have 8-128 characters in your new password.\nHow many would you like?");

    if (passwordLength < 8 || passwordLength > 128) {
        alert("You MUST pick between 8 and 128 characters long!\nPlease start over.");
    }

    // Confirm all characters used

    else {
        if (confirm("Do you want UPPERCASE letters in your password?")) {
            Array.prototype.push.apply(allChars, uppercaseArr);
        }

        if (confirm("Do you want lowercase letters in your password.?")) {
            Array.prototype.push.apply(allChars, lowercaseArr);
        }

        if (confirm("Do you want numbers in your password?")) {
            Array.prototype.push.apply(allChars, numberArr);
        }

        if (confirm("Do you want symbols in your password?")) {
            Array.prototype.push.apply(allChars, symbolArr);
        }

        if (allChars.length === 0) {
            alert("You MUST choose at lease 1 type of character to make a password!\nPlease start over.");
        }

        // Run for loop and generate password 

        else {
            for (var i = 0; i < passwordLength; i++) {
                var random = Math.floor(Math.random() * allChars.length);
                Password += allChars[random];
            }
        }
    }

    // Show password after click

    document.getElementById("generate").addEventListener("click", generateButton);

    function generateButton() {
        document.getElementById("password").innerHTML = Password;
    }

}



