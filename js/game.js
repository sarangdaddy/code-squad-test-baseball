const startBtn = document.querySelector(".cumputer__start__button");
const showComputerBalls = document.querySelector(".computer__ball__clone");
const inputUsersBalls = document.querySelector(".users__input__balls");
const checkBtn = document.querySelector(".users__start__btn");
const showUsersBalls = document.querySelector(".users__ball__clone");

let game = {};

// 1~9 볼을 가져온다.
game.getBalls = function (event) {
  event.preventDefault();
  this.balls = [];
  for (let i = 1; i <= 9; i++) {
    this.balls.push(i);
  }
  game.getComBalls(this.balls);
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
  const computerBallsText = this.computerBalls.join(" ");
  showComputerBalls.innerText = `컴퓨터 번호는 ${computerBallsText} 입니다.`;
};

//user가 입력한 숫자를 가져온다.
game.getUsersBalls = function (event) {
  event.preventDefault();
  this.usersBalls = inputUsersBalls.value.split("").map(Number);
  const usersBallsText = this.usersBalls.join(" ");
  showUsersBalls.innerText = `유저번호는 ${usersBallsText} 입니다.`;
  game.checkBalls(this.usersBalls);
};

//Computer와 users ball을 비교하는 함수
game.checkBalls = function (usersBalls) {
  console.log(usersBalls, this.computerBalls);
  console.log(indexOf(usersBalls[0]), indexOf(this.computerBalls[0]));

  let answer = [];
  let strike = 0;
  let ball = 0;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (
        this.computerBalls[i] === usersBalls[j] &&
        indexof(this.computerBalls[i]) === indexOf(usersBalls[j])
      ) {
        strike++;
        answer.push(strike);
        return answer;
      } else if (
        this.computerBalls[i] === usersBalls[j] &&
        indexof(this.computerBalls[i]) !== indexOf(usersBalls[j])
      ) {
        ball++;
        answer.push(ball);
        return answer;
      } else return (answer = "nothing");
    }
  }
  console.log(answer);
};

startBtn.addEventListener("click", game.getBalls);
checkBtn.addEventListener("click", game.getUsersBalls);

// 화면 시작과 동시 실행 함수
// game.init = function () {
//   this.getBalls;
// };
// game.init();
