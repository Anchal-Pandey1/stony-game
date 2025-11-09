let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#AI-score");



const genCompChoices = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3 );
    return options[randIdx];
};

const drawGmae = () => {
    console.log("game was draw");
    msg.innerText = "Game was Draw. Play again!!";
    document.body.style.backgroundImage = "url('draw.jpeg')";
};

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win !!");
        msg.innerText = `you win!!!! Your ${userChoice} beats ${compChoice}`;
        document.body.style.backgroundImage = "url('youWin.jpg')";
        document.body.style.backgroundSize = "cover";

    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `you lose!!!! ${compChoice} beats your ${userChoice}`;
        document.body.style.backgroundImage = "url('background.jpg')";
    }
};

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice); /*playgame knows that what is the choice of user*/
    // generate computer choice
    const compChoice = genCompChoices();
    console.log("comp choice = ", compChoice);

    if( userChoice === compChoice) {
      //draw game
      drawGmae();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            /*scissor paper*/
            userWin = compChoice === "paper" ? false  : true ;
        } else if (userChoice === "paper") {
            // scissor and rock 
            userWin = compChoice ==="scissor" ? false : true ; 
        } else {
            // rock and paper
            userWin = compChoice === "rock" ? false : true ;
        }
        showWinner (userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        
        playGame(userChoice);
    });
});

// we are dividing function for different purpose by doing this
//  our function are reusable so that's why a name is given to 
//  this type of technique and that is..modular function components 
//  that are reusable 