// // Assignment Code
var generateBtn = document.querySelector("#generate");

const generatePassword = () => {
  //prompt how many characters user wants
  const passwordLength = parseInt(prompt('Choose a password length between 8 and 128'))
  if (passwordLength < 8 || passwordLength > 128) {
    alert('Choose a password length between 8 and 128')
    return
  }
  // define all variables
  const numbers = ['0123456789']
  const lowerCase = ['abcdefghijklmnopqrstuvwxyz']
  const upperCase = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ']
  const specCharacters = ['!%,&*+-.,/<>?~@']

  // see which characters user wants to use
  const confirmNumbers = confirm('Click OK to include numbers')
  const confirmLowerCase = confirm('Click OK to include lower case letters')
  const confirmUpperCase = confirm('Click OK to include upper case letters')
  const confirmSpecCharacters = confirm('Click OK to include special characters')
  if (confirmNumbers === false && confirmLowerCase === false && confirmUpperCase === false && confirmSpecCharacters === false) {
    alert('You did not pick any charset')
    return
  }
  // assign action to each words passwords parameter
  let passwordCharacters = ''
  if (confirmNumbers) {
    passwordCharacters += numbers
  }
  if (confirmLowerCase) {
    passwordCharacters += lowerCase
  }
  if (confirmUpperCase) {
    passwordCharacters += upperCase
  }
  if (confirmSpecCharacters) {
    passwordCharacters += specCharacters
  }

  // grab random password and add it in
  let newPassword = ''
  for (let i = 0; i < passwordLength; i++) {
    let randomPassword = Math.floor(Math.random() * passwordCharacters.length)
    newPassword += passwordCharacters[randomPassword]
  }
  return newPassword
}

// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
