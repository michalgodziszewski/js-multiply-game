const initBtns = document.querySelectorAll('.settings-btn');
let rules;
this.gameRules = new Rules();

initBtns.forEach((btn) =>
  btn.addEventListener(
    'mousemove',
    () => (rules = gameRules.getLevelRule(btn.textContent))
  )
);

const game = new Game();

initBtns.forEach((btn) =>
  btn.addEventListener('click', () => game.init(btn.textContent.toLowerCase()))
);
