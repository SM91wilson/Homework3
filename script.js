// Assignment Code
var generateBtn = document.querySelector("#generate");
// arrays for characters used for the password
var lowArray = [...Array(26)].map((val, i) => String.fromCharCode(i + 97));
var uppArray = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
var numArray = [...Array(10)].map((val, i) => String.fromCharCode(i + 48));
var specArray = ["!","@","#","$","%","^","&","*","(",")","_","-","+","=","~","`","{","}","[","]","|","\\",":",";","\"","'","<",">","?","\/"]
console.log(lowArray)
console.log(uppArray)
console.log(numArray)
console.log(specArray)

function randomLow() {
  lowArray[Math.floor(Math.random() * lowArray.length)];
}

// Write password to the #password input
function writePassword() {
  //(not a comment, need this!!!!) var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // prompt for length of password
  var length = prompt("how long do you want your password? (between 8 & 128 characters)");
    if(length < 8){
       alert("password too short");
    }else if(length > 128){
      alert("password too long");
    }else{
      // confirms for which characters to use
      var lowCase = confirm("Do you want to include lower case letters?");
      var uppCase = confirm("Do you want to include upper case letters?");
      var numCase = confirm("Do you want to include numbers?");
      var specCase = confirm("Do you want to include special characters?");
    }

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
