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
    }

   else if(input_number!=random_number){
        if(score>=1){
            instruction.textContent=input_number<random_number ? " too lower " : " too higher "
        }
        else{
            instruction.textContent=" lost  game"
            document.querySelector(".curent_score span").textContent="0"
        }
  }
    else if(random_number==input_number){
        // document.querySelector(".secret i").classList.add("hidden")
        instruction.textContent="correct number"
        secret_number.textContent=input_number
    }
   
})