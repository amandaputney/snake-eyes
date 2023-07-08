

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

let player1 = "1";
let player2 = "2";

let p1TotalPoints = 0;
let p2TotalPoints = 0;

// this value holds whose turn it is
// you will flip it to "p2" when its the second player's turn
let currentPlayer = "1";
// document.getElementById("whichPlayer").innerHTML = currentPlayer;

// an object to hold the scores that will be accessed by the above variables
var scoreBoard = {
    1: [0, 0, 0, 0, 0], //0-S  1-N  2-A  3-K  4-E 
    2: [0, 0, 0, 0, 0]  //0-S  1-N  2-A  3-K  4-E 
};

/*----- cached element references -----*/

const die1Element = document.getElementById("die1Image");
const die2Element = document.getElementById("die2Image");



/*----- event listeners -----*/

document.getElementById('roll').addEventListener('click', handleRoll);
document.getElementById('hold').addEventListener('click', handleTurn);
document.getElementById("reset").addEventListener('click', initialize);

/*----- functions -----*/
// initialize();

function initialize() {
    //call state objects/calls & then call render
    //don't put let or const in front of this to ensure they remain global variables

    currentRoundCount = 0;

    currentPlayer = "1";

    scoreBoard = {
        1: [0, 0, 0, 0, 0],
        2: [0, 0, 0, 0, 0]
    };

    p1TotalPoints = 0;
    p2TotalPoints = 0;

    // render();
}

function renderDice() {
    die1Element.src = DIE_LOOKUP[rollDie1];
    die2Element.src = DIE_LOOKUP[rollDie2];
}


function handleRoll() {
    rollDie();
}

function handleTurn() {
    changeTurnAdvanceRound();
}


function rollDie() {
    //generates dice values
    let rollDie1 = Math.floor(Math.random() * 6) + 1;
    let rollDie2 = Math.floor(Math.random() * 6) + 1;
    const rollSum = rollDie1 + rollDie2;
    console.log(rollDie1, rollDie2, rollSum);
    document.getElementById("die1").innerText = rollDie1;
    document.getElementById("die2").innerText = rollDie2;

    ////renders corresponding die PNG 
    function renderDice() {
        die1Element.src = DIE_LOOKUP[rollDie1];
        die2Element.src = DIE_LOOKUP[rollDie2];
    }
    renderDice();

    //did player roll snake eye(s)?
    if (rollDie1 === 1 && rollDie2 === 1) {
        //DOUBLE SNAKE EYE
        //snake eye(s) has been rolled so player score array needs to be cleared to zero
        // scoreBoard.currentPlayer = [0, 0, 0, 0, 0];
        scoreBoard[currentPlayer] = [0, 0, 0, 0, 0];
        // scoreBoard = scoreBoard[currentPlayer].map(score => (score * 0));
        // scoreBoard[currentPlayer].map(score => (score * 0));
        // scoreBoard = scoreBoard[currentPlayer].map(score => 0 * score);
        // scoreBoard[currentPlayer].forEach((score, index) => scoreBoard[currentPlayer] = 0);
        console.log(scoreBoard);
        // renderScoreBoard(scoreBoard[currentPlayer].map((score) => score * 0));
        // scoreBoard[currentPlayer][currentRoundCount] = 0;
        // function forEach(arr, cb) {
        //     scoreBoard[currentPlayer].forEach(score * 0);
        // }
        renderScoreBoard();
        //advanced the turn
        changeTurnAdvanceRound();

    } else if (rollDie1 === 1 || rollDie2 === 1) {
        //SINGLE SNAKE EYE
        //clear the current players score and advance the turn
        scoreBoard[currentPlayer][currentRoundCount] = 0;
        renderScoreBoard();
        changeTurnAdvanceRound();

    } else {
        //NO SNAKE EYES
        scoreBoard[currentPlayer][currentRoundCount] += rollSum;
        renderScoreBoard();
    };
    console.log(scoreBoard);
};

function changeTurnAdvanceRound() {
    if (currentPlayer === "1") {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    } else if (currentPlayer === "2") {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
        currentRoundCount = currentRoundCount + 1;
    }
    document.getElementById("whichPlayer").innerText = currentPlayer;
};

function renderScoreBoard() {
    const scoreSlot = `p${currentPlayer}r${currentRoundCount}`;
    const scoreElement = document.getElementById(scoreSlot);
    document.getElementById(scoreSlot).innerText = scoreBoard[currentPlayer][currentRoundCount];
    // console.log(scoreElement)
    const p1TotalPoints = scoreBoard[1].reduce((acc, score) => acc + score, 0);
    const p2TotalPoints = scoreBoard[2].reduce((acc, score) => acc + score, 0);
    // console.log(p1TotalPoints, p2TotalPoints);
    document.getElementById("p1Total").innerText = p1TotalPoints;
    document.getElementById("p2Total").innerText = p2TotalPoints;
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


// visualize all state to dom
// function render() {
//     // initialize();
//     // playRound()
//     // rollDie();
//     // renderScoreBoard();
//     // changeTurnAdvanceRound();
// };
