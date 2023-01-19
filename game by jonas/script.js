"use strict"
let random_number = Math.floor(Math.random() * 20 + 1)
console.log(random_number)
let check_number = document.querySelector(".check-number")
let guessed_number = document.querySelector(".guess-btn")
let input_element = document.querySelector("input")
let body = document.querySelector("body")
let new_game = document.querySelector(".newgame")
let correct_number = document.querySelector(".correct-number")
let score = Number.parseInt(document.querySelector(".score").textContent)
let highscore = 0



let input_number = document.querySelector("input").value
check_number.addEventListener("click", () => {

    if (!input_number) {
        correct_number.textContent = "😡no number"
    }

    else if (input_number == random_number) {
        correct_number.textContent = "🥳 correct number"
        body.style.backgroundColor = "yellowgreen"
        guessed_number.textContent = random_number
        guessed_number.style.padding = "1rem 5rem"
        if (score > highscore) {
            highscore = score
            document.querySelector(".highscore").textContent = score
        }
    }

    else if(input_number != random_number){
        if(score>1){
            correct_number.textContent=input_number>random_number? "too high":"too low"
            score = score - 1
            document.querySelector(".score").textContent = score
        }
        else {
            correct_number.textContent = "😭 you lost the game"
            document.querySelector(".score").textContent = 0
        }

    }
})

// new game functunality
new_game.addEventListener("click", function () {
    document.querySelector(".score").textContent = "20"
    score = 20
    guessed_number.textContent = "?"
    guessed_number.style.padding = "1rem 1.5rem"
    body.style.backgroundColor = "#000000c8"
    document.querySelector("input").value = ""
    random_number = Math.floor(Math.random() * 20 + 1)
    correct_number.textContent = "start guessing..."
    console.log(random_number)
})
