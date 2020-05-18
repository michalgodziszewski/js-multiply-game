class Game {
  constructor() {
    this.settingsContainer = document.querySelector('.settings');
    this.gameContainer = document.querySelector('.game');
  }
  init(mode) {
    console.log(mode);
    this.showGameContainer();
  }

  showGameContainer() {
    this.settingsContainer.classList.add('hide');
    this.gameContainer.classList.remove('hide');
  }
}
