// Assignment code here
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var sc = "~!#$%^&*()_+?/";
var num = 1234567890;

var isLowerCase, isUpperCase, isNumb, isSC;
var passwordLength;
var finalArray = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  passwordLength = window.prompt ("How many characters would you like the password to be? Choose between 8-28")
 if (passwordLength >= 8 && passwordLength <= 128 ) {
  window.confirm ("Your password length is"  + passwordLength + "characters long");

 } else {
  window.alert("Please enter correct value");
 }

isLowerCase = window.confirm ("will your password include lowercase letters?");
isUpperCase = window.confirm ("will your password include uppercase letters?");
isNumb = window.confirm ("Would you like to include numbers??");
isSC = window.confirm ("Would you like to include special characters??");

if ((isLowerCase || isNumb || isUpperCase || isSC) && (passwordLength >= 8)
)  {
  generatePassword ();
}else  {
  window.alert ("doesn't meet requirement");
}
  
};





  var generatePassword = function (){
    var password = "";
    if(isLowerCase) {
      finalArray += lowerCase;
    }
    if (isUpperCase) {
      finalArray += upperCase 
    }
if (isNumb) {
  finalArray +=num 
} 
if (isSC) {
  finalArray +=sc
}
  for(var i=0; i<=passwordLength; i++){
    password += finalArray.charAt(Math.floor(Math.random() * finalArray.length))
  }

  var passwordText = document.querySelector("#password");

  passwordText.value = password; 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
