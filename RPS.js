const youText=document.querySelector("#youText")
const computerText=document.querySelector("#computerText")
const resultText=document.querySelector("#resultText")
const button=document.querySelectorAll(".button")
let youScoreDisplay = document.getElementById("#youScoreDisplay")
let computerScoreDisplay = document.getElementById("#computerScoreDisplay")
let youScore=0
let computerScore=0



let you;
let computer;
let result;
button.forEach(button=> button.addEventListener("click", () => {

    you=button.textContent;
    computerTurn();
    youText.textContent=`YOU: ${you}`
    computerText.textContent=`COMPUTER: ${computer}`
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
    
    

  /*     function Result (){
            if(you == computer){                              
            return "TIE";
       }    
               else if(you=="ROCK"&&computer=="PAPER"){
                return"COMPUTER WINS"
               }
                     else if(you=="PAPER" && computer=="ROCK"){
                      return"YOU WIN"
                     }
                        else if(you=="ROCK" && computer=="SCISSOR"){
                         return " YOU WIN "
                        }
                            else if(you=="SCISSOR" && computer=="ROCK"){
                             return"COMPUTER WINS"
                            }
                             else if(you=="SCISSOR" && computer=="PAPER"){
                              return"YOU WIN"
                             }
                                else if(you=="PAPER" && computer=="SCISSOR"){
                                return"COMPUTER WINS"
                                }
    }*/
    
      
    
    function Result(){
     
        if(((you=="ROCK" && computer=="ROCK") || (you=="PAPER"&& computer=="PAPER") || (you=="SCISSOR"&& computer=="SCISSOR"))){
        return"tie"
        }
        else if ((you=="ROCK"&& computer=="SCISSOR") || (you=="PAPER"&& computer=="ROCK") || (you=="SCISSOR"&& computer=="PAPER")){
        return"You win"
        youScoreDisplay.innerHTML=youScore++
        }
        else 
        { 
        return"computer win"
        computerScoreDisplay.innerHTML=computerScore++
        }
    } 
    

  /*  function win(){
    resultText.classList.add("won")
    resultText.classList.remove("lost")
  }

  function lost(){
    resultText.classList.add("lost")
    resultText.classList.remove("won")

  } */



  