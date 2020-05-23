class Player {
  constructor(settings) {
    this.rounds = document.querySelector('.gameRound');
    this.wins = document.querySelector('.gameWins');
    this.loss = document.querySelector('.gameLosses');
    this.points = document.querySelector('.gamePoints');
    this.gameRoundFinal = document.querySelector('.gameRoundFinal');
    this.winsFinal = document.querySelector('.gameWinsFinal');
    this.lossFinal = document.querySelector('.gameLossesFinal');
    this.pointsFinal = document.querySelector('.gamePointsFinal');
    this.stats = {
      wins: 0,
      losses: 0,
      round: 1,
      points: 0,
    };
    this.settings = settings;
    this.roundPoint = 10;
  }

  showStats() {
    this.rounds.textContent = this.stats.round;
    this.wins.textContent = this.stats.wins;
    this.loss.textContent = this.stats.losses;
    this.points.textContent = this.stats.points;
  }
  addStats(win = 0, losses = 0, round = 0, points = 0) {
    this.stats.wins += win;
    this.stats.losses += losses;
    this.stats.round += round;
    this.stats.points += points;
  }
  getRoundPoints(time) {
    if (this.settings[0].mode == 'easy') {
      return this.roundPoint;
    } else if (this.settings[0].mode == 'normal') {
      let delayTime = this.settings[0].time - time;
      let subTime = delayTime % 2 == 0 ? delayTime : delayTime - 1;
      console.log(subTime);
      let subPoints = subTime / 2;
      return this.roundPoint - subPoints;
    } else if (this.settings[0].mode == 'hard') {
      const delayTime = this.settings[0].time - time;
      if (this.roundPoint <= 0) {
        return 0;
      }
      return this.roundPoint - delayTime * 2;
    }
  }

  getFinalResult() {
    this.gameRoundFinal.textContent = this.settings[0].rounds;
    this.winsFinal.textContent = this.stats.wins;
    this.lossFinal.textContent = this.stats.losses;
    this.pointsFinal.textContent = this.stats.points;
  }

  checkGameEnd(round) {
    if (round < 1) {
      return true;
    }
    return false;
  }
}
