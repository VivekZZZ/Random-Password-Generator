const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
const lowerCase = "qwertyuiopasdfghjklzxcvbnm";
const number = "7894561230";
const symbol = "!@#$%~&*?/.";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox.value = password;
    document.getElementById("copyPw").style.display = "none";
}

function copyPassword() {
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value);  
    document.getElementById("copyPw").style.display = "inline";  
}


