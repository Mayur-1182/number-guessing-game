let random_number=Math.floor(Math.random()*20+1)
let again_btn=document.querySelector(".reload")
let check_btn=document.querySelector(".check")
let instruction=document.querySelector(".instruction")
let secret_number=document.querySelector(".secret")
let score=Number.parseInt(document.querySelector(".current_score span").textContent)
let highscore=Number.parseInt(document.querySelector(".high_score span").textContent)
console.log(random_number)

check_btn.addEventListener("click",()=>{
    let input_number=document.querySelector(".guess-number").value

    if(!input_number){
        instruction.textContent="no number"
        instruction.style.color="maroon"
        score = score - 1
        document.querySelector(".current_score span").textContent = score
        document.querySelector(".chances_left span").textContent=score
    }

   else if(input_number!=random_number){
        if(score>=1){
            instruction.textContent=input_number<random_number ? " too lower " : " too higher "
            score = score - 1
            document.querySelector(".current_score span").textContent = score
            document.querySelector(".chances_left span").textContent=score
        }
        else{
            instruction.textContent=" lost  game"
            document.querySelector(".curent_score span").textContent="0"
            document.querySelector(".chances_left span").textContent="0"
        }
  }
    else if(random_number==input_number){

        if(score > highscore){
            highscore = score
            document.querySelector(".high_score span").textContent=score
        }

        instruction.textContent="correct number"
        secret_number.textContent=input_number
        theme_seccess(secret_number)
        theme_seccess(check_btn)
        instruction.style.color="#003300"
        document.querySelector(".game").style.backgroundColor="yellowgreen"

    }
   
})
function theme_seccess(element){
    element.style.backgroundColor="yellowgreen"
    element.style.color="#003300"
    element.style.border="2px solid #003300"
}

function theme(element){
    element.style.backgroundColor="darkviolet"
    element.style.color="#35004c"
    element.style.border="2px solid #35004c"
}

again_btn.addEventListener("click",()=>{
    random_number=Math.floor(Math.random()*20+1)
    document.querySelector(".game").style.backgroundColor="transparent"
    theme(secret_number)
    check_btn.style.backgroundColor="darkviolet"
    instruction.textContent="start guessing"
    document.querySelector(".current_score span").textContent="20"
    document.querySelector(".chances_left span").textContent="20"
    document.querySelector("input").value=""
})

document.querySelector(".newgame").addEventListener("click",()=>{
    location.reload()
})
