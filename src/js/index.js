
'use strict';

const gameBtn = document.querySelectorAll('.btn');
const guessBtn = document.querySelector('.btn__guess');
const guessGame = document.querySelector('.guess');
const diceBtn = document.querySelector('.btn__dice');
const snakeBtn = document.querySelector('.btn__snake');
const header = document.querySelector('.header');
const diceGame = document.querySelector('.dice');
const sliderWrapper = document.querySelector('.slider');
const snakeGame = document.querySelector('.snake');
const rules = document.querySelector('p');




	


const deactivatePlayer = () => {
	gameBtn.forEach((btn) => {
		btn.classList.remove('active-guess');
		btn.classList.remove('active-dice');
		btn.classList.remove('active-snake');
		guessGame.classList.remove('showgame');
		diceGame.classList.remove('showgame');
		sliderWrapper.classList.remove('hide');
		snakeGame.classList.remove('showgame');
		rules.classList.remove('hide');
	});
};

guessBtn.addEventListener('click', () => {
	deactivatePlayer();
	rules.classList.add('hide');
	guessBtn.classList.add('active-guess');
	guessGame.classList.add('showgame');
	sliderWrapper.classList.add('hide');
	rules.classList.add('hide');
});

diceBtn.addEventListener('click', () => {
	deactivatePlayer();
	diceBtn.classList.add('active-dice');
	diceGame.classList.add('showgame');
	sliderWrapper.classList.add('hide');
	rules.classList.add('hide');
});

snakeBtn.addEventListener('click', () => {
	deactivatePlayer();
	snakeBtn.classList.add('active-snake');
	sliderWrapper.classList.add('hide');
	snakeGame.classList.add('showgame');
	rules.classList.add('hide');
});

header.addEventListener('click', deactivatePlayer);




