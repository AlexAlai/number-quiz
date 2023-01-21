console.log(18);
console.log("chicken man can fly as a fat chicken because he was born by a pigeon and a rooster dad");
let fatManLives = 3
console.log("lives " + fatManLives);
let bird = "chicken"
console.log(bird);
let bullets = 1000000
let nickname = "joe mama"
let joeMama = "eat cookies"
let meliodastherollHackTheWholeWorld = true
let hatColorIsGreeen = true
let sword = "blue rose sword"
console.log("player: " + nickname);
let okButton = document.getElementById("okButton")
let refreshbutton = document.getElementById("refreshbutton")
let secret = Math.floor(Math.random() * 10)
let playerInput = document.getElementById("playerInput")
let title = document.getElementById("title")
let lives = document.getElementById("lives")
let rules = document.getElementById("rules")
okButton.onclick = function (event) {
    event.preventDefault()
    // playerInput.value="stranger things and demigorgans"
    console.log(playerInput.value);
    rules.innerHTML = "congrates"
    // if (pizza is good){
    //     eat it
    // }
    if (playerInput.value == secret) {
        title.innerHTML = "u win"
        console.log("you win");
    }
    else {
        console.log("u are a person with 2.5 brain cells ")

        if (secret > playerInput.value) {
            rules.innerHTML = "secret number is bigger"
        }
        if (secret < playerInput.value) {
            rules.innerHTML = "secret number is less"
        }
        fatManLives = fatManLives - 1

        lives.innerHTML = "lives:"+ fatManLives
        title.innerHTML = "u lost a life  "
        if (fatManLives == 0) {
            title.innerHTML = "u lost. secret number was " + secret
            okButton.disabled = true
        }


    }








}
refreshbutton.onclick= function () {
    console.log("that time i got reincarnated as a slime")
    title.innerHTML = "quiz"
     fatManLives = 3
     lives.innerHTML ="lives:"+fatManLives
     okButton.disabled = false
     secret = Math.floor(Math.random() * 10)
     rules.innerHTML = "rules:guess the number and type it and click ok"
     playerInput.value= ""
}