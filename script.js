// Assignment Code
var generateBtn = document.querySelector("#generate");

// arrays for characters used for the password
var lowArray = [...Array(26)].map((val, i) => String.fromCharCode(i + 97));
var uppArray = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
var numArray = [...Array(10)].map((val, i) => String.fromCharCode(i + 48));
var specArray = ["!","@","#","$","%","^","&","*","(",")","_","-","+","=","~","`","{","}","[","]","|","\\",":",";","\"","'","<",">","?","\/"]

// functions for getting random characters from the arrays
var lower = function randomLow() {
  return lowArray[Math.floor(Math.random() * lowArray.length)];
}
var upper = function randomUpp(upper) {
  return uppArray[Math.floor(Math.random() * uppArray.length)];
}
var number = function randomNum(number) {
  return numArray[Math.floor(Math.random()* numArray.length)];
}
var special = function randomSpec(special) {
  return specArray[Math.floor(Math.random() * specArray.length)];
}

// Write password to the #password input
function writePassword() {

  var passwordText = document.querySelector("#password");

  // prompt for length of password, stops if <8 or >128
  var pwlength = prompt("how long do you want your password? (between 8 & 128 characters)");
    if(pwlength < 8){
       alert("Password too short.");
    }
    else if(pwlength > 128){
      alert("Password too long.");
    }
  
  //while loop to get all the confirms while password length is a valid value 
  while (pwlength > 8 && pwlength < 128) {

      // confirms for which character types to use
      var lowCase = confirm("Do you want to include lower case letters?");
        if(lowCase === true){
          alert("Lowercase letters will be included.");
        }
      
      var uppCase = confirm("Do you want to include upper case letters?");
        if(uppCase === true){
          alert("Uppercase letters will be included.");
        }
       
      var numCase = confirm("Do you want to include numbers?");
        if(numCase === true){
          alert("Numbers will be included.");
        }
      
      var specCase = confirm("Do you want to include special characters?");
        if(specCase === true){
          alert("Special characters will be included.");
        }
       
      // creating an empty array and adding functions that create a random character from a specified array if the related confirm comes back true
  var totalArray = [];
        if(lowCase == true){totalArray.push(lower);
        }
        else {"";}
        if(uppCase == true){totalArray.push(upper);
        }
        else {"";}
        if(numCase == true){totalArray.push(number);
        }
        else {"";}
        if(specCase == true){totalArray.push(special);
        }
        else {"";}

        // if array contains no functions, return nothing
    if(totalArray === 0){
      return "";
    } 

    // breaks the while loop 
    break;
  }

    // generate password function
      function generatePassword() {
      let generatedPassword = '';
      
      // for loop picking a random index in total array which runs the function of the index and produces a random character which is added to the generatedPassword var, repeating until reaching password length
      for(let i = 0; i < pwlength; i++) {
        var randomIndex = totalArray[Math.floor(Math.random() * totalArray.length)];
        generatedPassword += randomIndex();
      }
      
      // returns the generated pasword
      return generatedPassword;
    }
  
    // uses the generated password as the text for the passwordText var
  var password = generatePassword();
  passwordText.value = password;
} 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
