
function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols){

    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "01234564789";
    const symbolChars = "~!@#$%^&*()_+";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowerCaseChars : "";
    allowedChars += includeUpperCase ? upperCaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(length <= 0){
        return `(password length must be at least 1)`;
    }
    if(allowedChars.length === 0){
        return "(At least 1 set of characters needs to be selected)";
    }

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

const passWordLength = 10;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = false;

const password = generatePassword(passWordLength, 
                                  includeLowerCase, 
                                  includeUpperCase, 
                                  includeNumbers, 
                                  includeSymbols);

console.log(`Generated password: ${password}`);