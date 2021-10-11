"use strict";

const gameState = {};
let last = "X";
let len;
let squares;
let statusArea;

window.addEventListener("DOMContentLoaded", function() {boardLayout(); addText(); addHover()});

function boardLayout() {
    squares = [...document.getElementById("board").children];
    for(const key in squares) {
        squares[key].setAttribute("class", "square");
        squares[key].setAttribute("id", `${key}`);
    }
}

function addText() {
    squares = [...document.getElementById("board").children];
    for (const div of squares) {
        div.addEventListener("click", manageState);
    }
}

function manageState(event) {
    let char;
    len = Object.keys(gameState).length;

    if (len == 0) {
        char = "X";
        last = "X"; 
    }
    else if (len > 0) {
        if (last == "X") {
            char = "O"
            last = "O";
        }
        else {
            char = "X";
            last = "X";
        }
    }

    gameState[event.target.attributes.id.value] = char;
    event.target.textContent = char;
    event.target.classList.toggle(char);
    determineWinner();
}

function addHover() {
    squares = [...document.getElementById("board").children];
    for (const div of squares) {
        div.addEventListener("mouseover", hover);
        div.addEventListener("mouseout", hover);
    }
}

function hover(event) {
    event.target.classList.toggle("hover");
}

function determineWinner() {
    statusArea = document.getElementById("status");

    if ((gameState[0] == gameState[1] && gameState[1] == gameState[2] && gameState[2]== "X") || (gameState[3] == gameState[4] && gameState[4] == gameState[5] && gameState[5] == "X") || 
       (gameState[6] == gameState[7] && gameState[7] == gameState[8] && gameState[8] == "X") || (gameState[0] == gameState[3] && gameState[3] == gameState[6] && gameState[6] == "X") ||
       (gameState[1] == gameState[4] && gameState[4] == gameState[7] && gameState[7] == "X") || (gameState[2] == gameState[5] && gameState[5] == gameState[8] && gameState[8] == "X") ||
       (gameState[0] == gameState[4] && gameState[4] == gameState[8] && gameState[8] == "X") || (gameState[2] == gameState[4] && gameState[4] == gameState[6] && gameState[6] == "X")) {
           statusArea.textContent = "Congratulations! X is the Winner!";
           statusArea.setAttribute("class", "you-won");
    }

    else if ((gameState[0] == gameState[1] && gameState[1] == gameState[2] && gameState[2]== "O") || (gameState[3] == gameState[4] && gameState[4] == gameState[5] && gameState[5] == "O") || 
            (gameState[6] == gameState[7] && gameState[7] == gameState[8] && gameState[8] == "O") || (gameState[0] == gameState[3] && gameState[3] == gameState[6] && gameState[6] == "O") ||
            (gameState[1] == gameState[4] && gameState[4] == gameState[7] && gameState[7] == "O") || (gameState[2] == gameState[5] && gameState[5] == gameState[8] && gameState[8] == "O") ||
            (gameState[0] == gameState[4] && gameState[4] == gameState[8] && gameState[8] == "O") || (gameState[2] == gameState[4] && gameState[4] == gameState[6] && gameState[6] == "O")) {
                statusArea.textContent = "Congratulations! O is the Winner!"; 
                statusArea.setAttribute("class", "you-won");
    }
    else if (len == 8) {
        statusArea.textContent = "There is a tie!";
    }
    else {
        statusArea.textContent = "Move your mouse over a square and click to play an X or an O.";
        statusArea.classList.remove("you-won");
    }
}