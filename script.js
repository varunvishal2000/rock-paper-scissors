let options = ["Rock", "Scissors", "Paper"];

function getComputerChoice() {
    let randomNumber = Math.floor((Math.random() * 10)) % 3;
    return randomNumber;
}

function getPlayerChoice() {
    let choice = prompt("Enter a choice for Rock-Paper-Scissors: ");
    choice = choice.toLowerCase();
    choice = choice.charAt(0).toUpperCase() + choice.slice(1);
    console.log(choice);
    for(let i = 0; i < 3; i++){
        if(choice === options[i]){
            choice = i;
        }
    }
    return choice;
}
    

function playRound(playerChoice, computerChoice, score) {
    
    let optionByComputer = computerChoice();
    let optionByPlayer = playerChoice();
    switch(optionByComputer){
        case 0:

            if(optionByPlayer === 1){
                console.log("Computer Wins, Rock over Scissors.");
                score.computer++;
            }
            else {
                console.log("Human Wins, Paper over Rock.");
                score.human++;
            }
            break;
        case 1:

            if(optionByPlayer === 2){
                console.log("Computer Wins, Scissors over Paper.");
                score.computer++;
            }
            else {
                console.log("Human Wins, Rock over Scissors.");
                score.human++;
            }
            break;
        
        case 2:
            if(optionByPlayer === 0){
                console.log("Computer Wins, Paper over Rock.");
                score.computer++;
            }
            else {
                console.log("Human Wins, Scissors over Paper.");
                score.human++;
            }
            break;
        default:
            console.log("It's a draw");
    }
}

function playGame(playRound){
    
    let scores = {
        human: 0,
        computer: 0
    }

    for(let i = 0; i < 5; i++){
        playRound(getPlayerChoice, getComputerChoice, scores);
    }

    console.log("Final Scores: Computer - " + scores.computer + " Human - " + scores.human);

}

playGame(playRound);