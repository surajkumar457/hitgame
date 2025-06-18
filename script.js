const mouse = document.getElementById("mouse");
const gameArea = document.getElementById("game-area");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const startBtn = document.getElementById("start-btn");

let score = 0;
let timeLeft = 40;
let gameInterval;
let moveInterval;

function startGame() {
  score = 0;
  timeLeft = 40;
  scoreDisplay.textContent = score;
  timeDisplay.textContent = timeLeft;

  mouse.style.display = "block";
  moveMouse();

  gameInterval = setInterval(() => {
    timeLeft--;
    timeDisplay.textContent = timeLeft;
    if (timeLeft === 0) {
      clearInterval(gameInterval);
      clearInterval(moveInterval);
      mouse.style.display = "none";
      alert("⏰ Time's up! Your score: " + score);
    }
  }, 1000);

  moveInterval = setInterval(moveMouse, 800);
}

function moveMouse() {
  const maxX = gameArea.clientWidth - mouse.clientWidth;
  const maxY = gameArea.clientHeight - mouse.clientHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  mouse.style.left = `${x}px`;
  mouse.style.top = `${y}px`;
}

mouse.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = score;
});

startBtn.addEventListener("click", startGame);