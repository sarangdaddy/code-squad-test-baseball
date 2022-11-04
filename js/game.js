const startBtn = document.querySelector(".cumputer__start__button");
const showComputerBalls = document.querySelector(".computer__ball__clone");
const inputUsersBalls = document.querySelector(".users__input__balls");
const checkBtn = document.querySelector(".users__start__btn");
const showUsersBalls = document.querySelector(".users__ball__clone");
const showResult = document.querySelector(".game__result__clone:first-child");
const showCount = document.querySelector(".game__result__clone:last-child");

let game = { countNumber: 0 };

// 1~9 볼을 가져온다.
game.getBalls = function (event) {
  event.preventDefault();
  this.balls = [];
  for (let i = 1; i <= 9; i++) {
    this.balls.push(i);
  }
  game.getComBalls(this.balls);
  game.countNumber = 0;
  showCount.innerText = `게임 카운트 : ${game.countNumber}`;
  showUsersBalls.innerText = `컴퓨터 번호를 맞춰보세요.`;
  showResult.innerText = ``;
};

// 1~9중 랜덤한 3개의 숫자를 컴퓨터가 가진다.
game.getComBalls = function (balls) {
  this.computerBalls = [];
  while (this.computerBalls.length < 3) {
    //while는 음수면 종료//
    const chosenBall = balls[Math.floor(Math.random() * balls.length)];
    if (this.computerBalls.indexOf(chosenBall) === -1) {
      //chosenBall이 존재하지 않으면 푸쉬 (중복 방지)
      this.computerBalls.push(chosenBall);
    }
  }
  showComputerBalls.innerText = `게임이 시작되었습니다.`;
};

//user가 입력한 숫자를 가져온다.
game.getUsersBalls = function (event) {
  event.preventDefault();
  this.usersBalls = inputUsersBalls.value.split("").map(Number);
  const usersBallsText = this.usersBalls.join(" ");
  showUsersBalls.innerText = `${usersBallsText} 를 입력했습니다.`;
  game.countNumber++;
  console.log(this.countNumber);
  game.checkBalls(this.usersBalls);
  game.getCount(game.countNumber);
  inputUsersBalls.value = "";
};

//Computer와 users ball을 비교하는 함수
game.checkBalls = function (usersBalls) {
  let strike = 0;
  let ball = 0;

  this.computerBalls.forEach((v, i) => {
    for (let j = 0; j < usersBalls.length; j++) {
      if (v === usersBalls[j]) {
        if (i === j) {
          strike++;
        } else if (i !== j) {
          ball++;
        }
      }
    }
  });

  this.getResult(strike, ball);
};

// 번호를 비교하여 결론을 보여주는 함수
game.getResult = function (strike, ball) {
  const computerBallsText = this.computerBalls.join(" ");
  if (strike === 0 && ball === 0) {
    showResult.innerText = `Nothing`;
  } else if (strike === 3) {
    showComputerBalls.innerText = `컴퓨터 번호는 ${computerBallsText} 입니다.`;
    showResult.innerText = `홈런!`;
  } else {
    showResult.innerText = `${strike} 스트라이크 ${ball} 볼 입니다.`;
  }
};

game.getCount = function (countNumber) {
  showCount.innerText = `게임 카운트 : ${countNumber}`;
};

startBtn.addEventListener("click", game.getBalls);
checkBtn.addEventListener("click", game.getUsersBalls);
