// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowArray = [...Array(26)].map((val, i) => String.fromCharCode(i + 97));
var uppArray = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
var numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specArray = []
console.log(lowArray)
console.log(uppArray)
console.log(numArray)
// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var length = prompt("how long do you want your password? (between 8 & 128 characters)");
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
