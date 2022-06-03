let generatePass = document.getElementById("generatePasswordBtn")

let passwordEl1 = ""
let passwordEl2 = ""
let passwordEl3 = ""
let passwordEl4 = ""

let password1 = document.querySelector("#Paswd1")
let password2 = document.querySelector("#Paswd2")
let password3 = document.querySelector("#Paswd3")
let password4 = document.querySelector("#Paswd4")

// Length control toggle
let incBtn = document.getElementById("increment")
let decBtn = document.getElementById("decrement")
let inputLen = document.getElementById("password-length")

incBtn.addEventListener('click', ()=>{
    inputLen.value = parseInt(inputLen.value) + 1
})

decBtn.addEventListener('click', ()=>{
    inputLen.value = parseInt(inputLen.value) - 1
})


// displaying the passwords on the buttons
function render(){

     passwordEl1 = generateRandomPass()
     password1.textContent = passwordEl1
     console.log(password1)
 
     passwordEl2 = generateRandomPass()
     password2.textContent = passwordEl2
 
     passwordEl3 = generateRandomPass()
     password3.textContent = passwordEl3
 
     passwordEl4 = generateRandomPass()
     password4.textContent = passwordEl4
}

// function to generate a random combination of password
function generateRandomPass() {
    let pass = ""
    // string consist of Alphabets(lowercase and uppercase), Numbers and Special Characters

    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz" + "!@#$%^&*" + "1234567890"

    for (let i = 1; i <= inputLen.value; i++) {
        let char = Math.floor(Math.random() * str.length)
        pass = pass + str.charAt(char)
        // console.log(pass)
    }

    return pass;

}

// copy password 1
function copyPaswd1() {
    
    navigator.clipboard.writeText(passwordEl1)
    
    var tooltip = document.getElementById("Paswd1")
    // tooltip.innerHTML = "Copied: " + passwordEl1

}

function copyPaswd2() {
    
    navigator.clipboard.writeText(passwordEl2)
    
    var tooltip = document.getElementById("Paswd2")

}

function copyPaswd3() {
    
    navigator.clipboard.writeText(passwordEl3)
    
    var tooltip = document.getElementById("Paswd3")

}

function copyPaswd4() {
    
    navigator.clipboard.writeText(passwordEl4)
    
    var tooltip = document.getElementById("Paswd4")

}