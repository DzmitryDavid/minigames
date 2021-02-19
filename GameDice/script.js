'use strict';
const onePlayerScore = document.getElementById('score--0');
const secondPlayerScore = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const currentScoreOne = document.querySelector('#current--0');
const currentScoreTwo = document.querySelector('#current--1');
const playerOneSection = document.querySelector('.player--0');
const playerTwoSection = document.querySelector('.player--1');
const newGameBtn = document.querySelector('.btn--new');
let scores, currentScore, activePlayer, playing;

const init = function () {
	scores = [0, 0];
	currentScore = 0;
	activePlayer = 0;
	playing = true;
	activePlayer = 0;
	dice.classList.add('hidden');
	onePlayerScore.textContent = 0;
	secondPlayerScore.textContent = 0;
	playing = true;
	currentScoreOne.textContent = currentScore;
	currentScoreTwo.textContent = currentScore;
	document.querySelector(`#name--${activePlayer}`).textContent = `Player ${activePlayer + 1}`;
	document.querySelector(`#name--${activePlayer + 1}`).textContent = `Player ${activePlayer + 2}`;
	document.querySelectorAll('.player').forEach(el => {
		document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
		document.querySelector(`.player--${activePlayer + 1}`).classList.remove('player--winner');
		el.classList.remove('player--active');
	});
	document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
};

init();


const switchPlayer = function () {
	document.querySelector(`#current--${activePlayer}`).textContent = 0;
	currentScore = 0;
	activePlayer = activePlayer === 0 ? 1 : 0;
	playerOneSection.classList.toggle('player--active');
	playerTwoSection.classList.toggle('player--active');
};

rollBtn.addEventListener('click', () => {
	if (playing) {
		const number = Math.trunc((Math.random() * 6) + 1);
		dice.classList.remove('hidden');
		dice.src = `img/dice-${number}.png`;

		if (number !== 1) {
			currentScore += number;
			document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
		} else {
			switchPlayer();
		}
	}
});

holdBtn.addEventListener('click', function () {
	if (playing) {
		scores[activePlayer] += currentScore;
		document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];
		if (scores[activePlayer] >= 10) {
			document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
			document.querySelector(`#name--${activePlayer}`).textContent += ' WIN!';
			document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
			playing = false;
		} else {
			switchPlayer();
		}
	}
});

newGameBtn.addEventListener('click', init);

