import { getInputDirection } from './input.js';

const speedBtnPlus = document.querySelector('.speed-plus')
const speedBtnMinus = document.querySelector('.speed-minus')
const scores = document.querySelector('.scores');

speedBtnMinus.addEventListener('click', () => SNAKE_SPEED--)
speedBtnPlus.addEventListener('click', () => SNAKE_SPEED++)


export let SNAKE_SPEED = 3;

const snakeBody = [{ x: 11, y: 11 }]
let newSegments = 0
let counter = 0;



export function update() {
    addSegments()
    const inputDirection = getInputDirection()
    getInputDirection()
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] }
    }

    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}

export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    });   
}

export function expandSnake(amount) {
    newSegments += amount
}

export function onSnake(position, {ignoreHead = false} = {}) {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) return false
        return equalPositions(segment, position)
    })
}

export function getSnakeHead() {
    return snakeBody[0]

}
export function snakeIntersection() {
    return onSnake(snakeBody[0], {ignoreHead: true })
}

function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
    
}

export function addSegments() {
    for(let i = 0; i < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
        counter++
        scores.textContent = counter;
    }
    newSegments = 0
}