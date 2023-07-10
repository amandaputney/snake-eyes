
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

// const ROUND_LOOKUP = {
//     0: 'S',
//     1: 'N',
//     2: 'A',
//     3: 'K',
//     4: 'E',
// };

/*----- app's state (variables) -----*/
// this value increments to indicate what round is is: 0 - 4 (S-E)
// use it to access an array index that hold the score for that turn
//set max number of rounds
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
let scoreBoard = {
    1: [0, 0, 0, 0, 0, 0], //0-S  1-N  2-A  3-K  4-E 
    2: [0, 0, 0, 0, 0, 0]  //0-S  1-N  2-A  3-K  4-E 
};

// let winner = 't';
let winner;

/*----- cached element references -----*/

const die1Element = document.getElementById("die1Image");
const die2Element = document.getElementById("die2Image");
const p1Element = document.getElementById("p1");
const p2Element = document.getElementById("p2");
// const scoreSlot = `p${currentPlayer}r${currentRoundCount}`;
const boardElements = document.querySelectorAll(".board");
const winnerElement = document.getElementById("winner");
// document.getElementById("winner").innerText === winner;

/*----- event listeners -----*/

document.getElementById('roll').addEventListener('click', handleRoll);
document.getElementById('hold').addEventListener('click', handleTurn);
document.getElementById('reset').addEventListener('click', initialize);

/*----- functions -----*/

function initialize() {
    scoreBoard = {
        1: [0, 0, 0, 0, 0, 0], //0-S  1-N  2-A  3-K  4-E 
        2: [0, 0, 0, 0, 0, 0]  //0-S  1-N  2-A  3-K  4-E 
    };

    for (let element of boardElements) {
        element.innerText = " ";
    };

    currentRoundCount = 0;
    p1TotalPoints = 0;
    p2TotalPoints = 0;
    currentPlayer = "1";
    winnerElement.innerText = " ";

    p1Element.style.color = currentPlayer === "1" ? 'red' : 'black';
    p2Element.style.color = currentPlayer === "2" ? 'red' : 'black';

    die1Element.src = DIE_LOOKUP[6];
    die2Element.src = DIE_LOOKUP[6];

    renderScoreBoard();
};

initialize();

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
    // console.log(rollDie1, rollDie2, rollSum);
    document.getElementById("die1").innerText === rollDie1;
    document.getElementById("die2").innerText === rollDie2;

    ////renders corresponding die PNG 
    function renderDice() {
        die1Element.src = DIE_LOOKUP[rollDie1];
        die2Element.src = DIE_LOOKUP[rollDie2];
    }

    renderDice();

    if ((currentPlayer === '2') && (currentRoundCount >= 4)) {
        getWinner()
    };

    //did player roll snake eye(s)?
    if (rollDie1 === 1 && rollDie2 === 1) {
        //DOUBLE SNAKE EYE
        //snake eye(s) has been rolled so player score array needs to be cleared to zero
        scoreBoard[currentPlayer] = [0, 0, 0, 0, 0];

        renderScoreBoard();
        changeTurnAdvanceRound();


    } else if (rollDie1 === 1 || rollDie2 === 1) {
        //SINGLE SNAKE EYE
        //clear the current players score and advance the turn
        scoreBoard[currentPlayer][currentRoundCount] = 0;
        // if (currentRoundCount > 4) {
        //     getWinner();

        // }
        renderScoreBoard();
        changeTurnAdvanceRound();

    } else {
        //NO SNAKE EYES
        scoreBoard[currentPlayer][currentRoundCount] += rollSum;
        // if (currentRoundCount > 4) {
        //     getWinner();

        // }
        renderScoreBoard();

    };
};

function changeTurnAdvanceRound() {
    if (currentPlayer === "1") {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    } else if (currentPlayer === "2") {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
        currentRoundCount = currentRoundCount + 1;
    };
    // document.getElementById("whichPlayer").innerHTML = currentPlayer;
    p1Element.style.color = currentPlayer === "1" ? 'red' : 'black';
    p2Element.style.color = currentPlayer === "2" ? 'red' : 'black';



};


function renderScoreBoard() {
    let scoreSlot = `p${currentPlayer}r${currentRoundCount}`;
    // const scoreElement = document.getElementById(scoreSlot);
    document.getElementById(scoreSlot).innerText = scoreBoard[currentPlayer][currentRoundCount];
    // console.log(scoreSlot);
    p1TotalPoints = scoreBoard[1].reduce((acc, score) => acc + score, 0);
    p2TotalPoints = scoreBoard[2].reduce((acc, score) => acc + score, 0);
    // console.log(p1TotalPoints, p2TotalPoints);
    document.getElementById("p1Total").innerText = p1TotalPoints;
    document.getElementById("p2Total").innerText = p2TotalPoints;
    console.log(`Round: ${currentRoundCount}`);
    // winner = getWinner();
    // document.getElementById("winner").innerText = winner;

};

// function getWinner() {
//     if (currentRoundCount === 5 && (p1TotalPoints === p2TotalPoints)) {
//         return 't'; //TIE
//     } else if (currentRoundCount === 5 && (p1TotalPoints >= p2TotalPoints)) {
//         return '1'; //player 1 wins
//     } else (currentRoundCount === 5 && (p1TotalPoints <= p2TotalPoints))
//     return '2'; //player 1 wins
// };


function getWinner() {
    // winnerElement.style.visibility = (currentRoundCount === 5) ? 'visible' : 'hidden';
    // if (currentRoundCount === 5) {
    // renderControls();
    if (p1TotalPoints === p2TotalPoints) {
        winnerElement.innerText = "TIE GAME";
        return 'TIE'; //TIE
    } else if (p1TotalPoints >= p2TotalPoints) {
        winnerElement.innerText = "PLAYER 1 WINS";
        return player1; //player 1 wins
    } else (p1TotalPoints <= p2TotalPoints)
    winnerElement.innerText = "PLAYER 2 WINS";
    return player2; //player 1 wins

    // }
};

// function getWinner() {
//     // winnerElement.style.visibility = (currentRoundCount === 5) ? 'visible' : 'hidden';
//     // if (currentRoundCount === 5) {
//     // renderControls();
//     if (p1TotalPoints === p2TotalPoints) {
//         winnerElement.innerText = "TIE GAME";
//         return 'TIE'; //TIE
//     } else if (p1TotalPoints >= p2TotalPoints) {
//         winnerElement.innerText = "PLAYER 1 WINS";
//         return player1; //player 1 wins
//     } else (p1TotalPoints <= p2TotalPoints)
//     winnerElement.innerText = "PLAYER 2 WINS";
//     return player2; //player 1 wins

//     // }
// };
