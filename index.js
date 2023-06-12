const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const password1El = document.getElementById("password1-el")
const password2El = document.getElementById("password2-el")
const numChar = document.getElementById("num-char")
const Btn = document.getElementById("btn")


function getPassword() {
    password1El.textContent = ""
    password2El.textContent = ""
    for (let i=1; i<=numChar.value; i++) {
    let x = Math.floor(Math.random()*characters.length)
    let y = Math.floor(Math.random()*characters.length)
    password1El.textContent += characters[x]
    password2El.textContent += characters[y]
    }
}

Btn.addEventListener("click", getPassword)