let userScore=0;
let compScore=0;

const msg=document.querySelector(".msg");

const choices=document.querySelectorAll(".choice");

const userChoicePara=document.querySelector(".your");
const compChoicepara=document.querySelector(".comp");

const genCompChoice=() =>{
    const options=["rock","paper","scissor"];
    const randIndex= Math.floor(Math.random()*3);
    return options[randIndex];

}

const gameDrawn=(userChoice,compChoice) => {
    msg.innerText=`game was Draw.Your choice ${userChoice} and the computer's choice ${compChoice} are the same.Play again!!`;
    msg.style.backgroundColor="black";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userChoicePara.innerText= userScore;
        msg.innerText=`Congrats!! You Win.Your choice ${userChoice} beats computer's choice ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compChoicepara.innerText=compScore;
        msg.innerText=`You Loose :( Computer's choice ${compChoice} beats your choice ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice) => {
    const compChoice=genCompChoice();

    if(userChoice === compChoice){
        gameDrawn(userChoice,compChoice);
    }

    else{
        let userWin=true;
        if(userChoice === "rock"){
            //paper scissor
            
            userWin= compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            //rock scissor
            userWin= compChoice === "scissor" ?false : true;
        }

        else{
            //rock paper
            userWin = compChoice === "rock" ?false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
