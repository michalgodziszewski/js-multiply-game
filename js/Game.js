class Game {
  constructor() {
    this.settingsContainer = document.querySelector('.settings');
    this.gameContainer = document.querySelector('.game');
    this.resultContainer = document.querySelector('.result');
    this.gameMode = document.querySelector('.gameMode');
    this.gameRounds = document.querySelector('.gameRounds');
    this.gameTime = document.querySelector('.gameTime');
    this.numberOne = document.querySelector('.game__number-one');
    this.numberTwo = document.querySelector('.game__number-two');
    this.input = document.querySelector('input');
    this.form = document.querySelector('form');
    this.playButton = document.querySelector('.play');
    this.gameInterval;
    this.rand;
    this.rounds;
    this.time;
    this.player;
    this.isStart = true;
  }
  init(mode) {
    this.showGameContainer();
    const settings = new Settings().getModeSettings(mode);
    this.rounds = settings[0].rounds;
    this.time = settings[0].time;
    this.gameMode.textContent = settings[0].mode;
    this.gameRounds.textContent = this.rounds;
    this.gameTime.textContent = this.time;

    this.fillNumbers();

    this.player = new Player(settings);
    this.player.showStats();
    this.isStart = true;
    this.start();
  }

  start = () => {
    this.gameInterval = setInterval(this.changeTime, 1000);
    this.checkGame();
    setInterval(this.checkGameStatus, 50);
  };

  checkGameStatus = () => {
    if (this.player.checkGameEnd(this.rounds) && this.isStart) {
      this.gameContainer.classList.add('hide');
      this.resultContainer.classList.remove('hide');
      this.settingsContainer.classList.add('hide');
      this.player.getFinalResult();
      clearInterval(this.gameInterval);
    } else {
      this.playButton.addEventListener('click', () => {
        this.gameContainer.classList.add('hide');
        this.resultContainer.classList.add('hide');
        this.settingsContainer.classList.remove('hide');
        this.isStart = true;

        this.rounds = 20;
      });
    }
  };

  checkGame = () => {
    this.form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (this.rand.checkIfWin(parseInt(this.input.value))) {
        const points = this.player.getRoundPoints(this.time);
        this.player.roundPoint = 10;
        this.player.addStats(1, 0, 1, points);
        this.player.showStats();
        this.input.value = '';
        this.correct();
        this.changeRounds();
        this.fillNumbers();
        this.resetTime(this.player.settings[0].time);
      } else {
        if (this.player.settings[0].mode == 'hard') {
          this.player.roundPoint -= 1.5;
        }
        this.input.value = '';
        this.incorrect();
      }
    });
  };

  resetTime(time) {
    this.time = parseInt(time);
    this.gameTime.textContent = this.time;
  }

  changeTime = () => {
    this.time--;
    this.gameTime.textContent = this.time;
    if (this.time < 1 && this.rounds != 0) {
      this.resetTime(this.player.settings[0].time);
      this.changeRounds();
      this.player.addStats(0, 1, 1, 0);
      this.player.showStats();
      this.fillNumbers();
    }
  };

  changeRounds() {
    this.rounds--;
    this.gameRounds.textContent = this.rounds;
  }

  fillNumbers() {
    this.rand = new Rand();
    this.numberOne.textContent = this.rand.numberOne;
    this.numberTwo.textContent = this.rand.numberTwo;
  }

  showGameContainer() {
    this.settingsContainer.classList.add('hide');
    this.gameContainer.classList.remove('hide');
    this.resultContainer.classList.add('hide');
  }

  resetGame() {
    this.settingsContainer.classList.remove('hide');
    this.gameContainer.classList.add('hide');
    this.resultContainer.classList.add('hide');
  }

  correct() {
    this.gameContainer.style.border = '2px solid green';
    setTimeout(() => {
      this.gameContainer.style.border = 'none';
    }, 200);
  }

  incorrect() {
    this.gameContainer.style.border = '2px solid red';
    setTimeout(() => {
      this.gameContainer.style.border = 'none';
    }, 100);
  }
}
