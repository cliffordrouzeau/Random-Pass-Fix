// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  
  var length = prompt("Please choose length of passwork lengeth between 8-128");
  if (length >=8 && length <=128) {
    alert("Thank you, your password will be " + length + " characters long.");
  } else {
        alert("Please choose a vailid lenth")
        var length = prompt("Please choose length of passwork lengeth between 8-128");
      }

  if (length >=8 && length <=128) {
    var lCase = prompt("Please choose if you want lowercase characters in your password please type yes or no")
  }

 if (lCase == "yes") {
  alert("Thank you, Your password will contain lowercase characters")
  var lCase = "abcdefghijklmnopqrstuvwxyz"
 } else if (lCase == "no") {
 alert("Thank you, Your password will not contain lowercase characters")
 var lCase = ""
 } else {
  alert("Please enter yes or no")
  var lCase = prompt("Please choose if you want lowercase characters in your password please type yes or no")
 }

 if (lCase == "abcdefghijklmnopqrstuvwxyz" || lCase =="") {
  var uCase = prompt("Please choose if you want uppercase characters in your password please type yes or no")
}

if (uCase == "yes") {
  alert("Thank you, Your password will contain uppercase characters")
  var uCase = "ABCEFGHIJKLMNOPQRSTUVWXYZ"
 } else if (uCase == "no") {
 alert("Thank you, Your password will not contain uppercase characters")
 var uCase = ""
 } else {
  alert("Please enter yes or no")
  var uCase = prompt("Please choose if you want uppercase characters in your password please type yes or no")
 }

 if (uCase == "ABCEFGHIJKLMNOPQRSTUVWXYZ" || uCase =="") {
  var nume = prompt("Please choose if you want numeric characters in your password please type yes or no")
}

if (nume == "yes") {
  alert("Thank you, Your password will contain uppercase characters")
  var nume = "123456789"
 } else if (nume == "no") {
 alert("Thank you, Your password will not contain uppercase characters")
 var nume = ""
 } else {
  alert("Please enter yes or no")
  var nume = prompt("Please choose if you want numeric characters in your password please type yes or no")
 }

 if (nume == "123456789" || nume =="") {
  var sChar = prompt("Please choose if you want special characters in your password please type yes or no")
}

if (sChar == "yes") {
  alert("Thank you, Your password will contain uppercase characters")
  var sChar = "#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
 } else if (sChar == "no") {
 alert("Thank you, Your password will not contain uppercase characters")
 var sChar = ""
 } else {
  alert("Please enter yes or no")
  var sChar = prompt("Please choose if you want numeric characters in your password please type yes or no")
 }

 if (lCase == "" && uCase == "" && nume == "" && sChar == "" ) {
 alert("Must choose at least one to include")
 }
var chars = lCase + uCase + nume + sChar

var password = '';
        for (var i=0; i<length; i++) {
            var rnum = Math.floor(Math.random() * chars.length);
            password += chars.substring(rnum,rnum+1);
        }
        return password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
