const startBtm = document.querySelector(".cumputer__start__button");
const showComputerBalls = document.querySelector(".computer__ball__clone");

function getBalls(event) {
  event.preventDefault();
  const balls = [];
  for (let i = 1; i <= 9; i++) {
    balls.push(i);
  }
  getComputerBalls(balls);
}

function getComputerBalls(balls) {
  const computerBalls = [];

  while (computerBalls.length < 3) {
    const chosenBall = balls[Math.floor(Math.random() * balls.length)];
    if (computerBalls.indexOf(chosenBall) === -1) {
      computerBalls.push(chosenBall);
    }
  }
  const computerBallsText = computerBalls.join(" ");
  showComputerBalls.innerText = `컴퓨터 번호는 ${computerBallsText} 입니다.`;
}

startBtm.addEventListener("click", getBalls);
