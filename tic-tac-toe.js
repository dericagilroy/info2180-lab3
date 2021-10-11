"use strict";

let squares;

window.addEventListener("DOMContentLoaded", function() {boardLayout()});

function boardLayout() {
    squares = [...document.getElementById("board").children];
    for(const key in squares) {
        squares[key].setAttribute("class", "square");
    }
}