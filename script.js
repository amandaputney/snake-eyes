// Identify and initialize state variables.
// Code the main render(), renderScores() & renderResults() functions.
// Code the click event listener, including the win logic.
// Update the renderResults() function to render the winner border.


/*----- CONSTANTS -----*/
//create die face image lookup object
const DIE_LOOKUP = {
    1: 'die1.JPG',
    2: 'die2.JPG',
    3: 'die3.JPG',
    4: 'die4.JPG',
    5: 'die5.JPG',
    6: 'die6.JPG'
};


/*----- app's state (variables) -----*/
// let scoreBoard;  // player 1 player 2  0-S  1-N  2-A  3-K  4-E  5-TOTAL
// let player1Display = document.getElementsByClassName("p1score");


// this value increments to indicate what round is is: 0 - 5
// you can use it to access an array index that hold the score for that turn
let currentRoundCount = 0;

//how many times a player rolls per turn 
let rollCount = 0;

var player1 = "p1";
var player2 = "p2";

let totalPoints = 0;

// this value holds whose turn it is
// you will flip it to "p2" when its the second player's turn
let currentPlayer = "p1";


// an object to hold the scores that will be accessed by the above variables
const scoreBoard = {
    p1: [0, 0, 0, 0, 0, 0], //0-S  1-N  2-A  3-K  4-E  5-TOTAL
    p2: [0, 0, 0, 0, 0, 0]  //0-S  1-N  2-A  3-K  4-E  5-TOTAL
};

// let dieRoll;

let turn;

/*----- cached element references -----*/
//points scored per roll
// const p1PointsElement = document.getElementById('p1score');
// p1PointsElement.textContent = totalPoints;

// let whichPlayer = document.getElementById('whichPlayer');
// whichPlayer.innerText = `Turn: ${currentPlayer}`;

// let p1PointsElement = document.getElementsByClassName('p1score');
// // p1PointsElement.innerHTML(scoreBoard.p1);


// let p2PointsElement = document.getElementsByClassName('p2score');
// let resetButton = document.getElementById('reset');


/*----- event listeners -----*/

document.getElementById('roll').addEventListener('click', handleRoll);
document.getElementById('reset').addEventListener('click', init);
document.getElementById('hold').addEventListener('click', handleTurn);


/*----- functions -----*/
init();

function init() {
    //call state objects/calls & then call render
    //don't out let or const in front of this to ensure they remain global variables

    // let scoreBoard = {
    //     p1Score: [0, 0, 0, 0, 0, 0],
    //     p2Score: [0, 0, 0, 0, 0, 0]
    // };

    // turn = 1;
    // winner = null;
    // render();
}

function handleRoll() {
    render();
}

function handleTurn() {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
    // if (currentPlayer = 2) {
    //     currentRoundCount = currentRoundCount + 1;
    // };
    // currentRoundCount = currentRoundCount + 1;
}

// function renderScoreBoard() {
//     scoreBoard[currentPlayer][currentRoundCount] += rollSum;
//     // p1PointsElement.innerHTML = roll;

// document.getElementsByClassName(p1Score);
// player1Display.textContent = player1Score;
// p1PointsElement = scoreBoard.p1Score;
// p2PointsElement = scoreBoard.p2Score;

// p1PointsElement.src = DIE_LOOKUP[scoreBoard.p1];
// p1PointsElement.src = scoreBoard.p1;
// p2PointsElement.src = DIE_LOOKUP[scoreBoard.p2];
//reduce array iterator
//square bracket notation
//connected to dom element set in cached element references and pir constant variable image look up and die roll result
// };

// function playRound() {
//     totalPoints += rollSum
// }


function rollDie() {
    let rollDie1 = Math.floor(Math.random() * 6) + 1;
    let rollDie2 = Math.floor(Math.random() * 6) + 1;
    const rollSum = rollDie1 + rollDie2;
    console.log(rollDie1, rollDie2, rollSum);
    if (rollDie1 === 1 && rollDie2 === 1) {
        //snake eye(s) has been rolled so player score array needs to be cleared to zero
        //advanced the turn
        scoreBoard[currentPlayer][currentRoundCount] = 0;
        changeTurnAdvanceRound()
    } else if (rollDie1 === 1 || rollDie2 === 1) {
        //clear the current players score and advance the turn
        scoreBoard[currentPlayer][currentRoundCount] = 0;
        changeTurnAdvanceRound()
    } else {
        scoreBoard[currentPlayer][currentRoundCount] += rollSum;
    }
    console.log(scoreBoard);
};

function changeTurnAdvanceRound() {
    if (currentPlayer === 'p1') {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    } else if (currentPlayer === 'p2') {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
        currentRoundCount = currentRoundCount + 1;
    }
};

//if the current player is player 1 then we want to change the current 
//player to player 2 and if the current player is player 2 we want to switch 
//to player 1 and advance to the next round/increase turn count












// checkRoll(rollDie1, rollDie2);
// // console.log(rollDie1, rollDie2);
// // rollSum = rollDie1 + rollDie2;
// // console.log(scoreBoard);
// // checkRoll()
// rollSum = rollDie1 + rollDie2;
// console.log(scoreBoard);
// if (rollDie1 || rollDie2 === 1) {
//     return 0;
//     handleTurn();
// }
// // else {
// //     console.log(rollSum);
// //     console.log(scoreBoard);
// // };


// while rollDie1 || rollDie2 !== 1

//need to reduce all 

function render() {
    // playRound()
    rollDie();
    // renderScoreBoard();
};
