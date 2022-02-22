// Using strict mode to write more secure code
"use strict";

// getting all tags to manipulate them
let game = document.querySelector("#game");
let player = document.querySelector("#player");
let resBtn = document.querySelector("#restart");

// Set number of column and rows
let row = 3;
let col = 3;

// Added players
let player1 = "X";
let player2 = "O";
// Added game states
let currentPlayer = player1;
let gameOver = false;
let winner = "";
