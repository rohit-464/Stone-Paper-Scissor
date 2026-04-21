let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msgText = document.querySelector("#msg");

const userSocrePara = document.querySelector("#user-score");
const compSocrePara = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];

};

const drawGame = () => {
    // console.log("Game Was Draw.");
    msgText.innerText = "Game Was Draw. Play Again.";
    msgText.style.backgroundColor = "blue";
};

const showWinner = (userWin) => {
    if(userWin){
        // console.log("You Win!");
        userScore++;
        userSocrePara.innerText = userScore;
        msgText.innerText = "You Win!";
        msgText.style.backgroundColor = "green";

    }else{
        // console.log("You Lose");
        compScore++;
        compSocrePara.innerText = compScore;
        msgText.innerText = "You Lose.";
        msgText.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    // console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    // console.log("comp choice = ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;

        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;

        }else{
            userWin = compChoice === "rock" ? false : true;

        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        // console.log("choices are clicked", userChoice);
        playGame(userChoice);
    })
})