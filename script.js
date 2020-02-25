// Assignment Code
var generateBtn = document.querySelector("#generate");
// arrays for characters used for the password
var lowArray = [...Array(26)].map((val, i) => String.fromCharCode(i + 97));
var uppArray = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
var numArray = [...Array(10)].map((val, i) => String.fromCharCode(i + 48));
var specArray = ["!","@","#","$","%","^","&","*","(",")","_","-","+","=","~","`","{","}","[","]","|","\\",":",";","\"","'","<",">","?","\/"]


// functions for getting random characters from the arrays
function randomLow() {
  return lowArray[Math.floor(Math.random() * lowArray.length)];
}
function randomUpp() {
  return uppArray[Math.floor(Math.random() * uppArray.length)];
}
function randomNum() {
  return numArray[Math.floor(Math.random() * numArray.length)];
}
function randomSpec() {
  return specArray[Math.floor(Math.random() * specArray.length)];
}

// object with functions for the random characters
var randoms = {
  lower: randomLow,
  upper: randomUpp,
  number: randomNum,
  special: randomSpec
};

// Write password to the #password input
function writePassword() {

  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // prompt for length of password, stops if <8 or >128
  var pwlength = prompt("how long do you want your password? (between 8 & 128 characters)");
    if(pwlength < 8){
       alert("Password too short.");
    }
    else if(pwlength > 128){
      alert("Password too long.");
    }
  
  while (pwlength > 8 && pwlength < 128) {

      // confirms for which characters to use
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
       
  break;
  }
console.log(uppCase, lowCase, numCase, specCase);

    // generate password function
    function generatePassword() {
      let generatedPassword = '';

      // should add arrays to new array that have been confirmed earlier
      let totalArray = [];
        if(lowCase === true){totalArray.push(randomLow);
        }
        else {"";}
        if(uppCase === true){totalArray.push(randomUpp);
        }
        else {"";}
        if(numCase === true){totalArray.push(randomNum);
        }
        else {"";}
        if(specCase === true){totalArray.push(randomSpec);
        }
        else {"";}

        // if array returns no characters return nothing
    if(totalArray === 0){
      return "";
    }

    // for loop picking a random index in total array which runs the function of the index and produces a random character, repeating until reaching password length
    for(let i = 0; i < pwlength; i++) {
      var randomIndex = i.Math.floor(Math.random() * (totalArray.length)-1);
      return totalArray[randomIndex];
    }
    
    
    
  passwordText.value = password;

} 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
