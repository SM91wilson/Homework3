// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var length = prompt("how long do you want your password? (between 1 & 128 characters)");
    if(length < 8){
      alert("password too short");
    }else if(length > 128){
      alert("password too long");
    }else{
      var lowCase = confirm("Do you want to include lower case letters?");
      var uppCase = confirm("Do you want to include upper case letters?");
      var numCase = confirm("Do you want to include numbers?");
      var specCase = confirm("Do you want to include special characters?");
    }

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
