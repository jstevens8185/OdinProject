//////////////////////////////////////////
//          RockPaperScissors           //
//                                      //
//      Part of the Odin Project        //
//      Author: Jered Stevens           //
//      Date:   06/07/2022              // 
//////////////////////////////////////////

/*****************************************
 * Whats it do?
 *      Pick random number correlated with
 *          rock, paper, or scissors. This 
 *          will be the computers choice.
 *      Get players input as string. Lower-
 *          case players input.
 *      Compare using if statements.
 *****************************************/


/*****************************************
 * Logic: 
 *      Pick random number correlated with
 *          rock, paper, or scissors. This 
 *          will be the computers choice.
 * Params:
 *      None
 * Returns:
 *      String: compChoice
 *****************************************/

function computerPlay(){
    let choice = Math.round((Math.random() * 100)) % 3;
    let compChoice = null;
    //console.log(choice);

    switch (choice) {
        case 0:
            compChoice = 'rock';
            break;
        case 1:
            compChoice = 'paper';
            break;
        case 2:
            compChoice = 'scissors';
            break;
        default:
            break;
    }
    console.log(compChoice);

    return compChoice;
};

/*****************************************
 *  Logic: 
 *      Get players input as string. Lower-
 *          case players input.
 *  Params:
 *      None
 *  Returns: 
 *      String: playerChoice
 *****************************************/

function getPlayerInput(){
    let playerChoice = prompt('Enter: Rock, Paper, or Scissors');
    playerChoice = playerChoice.toLowerCase();
    if(playerChoice.charAt(0) == 'r'){
        playerChoice = 'rock';
    }
    if(playerChoice.charAt(0) == 'p'){
        playerChoice = 'paper';
    }
    if(playerChoice.charAt(0) == 's'){
        playerChoice = 'scissors';
    }
    //console.log(playerChoice);

    return playerChoice;
}

/*****************************************
 *  Logic: 
 *      Take in player and computer choices.
 *      Compare them using if statements.
 *      Assign string to variable - winner
 *      Return int for scorekeeping
 *  Params:
 *      String: playerChoice
 *      String: compChoice
 *  Returns: 
 *      string: winner
 *****************************************/

function compareChoices(playerChoice, compChoice){
    let winner = 'error: did not assign a winner';
    if(playerChoice == compChoice){
        winner = 'Tie';
        return winner;
    }
    if(playerChoice == 'rock' && compChoice == 'paper'){
        winner = 'Computer';
        return winner;
    }
    if(playerChoice == 'rock' && compChoice == 'scissors'){
        winner = 'Player';
        return winner;
    }
    if(playerChoice == 'paper' && compChoice == 'rock'){
        winner = 'Player';
        return winner;
    }
    if(playerChoice == 'paper' && compChoice == 'scissors'){
        winner = 'Computer';
        return winner;
    }
    if(playerChoice == 'scissors' && compChoice == 'rock'){
        winner = 'Computer';
        return winner;
    }
    if(playerChoice == 'scissors' && compChoice == 'paper'){
        winner = 'Player';
        return winner;
    }

    return winner;
}

function game(){
    let message = 'error: no message assigned';
    let compWins = 0;
    let playerWins = 0;

    for(let i = 0; i < 5; i++){
        let compChoice = computerPlay();
        let playerChoice = getPlayerInput();
        let winner = compareChoices(playerChoice, compChoice);
        if(winner == 'Player' || winner == 'Computer'){
            if(winner == 'Player'){
                playerWins++;
            }
            if(winner == 'Computer'){
                compWins++;
            };
            message = `Player chose ${playerChoice}. 
                            Computer chose ${compChoice}.\n
                            ${winner} wins.\n
                            Player: ${playerWins}   Computer: ${compWins}`;
        }
        if(winner == 'Tie'){
            message = `Player chose ${playerChoice}.
                            Computer chose ${compChoice}.\n
                            Tie game.\n
                            Player: ${playerWins}   Computer: ${compWins}`;
        }
        console.log(message);
    }
}