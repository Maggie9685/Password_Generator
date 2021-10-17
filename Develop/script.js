// Assignment code here
var charNum = "0123456789";
var charLow = "abcdefghijklmnopqrstuvwxyz";
var charUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charSP = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var position = 0;

var generatePassword = function() {
  var PW = "";
  //Get password length, if invalid, keep asking
  while(1) {
    var promptPWlength = window.prompt('What is the password length? Enter number between 8 and 128:');
    if (promptPWlength === "" || promptPWlength === null) {
      window.alert("You need to provide a valid answer! Please try again.");
    }
    else if (parseInt(promptPWlength) < 8 || parseInt(promptPWlength) > 128) {
      window.alert("You need to provide a valid answer! Please try again.");
    } else
    break;
  }

  //Get criteria, if less than one is picked, keep asking.
  while(1) {
    var promptPWlow = confirm('Do you want to include lowercase?');
    var promptPWup = confirm('Do you want to include uppercase?');
    var promptPWnum = confirm('Do you want to include numeric?');
    var promptPWspchar = confirm('Do you want to include special character?');
    if(promptPWlow || promptPWup || promptPWnum || promptPWspchar)
      break;
    window.alert("You need to pick at least one criteria! Please try again.");
  }

  //Always clear Character List 
  var charList = "";

  if (promptPWlow) {
    charList = charList + charLow;
  }
  if (promptPWup) {
    charList = charList + charUp;
  }
  if (promptPWnum) {
    charList = charList + charNum;
  }
  if (promptPWspchar) {
    charList = charList + charSP;
  }

  for(var i = 0; i < promptPWlength; i++){
        position = Math.floor(Math.random() * charList.length);
        PW += charList.substring(position, position + 1);
  }

  return PW;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


