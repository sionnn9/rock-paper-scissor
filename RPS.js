const youText=document.querySelector("#youText")
const computerText=document.querySelector("#computerText")
const resultText=document.querySelector("#resultText")
const button=document.querySelectorAll(".button")
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
    
    

     /*  function Result (){
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

        if(you=="ROCK" && computer=="ROCK" || you=="PAPER"&& computer=="PAPER" || you=="SCISSORS"&& computer=="SCISSORS"){
        return"tie"
        }
        else if (you=="ROCK"&& computer=="SCISSORS" || you=="PAPER"&& computer=="ROCK" || you=="SCISSORS"&& computer=="PAPER"){
        return"You win"
        }
        else 
        { 
        return"computer win"
        }
    } 


  /* function win(){
    resultText.classList.add("won")
    resultText.classList.remove("lost")
  }

  function lost(){
    resultText.classList.add("lost")
    resultText.classList.remove("won")

  } */




  /* function Result(){
        if(you==computer){
        return"draw"
        }
    else if(computer=="ROCK"){
    return(you=="PAPER")? "win" : "loonse"
    } 
    else if(computer=="PAPER"){
        return(you=="SCISSOR")? "win":"loonnse"
        } 
        else if(computer=="SCISSOR"){
            return(player=="ROCK")? "win":"loonnnse"
            } 

}*/