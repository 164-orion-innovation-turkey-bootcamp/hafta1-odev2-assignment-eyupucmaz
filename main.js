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

// Winning Combinations
let winCombos = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];
// Initilaze game state object
let gameState = {};