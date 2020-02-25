# Homework3
For this project I had to write a javascript file that generated a random password using the types of characters the user picks and within a specified length.

The script begins with adding a var assigned to the button with the id of generate in the HTML. 
Next I set up variables for the arrays that will contain all the available characters for the password. The lowArray, uppArray and numArray create the arrays of their characters using the character codes and returning a string of that character. The specArray contains a list of all special character to be used.
The following section creates the variables responsible for selecting a random character from each array.
They each contain a function that creates a random number within the array length they are looking in and returning the character associated with that index.

The bottom of the javascript file contains the event listener attached to the generate button. It listens for a click event and runs the writePassword function.

The writePassword function contains a var called passwordText that is linked to the password id in the HTML, a var called pwLength that contains a prompt asking the user to input a length for the password between 8 and 128 characters with alerts for if the password is too long or too short.
Then a while loop is used while the pwLength is within the accepted values, it contains variables that will hold either a boolean value produced through confirms. This is for the user to decide which type of characters to be included in their password.
A variable is created called totalArray whuch is initially an empty array. The following if statements use the previous confirms to decide which functions to add to the array. For example if the users chose to include numbers but not uppercase letters, var numCase would be true and so the function for selecting a random number will be added to the totalArray and var uppCase will be false so the function for random uppercase letters will not.
The end if statement says that if the array contains nothing, no password will be produced.
A break is used to stop the while loop.

Inside the writePassword function is the generatePassword function. 
This contains an empty variable called generatedPassword.
The random index variable is created to make a random number within the length of the totalArray that will be used as the index of the totalArray for the for loop. For each loop it chooses a random index, uses the function assigned to that index, adds the resultant character to the generatedPassword variable created earlier and repeats until it reaches the password length.

The writePassword function ends with the var password being given the value created from the generatePassword function, and then changing the passwordText variable equal the value of the password var, this shows the password on screen in the div that contains the password id.