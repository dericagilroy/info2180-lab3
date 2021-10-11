"use strict";

const gameState = {};
let last = "X";
let len;
let squares;

window.addEventListener("DOMContentLoaded", function() {boardLayout(); addText()});

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
}