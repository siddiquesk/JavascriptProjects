let userscore = 0;
let compscore = 0;
let choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score p");
const compScorepara = document.querySelector("#com-score p");

const genCom = () => {
    const option = ["rock", "paper", "scissors"];
    let ran = Math.floor(Math.random() * 3);
    return option[ran];
}

const drawGame = () => {
    msg.innerText = "Draw game";
    msg.style.color="purple";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userscore++;
        userScorepara.innerText = userscore;
        msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
        msg.style.color = "green";
    } else {
        compscore++;
        compScorepara.innerText = compscore;
        msg.innerText = `You lose! ${compChoice} beats ${userChoice}`;
        msg.style.color = "red";
    }
}

const playGame = (userChoice) => {
    console.log("User choice", userChoice);
    const compChoice = genCom();
    console.log("Computer choice", compChoice);
    
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userwin = true;
        
        if (userChoice === "rock") {
            userwin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userwin = compChoice === "scissors" ? false : true;
        } else {
            userwin = compChoice === "rock" ? false : true;
        }
        
        showWinner(userwin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("Choice", userChoice);
        playGame(userChoice);
    })
})