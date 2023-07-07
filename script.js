// Identify and initialize state variables.
// Code the main render(), renderScores() & renderResults() functions.
// Code the click event listener, including the win logic.
// Update the renderResults() function to render the winner border.


/*----- CONSTANTS -----*/
//create die face image lookup object
const DIE_LOOKUP = {
    1: 'images/die1.png',
    2: 'images/die2.png',
    3: 'images/die3.png',
    4: 'images/die4.png',
    5: 'images/die5.png',
    6: 'images/die6.png'
};


/*----- app's state (variables) -----*/
// this value increments to indicate what round is is: 0 - 5
// use it to access an array index that hold the score for that turn
let currentRoundCount = 0;
// document.getElementById("whichRound").innerHTML = currentRoundCount;

// //how many times a player rolls per turn 
// let rollCount = 0;

var player1 = "1";
var player2 = "2";

const p1TotalPoints = 0;
const p2TotalPoints = 0;

// this value holds whose turn it is
// you will flip it to "p2" when its the second player's turn
let currentPlayer = "1";
// document.getElementById("whichPlayer").innerHTML = currentPlayer;

// an object to hold the scores that will be accessed by the above variables
const scoreBoard = {
    1: [0, 0, 0, 0, 0], //0-S  1-N  2-A  3-K  4-E  -removed 5-TOTAL
    2: [0, 0, 0, 0, 0]  //0-S  1-N  2-A  3-K  4-E -removed 5-TOTAL
};

// let dieRoll;
// let turn;

/*----- cached element references -----*/

const die1Element = document.getElementById("die1Image");
const die2Element = document.getElementById("die2Image");


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

    // currentRoundCount = 0;

    // scoreBoard = {
    //     1: [0, 0, 0, 0, 0, 0], //0-S  1-N  2-A  3-K  4-E  5-TOTAL
    //     2: [0, 0, 0, 0, 0, 0]  //0-S  1-N  2-A  3-K  4-E  5-TOTAL
    // };

    // currentPlayer = "1";

    // currentRoundCount = 0;
    // winner = null;
    // render();

};

function renderDice() {
    die1Element.src = DIE_LOOKUP[rollDie1];
    die2Element.src = DIE_LOOKUP[rollDie2];
}


function handleRoll() {
    render();
}

function handleTurn() {
    changeTurnAdvanceRound();
    // currentPlayer = currentPlayer === player1 ? player2 : player1;
    // render();
    // if (currentPlayer = 2) {
    //     currentRoundCount = currentRoundCount + 1;
    // };
    // currentRoundCount = currentRoundCount + 1;
}

// document.getElementById("p1r0").innerHTML = `p${currentPlayer}r${currentRoundCount}`;

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
    function renderDice() {
        die1Element.src = DIE_LOOKUP[rollDie1];
        die2Element.src = DIE_LOOKUP[rollDie2];
    }
    renderDice();
    const rollSum = rollDie1 + rollDie2;
    console.log(rollDie1, rollDie2, rollSum);
    document.getElementById("die1").innerText = rollDie1;
    document.getElementById("die2").innerText = rollDie2;
    if (rollDie1 === 1 && rollDie2 === 1) {
        //snake eye(s) has been rolled so player score array needs to be cleared to zero
        //advanced the turn
        scoreBoard[currentPlayer][currentRoundCount] = 0;
        renderScoreBoard();
        changeTurnAdvanceRound();
    } else if (rollDie1 === 1 || rollDie2 === 1) {
        //clear the current players score and advance the turn
        scoreBoard[currentPlayer][currentRoundCount] = 0;
        renderScoreBoard();
        changeTurnAdvanceRound();
    } else {
        scoreBoard[currentPlayer][currentRoundCount] += rollSum;
    };
    // console.log(scoreBoard);
};

function changeTurnAdvanceRound() {
    if (currentPlayer === "1") {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    } else if (currentPlayer === "2") {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
        currentRoundCount = currentRoundCount + 1;
    }
    // document.getElementById("whichRound").innerHTML = currentRoundCount;
    document.getElementById("whichPlayer").innerText = currentPlayer;
};

function renderScoreBoard(score) {
    // scoreBoard.forEach(currentPlayer, currentRoundCount);
    const scoreSlot = `p${currentPlayer}r${currentRoundCount}`;
    const scoreElement = document.getElementById(scoreSlot);
    document.getElementById(scoreSlot).innerHTML = scoreBoard[currentPlayer][currentRoundCount];
    // console.log(scoreElement)
    const p1TotalPoints = scoreBoard[1].reduce((acc, score) => acc + score, 0);
    const p2TotalPoints = scoreBoard[2].reduce((acc, score) => acc + score, 0);
    console.log(p1TotalPoints, p2TotalPoints);
    document.getElementById("p1Total").innerHTML = p1TotalPoints;
    document.getElementById("p2Total").innerHTML = p2TotalPoints;
};

// function renderScoreBoard() {
//     for (let key in scoreBoard) {
//         const scoreElement = document.getElementById(`p${currentPlayer}r${currentRoundCount}`);
//         scoreElement.innerText = scoreBoard[key][currentRoundCount];
//     }
// };


// renderScoreBoard();

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
    renderScoreBoard();
    // changeTurnAdvanceRound();
};
