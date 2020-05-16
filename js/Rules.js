class Rules {
  constructor() {
    this.initBtns = document.querySelectorAll('.settings-btn');
    this.rulesContainser = document.querySelector('.settings__rules');
    this.mode = '';
    this.rules = [
      {
        mode: 'easy',
        rule: [
          '- mnożenie w zakresie do 100 (klasyczna tabliczka mnożenia)',
          '- limit czasu 15 sekund',
          '- 10 pkt za poprawną odpowiedź',
          '- 10 rund',
        ],
      },
      {
        mode: 'normal',
        rule: [
          '- mnożenie w zakresie do 100 (klasyczna tabliczka mnożenia)',
          '- limit czasu 10 sekund',
          '- 10 pkt za odpowiedź, ale za każde 2 sekundy zwłoki zmniejszamy liczbę możliwych punktów o 1.',
          '- 15 rund',
        ],
      },
      {
        mode: 'hard',
        rule: [
          '- mnożenie w zakresie do 100 (klasyczna tabliczka mnożenia)',
          '- limit czasu 5 sekund',
          '- 10 pkt za odpowiedź, ale za każdą  sekundę zwłoki zmniejszamy liczbę możliwych punktów o 2.',
          '- każda błędna odpowiedź odejmuje 1/2 (w zaokrągleniu) punktów możliwych do uzyskania',
          '- s20 rund.',
        ],
      },
    ];
  }

  getLevelRule(mode) {
    this.mode = mode;
    const rules = this.rules.filter(
      (rule) => rule.mode == this.mode.toLowerCase()
    );

    this.rulesContainser.textContent = '';
    const ul = document.createElement('ul');
    ul.classList.add('settings__list');

    rules[0].rule.forEach((rule) => {
      const li = document.createElement('li');
      li.classList.add('settings__item');
      li.textContent = rule;
      ul.appendChild(li);
    });
    this.rulesContainser.appendChild(ul);
  }
}
