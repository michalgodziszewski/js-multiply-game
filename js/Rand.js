class Rand {
  constructor() {
    this.numberOne = this.getRandomNumber();
    this.numberTwo = this.getRandomNumber();
  }

  getRandomNumber() {
    return Math.floor(Math.random() * 9) + 1;
  }

  checkIfWin(answer) {
    if (this.numberOne * this.numberTwo == answer) {
      return true;
    }
    return false;
  }
}
