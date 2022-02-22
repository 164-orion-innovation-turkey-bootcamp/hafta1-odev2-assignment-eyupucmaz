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

/**
 * @param  {Number} row Number of row
 * @param  {Number} col Number of column
 * @param  {HTMLElement} parent Parent element of boxes, boxes gonna be inside this element
 * @description creates boxes for tic tac toe game
 */
 function createBoxes(row, col, parent) {
	for (let i = 0; i < row * col; i++) {
		let box = document.createElement("div");
		box.classList.add("box");
		parent.appendChild(box);
		let dataNum = document.createAttribute("data-num");
		dataNum.value = `${i}`;
		box.setAttributeNode(dataNum);
	}
}

// Changing current player
function changeCurrentPlayer() {
	currentPlayer === player1
		? (currentPlayer = player2)
		: (currentPlayer = player1);
}

// Main Function to Play
function play(){
  createBoxes(row,col,game);
}

play();