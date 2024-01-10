// define html elements
const board = document.getElementById('game-board');
const instructionText = document.getElementById('instruction-text');
const logo = document.getElementById('logo');
const highScoreText= document.getElementById('highScore');

// define game variables
const gridSize = 20 
const score = document.getElementById('score')
let snake  = [{x: 10, y:10}]
let food = generateFood();
let highScore = 0;
let direction = 'right';
let gameInterval;
let gameSpeedDelay = 200;
let gameStarted = false;

// Draw game map, snake and food
function draw() {
    board.innerHTML = '';
    drawSnake();
    drawFood();
    updateScore();
}

// Draw snake
function drawSnake() {
    snake.forEach((segment) => {
        const snakeElement = createGameElement('div', 'snake');
        setPosition(snakeElement, segment)
        board.appendChild(snakeElement);
    });
}

// Create snake or food or div
function createGameElement(tag, className) {
    const element= document.createElement(tag);
    element.className = className;
    return element;
}

// Set position of the snake or food
function setPosition(element, position) {
    element.style.gridColumn = position.x;
    element.style.gridRow = position.y;

}

// Draw food
function drawFood() {
    if (gameStarted) {
        const foodElement = createGameElement('div', 'food')
        setPosition(foodElement, food);
        board.appendChild(foodElement);
    }
}

// Random pos food
function generateFood() {
    let validPosition = false;
    let food;
    while (!validPosition) {
        const x = Math.floor(Math.random() * gridSize) + 1;
        const y = Math.floor(Math.random() * gridSize) + 1;
        validPosition = !snake.some(segment => segment.x === x && segment.y === y);
        if (validPosition) {
            food = {x, y};
        }
    }
    return food;
 }

// Snake movement
function move() {
    const head = { ...snake[0]};
    switch (direction) {
        case 'up':
            head.y--; 
            break;
        case 'down':
            head.y++; 
            break;
        case 'left':
            head.x--; 
            break;
        case 'right':
            head.x++; 
            break;
    }
    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        food = generateFood();
        increaseSpeed();
        clearInterval(gameInterval);
        gameInterval = setInterval(() =>{
            move();
            checkCollision();
            draw();
        }, gameSpeedDelay);
    } else {
        snake.pop();
    }
}

// Start game
function startGame() {
    gameStarted = true;
    instructionText.style.display = 'none' ;
    logo.style.display = 'none' ;
    gameInterval = setInterval(() => {
        move();
        checkCollision();
        draw();
    }, gameSpeedDelay);
}

// Keypress listener 
function handleKeyPress(event) {
    if (
        ( !gameStarted && event.code === 'Space' ) ||
        ( !gameStarted && event.Key === ' ' )
        ) {
        startGame();
    } else {
        switch (event.key) {
            case 'ArrowUp':
                if (direction !== 'down') {
                   direction = 'up';
                }
                break;
            case 'ArrowDown':
                if (direction !== 'up') {
                   direction = 'down';
                }
                break;
            case 'ArrowLeft':
                if (direction !== 'right') {
                   direction = 'left';
                }
                break;
            case 'ArrowRight':
                if (direction !== 'left') {
                   direction = 'right';
                }
                break;
            case 'w':
                if (direction !== 'down') {
                   direction = 'up';
                }
                break;
            case 'a':
                if (direction !== 'right') {
                   direction = 'left';
                }
                break;
            case 's':
                if (direction !== 'up') {
                   direction = 'down';
                }
                break;
            case 'd':
                if (direction !== 'left') {
                   direction = 'right';
                }
                break;
        }
    }
 }

// Increases speed
function increaseSpeed() {
    console.log(gameSpeedDelay);
    if (gameSpeedDelay > 150) {
        gameSpeedDelay -= 5;
    } else if (gameSpeedDelay > 100) {
        gameSpeedDelay -= 3;
    }else if (gameSpeedDelay > 50) {
        gameSpeedDelay -= 2;
    }else if (gameSpeedDelay > 25) {
        gameSpeedDelay -= 1;
    }
}

// Check collision
function checkCollision(){
    const head = snake[0];

    // border collision 
    if (head.x < 1 || head.x > gridSize || head.y < 1 || head.y > gridSize) {
        resetGame();
    }
    // self collision
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            resetGame();
        }
    }
}

// Reset game
function resetGame() {
    updateHighScore();
    stopGame();
    snake = [{x: 10, y: 10}];
    food = generateFood();
    direction = 'right';
    gameSpeedDelay = 200;
    updateScore();
}

// Update Score
function updateScore() {
    const currentScore = snake.length - 1;
    score.textContent = currentScore.toString().padStart(3, '0');
}

// Stop game
function stopGame() {
    clearInterval(gameInterval);
    gameStarted= false;
    instructionText.style.display = 'block'
    logo.style.display = 'block'
}

// Update highscore
function updateHighScore() {
    const currentScore = snake.length - 1;
    if (currentScore > highScore) {
        highScore = currentScore;
        highScoreText.textContent = highScore.toString().padStart(3, '0');
    }
    highScoreText.style.display = 'block'
}

document.addEventListener('keydown', handleKeyPress);
if (/Android|iPhone|iPad|Opera Mini/i.test(navigator.userAgent)) {
    window.alert("Sorry this page is not available for mobile devices, I will take you back to the previous page! :3")
    history.back()
}