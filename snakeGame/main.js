import {
	update as updateSnake, draw as drawSnake, SNAKE_SPEED,
	getSnakeHead, snakeIntersection
} from './snake.js';
import { update as updateFood, draw as drawFood } from './icons/food.js';
import { outsideGrid } from './grid.js';

document.body.onkeydown = function (e) {
	e = e || window.event;
	let c = e.keyCode;
	if (c > 36 && c < 41 || c > 32 && c < 37) return false;
};

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('game-board');
const btnNewGame = document.querySelector('.game__board-btn');
const gameOverMessage = document.querySelector('.gameover__message');

btnNewGame.addEventListener('click', () => {

	location.reload();
});

function main(currentTime) {
	if (gameOver) {
		if (checkDeath) {
			gameOverMessage.style.display = 'flex';
		}
		return;
	}

	window.requestAnimationFrame(main);
	const secondsSinceRender = (currentTime - lastRenderTime) / 1000;
	if (secondsSinceRender < 1 / SNAKE_SPEED) return;
	lastRenderTime = currentTime;

	update();
	draw();
}
window.requestAnimationFrame(main);

function update() {
	updateSnake();
	updateFood();
	checkDeath();
}

function draw() {
	gameBoard.innerHTML = '';
	drawSnake(gameBoard);
	drawFood(gameBoard);
}

function checkDeath() {
	gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}