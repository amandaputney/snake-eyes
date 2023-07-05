// Identify and initialize state variables.
// Code the main render(), renderScores() & renderResults() functions.
// Code the click event listener, including the win logic.
// Update the renderResults() function to render the winner border.


/*----- CONSTANTS -----*/
//create die face image lookup object

/*----- app's state (variables) -----*/
let scoreBoard;  // 0-S  1-N  2-A  3-K  4-E  5-TOTAL

let dieRoll;


/*----- cached element references -----*/



/*----- event listeners -----*/


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
    // };
    scoreBoard = {
        p1: [0, 0, 0, 0, 0, 0],
        p2: [0, 0, 0, 0, 0, 0]
    };

    dieRoll = {
        die1: [1, 2, 3, 4, 5, 6],
        die2: [1, 2, 3, 4, 5, 6]
    };




    render();
}

function renderScoreBoard() {
    //reduce array iterator
    //square bracket notation
    //connected to dom element set in cached element references and pir constant variable image look up and die roll result
};

function renderDieRoll() {

};


function render() {
    renderScoreBoard();
    renderDieRoll();
}

