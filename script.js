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
let scoreBoard;  // player 1 player 2  0-S  1-N  2-A  3-K  4-E  5-TOTAL

let player1Display = document.getElementsByClassName("p1score");

let player1Score = [0, 0, 0, 0, 0, 0];

let p1rS = 0;
let p1rN = 0;
let p1rA = 0;
let p1rK = 0;
let p1rE = 0;
let p1rTotal = 0;

let p2rS = 0;
let p2rN = 0;
let p2rA = 0;
let p2rK = 0;
let p2rE = 0;
let p2rTotal = 0;

const scoreBoardOBJECT = {
    p1rS: 0,
    p1rN: 0,
    p1rA: 0,
    p1rK: 0,
    p1rE: 0,
    p1rTotal: 0,
    p2rS: 0,
    p2rN: 0,
    p2rA: 0,
    p2rK: 0,
    p2rE: 0,
    p2rTotal: 0
}

scoreBoard = {
    p1Score: [0, 0, 0, 0, 0, 0],
    p2Score: [0, 0, 0, 0, 0, 0]
};




// let dieRoll;

let turn;



/*----- cached element references -----*/
//points scored per roll
const p1PointsElement = document.getElementsByClassName('p1score');
const p2PointsElement = document.getElementsByClassName('p2score');
const resetButton = document.getElementById('reset');


/*----- event listeners -----*/
document.getElementById('roll').addEventListener('click', handleRoll);
document.getElementById('reset').addEventListener('click', init);
document.getElementById('hold').addEventListener('click', handleTurn);


/*----- functions -----*/
init();

function init() {
    //call state objects/calls & then call render
    //don't out let or const in front of this to ensure they remain global variables
    // scoreBoard = {
    //   s:0,
    //   n:0,
    //   a:0,
    //   k:0,
    //   e:0
    //total: 0,
    // };


    //make board an class or
    //make each player/round its own variable

    scoreBoard = {
        p1Score: [0, 0, 0, 0, 0, 0],
        p2Score: [0, 0, 0, 0, 0, 0]
    };


    // dieRoll = {
    //     die1: [1, 2, 3, 4, 5, 6],
    //     die2: [1, 2, 3, 4, 5, 6]
    // };

    turn = 1;

    winner = null;

    // render();
}

function handleRoll() {
    render();
}

function handleTurn() {

}


function renderScoreBoard() {
    // document.getElementsByClassName(p1Score);
    // player1Display.textContent = player1Score;
    p1PointsElement = scoreBoard.p1Score;
    p2PointsElement = scoreBoard.p2Score;

    // p1PointsElement.src = DIE_LOOKUP[scoreBoard.p1];
    // p1PointsElement.src = scoreBoard.p1;
    // p2PointsElement.src = DIE_LOOKUP[scoreBoard.p2];
    //reduce array iterator
    //square bracket notation
    //connected to dom element set in cached element references and pir constant variable image look up and die roll result
};

// function renderDieRoll() {
//     let i = 0;
//     while (i > 1) {
//         let rollDie1 = Math.floor(Math.random() * 6) + 1;
//         console.log(rollDie1);
//         let rollDie2 = Math.floor(Math.random() * 6) + 1;
//         console.log(rollDie2);
//         roll = rollDie1 + rollDie2;
//         console.log(roll)
//     }
//     // while rollDie1 || rollDie2 !== 1
// };

function renderDieRoll() {
    let rollDie1 = Math.floor(Math.random() * 6) + 1;
    console.log(rollDie1);
    let rollDie2 = Math.floor(Math.random() * 6) + 1;
    console.log(rollDie2);

    roll = rollDie1 + rollDie2;
    console.log(roll)



    // while rollDie1 || rollDie2 !== 1
};

//need to insert score in scoreboard array
//need to reduce all 

function render() {
    renderDieRoll();
    // renderScoreBoard();
}
