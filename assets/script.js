var generateBtn = document.querySelector("#generate");

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
 } else if (lCase == "no") {
 alert("Thank you, Your password will not contain lowercase characters")
 } else {
  alert("Please enter yes or no")
  var lCase = prompt("Please choose if you want lowercase characters in your password please type yes or no")
 }

 if (lCase == "yes" || lCase =="no") {
  var uCase = prompt("Please choose if you want uppercase characters in your password please type yes or no")
}

if (uCase == "yes") {
  alert("Thank you, Your password will contain uppercase characters")
 } else if (uCase == "no") {
 alert("Thank you, Your password will not contain uppercase characters")
 } else {
  alert("Please enter yes or no")
  var uCase = prompt("Please choose if you want uppercase characters in your password please type yes or no")
 }

 if (uCase == "yes" || uCase =="no") {
  var nume = prompt("Please choose if you want numeric characters in your password please type yes or no")
}

if (nume == "yes") {
  alert("Thank you, Your password will contain numeric characters")
 } else if (nume == "no") {
 alert("Thank you, Your password will not contain numeric characters")
 } else {
  alert("Please enter yes or no")
  var nume = prompt("Please choose if you want numeric characters in your password please type yes or no")
 }

 if (nume == "yes" || nume =="no") {
  var sChar = prompt("Please choose if you want special characters in your password please type yes or no")
}

if (sChar == "yes") {
  alert("Thank you, Your password will contain special characters")
 } else if (sChar == "no") {
 alert("Thank you, Your password will not contain special characters")
 } else {
  alert("Please enter yes or no")
  var sChar = prompt("Please choose if you want special characters in your password please type yes or no")
 }

if (lCase == "yes"){
var lCase = "abcdefghijklmnopqrstuvwxyz"
}
if (lCase == "no"){
  var lCase = ""
  }
  if (uCase == "yes"){
    var uCase = "ABCEFGHIJKLMNOPQRSTUVWXYZ"
    }
    if (uCase == "no"){
      var uCase = ""
      }
      if (nume == "yes"){
        var nume = "123456789"
        }
        if (nume == "no"){
          var nume = ""
          }
          if (sChar == "yes"){
            var sChar = "#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
            }
            if (sChar == "no"){
              var sChar = ""
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

generateBtn.addEventListener("click", writePassword);