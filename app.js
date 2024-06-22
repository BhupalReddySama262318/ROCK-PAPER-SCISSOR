let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

const getCompChoice = () => {
    const options=["rock","paper","scissor"];
    const rndmIdx=Math.floor(Math.random()*3);
    return options[rndmIdx];
}

let drawGame=() => {
    console.log("the game is drawn");
    msg.style.backgroundColor="Yellow";
    msg.style.color="Red";
    msg.innerText="The Game is Drawn";
}

let uscore = document.querySelector("#user-score");
let cscore = document.querySelector("#comp-score");


const showWinner =(userWin,userChoice,compChoice) => {
    if(userWin){
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        msg.style.color="white";
        userScore++;
        uscore.innerHTML=userScore;
    }else{
        msg.innerText=`You Lose ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        msg.style.color="white";
        compScore++;
        cscore.innerHTML=compScore;
    }
}

const playGame =(userChoice) => {
    console.log("userchoice = ", userChoice);
    const compChoice=getCompChoice();
    console.log("compChoice = ",compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else{
        userWin=true;
        if(userChoice==="rock"){
            //paper,scissor
            userWin = compChoice === "paper" ? false:true ;
        }else if(userChoice==="paper"){
            //rock,scissor
            userWin = compChoice === "scissor" ? false:true ;
        }else{
            //rock,paper
            userChoice = compChoice === "rock" ? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
    const userChoice = choice.getAttribute("id")
    playGame(userChoice);
    })
})