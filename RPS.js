const youText=document.querySelector("#youText")
const computerText=document.querySelector("#computerText")
const resultText=document.querySelector("#resultText")
const button=document.querySelectorAll(".button")
let youScoreDisplay = document.getElementById("youScoreDisplay")
let computerScoreDisplay = document.getElementById("computerScoreDisplay")
let youPoint=0
let computerPoint=0

//const reset= document.getElementById("reset")



let you;
let computer;
let result;
button.forEach(button=> button.addEventListener("click", () => {

    you=button.textContent;
    computerTurn();
    youText.textContent=`You Chose: ${you}`
    computerText.textContent=`Computer Chose: ${computer}`
    resultText.textContent=Result()
}))

  
        function computerTurn(){
    const randNum = Math.floor(Math.random()*3) +1

    switch(randNum){
    case 1: computer="ROCK"
            break;

      case 2: computer="PAPER"
            break;

         case 3: computer="SCISSOR"
            break;
    
     }   
     
    }
    
    

     /*    function Result (){
            if(you == computer){                              
            return "TIE";
       }    
               else if(you=="ROCK"&&computer=="PAPER"){
                computerScoreDisplay.innerHTML=computerPoint++
                return"COMPUTER WINS"
               }
                     else if(you=="PAPER" && computer=="ROCK"){
                      youScoreDisplay.innerHTML=youPoint++
                      return"YOU WIN"
                     }
                        else if(you=="ROCK" && computer=="SCISSOR"){
                          youScoreDisplay.innerHTML=youPoint++
                         return " YOU WIN "
                        }
                            else if(you=="SCISSOR" && computer=="ROCK"){
                              computerScoreDisplay.innerHTML=computerPoint++
                             return"COMPUTER WINS"
                            }
                             else if(you=="SCISSOR" && computer=="PAPER"){
                              youScoreDisplay.innerHTML=youPoint++
                              return"YOU WIN"
                             }
                                else if(you=="PAPER" && computer=="SCISSOR"){
                                  computerScoreDisplay.innerHTML=computerPoint++
                                return"COMPUTER WINS"
                                }
    }*/
    
      
    
   function Result(){

    if(((you=="ROCK" && computer=="ROCK") || (you=="PAPER"&& computer=="PAPER") || (you=="SCISSOR"&& computer=="SCISSOR"))){
        return"tie"
        }
        else if ((you=="ROCK"&& computer=="SCISSOR") || (you=="PAPER"&& computer=="ROCK") || (you=="SCISSOR"&& computer=="PAPER")){
        youPoint++
        youScoreDisplay.innerHTML=youPoint
        return"YOU WIN!!"
        }
        else 
        { 
        computerPoint++
        computerScoreDisplay.innerHTML=computerPoint
        return"COMPUTER WINS!!L"
        }
    } 

/*switch(Result){
  case "YOU WIN!!":
  resultText.classList.add("greenText")
  break;
  case "COMPUTER WINS!!L":
  resultText.classList.add("redText")
  break;
}



  
   reset.addEventListener(onclick,function()
   {
    youPoint=0
    computerPoint=0
    youScoreDisplay.innerHTML=youPoint
    computerScoreDisplay.innerHTML=computerPoint
   }) */