class Settings {
  constructor() {
    this.settings = [
      {
        mode: 'easy',
        time: 15,
        points: 10,
        rounds: 10,
      },
      {
        mode: 'normal',
        time: 10,
        points: 10,
        rounds: 15,
      },
      {
        mode: 'hard',
        time: 5,
        points: 10,
        rounds: 20,
      },
    ];
  }

  getModeSettings(mode) {
    return this.settings.filter((setting) => setting.mode == mode);
  }
}
