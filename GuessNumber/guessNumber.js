'use strict';
const againBtn = document.querySelector('.again');
let secretNumber = Math.trunc((Math.random() * 20) + 1);
const scoreOutput = document.querySelector('.score');
const inputGuess = document.querySelector('.input__guess');
const guessContainer = document.querySelector('.guess__container');
const numberOutput = document.querySelector('.number');

let score = 20;
let highScore = 0;
const displayMessage = function (message) {
	document.querySelector('.message').textContent = message;
};
const displayNumber = function (arg) {
	document.querySelector('.number').textContent = arg;
};

document.querySelector('.check').addEventListener('click', function () {
	let guess = +document.querySelector('.input__guess').value;

	if (!guess) {
		displayMessage('No number');


	} else if (guess === secretNumber) {
		displayMessage('Correct Number');
		displayNumber(secretNumber);
		guessContainer.style.background = 'linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)';
		numberOutput.style.width = '35rem';


		if (score > highScore) {
			highScore = score;
			document.querySelector('.highscore').textContent = highScore;
		}

	} else if (guess !== secretNumber) {
		if (score > 1) {
			displayMessage(guess > secretNumber ? 'Too high!' : 'Too Low!');

			score--;
			scoreOutput.textContent = score;
		} else {
			guessContainer.style.background = 'red';
			displayMessage('You Loose!');
			scoreOutput.textContent = 0;
		}
	}
});

againBtn.addEventListener('click', function () {
	score = 20;
	scoreOutput.textContent = score;
	document.querySelector('.message').textContent = 'Start guessing...';
	secretNumber = Math.trunc((Math.random() * 20) + 1);
	inputGuess.value = '';
	numberOutput.textContent = '?';
	guessContainer.style.background = '#2222';
	numberOutput.style.width = '10rem';
});



