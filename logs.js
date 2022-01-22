function generateLog(firstPerson, secondPerson, damage) {
    const {name} = firstPerson;
    const {name: nameSecond} = secondPerson;
    const logs = [
        `${name} вспомнил что-то важное, но неожиданно ${nameSecond}, не помня себя от испуга, ударил в предплечье врага. Damage: ${damage} HP: ${secondPerson.hp.current}/${secondPerson.hp.total}`,
        `${name} поперхнулся, и за это ${nameSecond} с испугу приложил прямой удар коленом в лоб врага. Damage: ${damage} HP: ${secondPerson.hp.current}/${secondPerson.hp.total}`,
        `${name} забылся, но в это время наглый ${nameSecond}, приняв волевое решение, неслышно подойдя сзади, ударил. Damage: ${damage} HP: ${secondPerson.hp.current}/${secondPerson.hp.total}`,
        `${name} пришел в себя, но неожиданно ${nameSecond} случайно нанес мощнейший удар. Damage: ${damage} HP: ${secondPerson.hp.current}/${secondPerson.hp.total}`,
        `${name} поперхнулся, но в это время ${nameSecond} нехотя раздробил кулаком \<вырезанно цензурой\> противника. Damage: ${damage} HP: ${secondPerson.hp.current}/${secondPerson.hp.total}`,
        `${name} удивился, а ${nameSecond} пошатнувшись влепил подлый удар. Damage: ${damage} HP: ${secondPerson.hp.current}/${secondPerson.hp.total}`,
        `${name} высморкался, но неожиданно ${nameSecond} провел дробящий удар. Damage: ${damage} HP: ${secondPerson.hp.current}/${secondPerson.hp.total}`,
        `${name} пошатнулся, и внезапно наглый ${nameSecond} беспричинно ударил в ногу противника Damage: ${damage} HP: ${secondPerson.hp.current}/${secondPerson.hp.total}`,
        `${name} расстроился, как вдруг, неожиданно ${nameSecond} случайно влепил стопой в живот соперника. Damage: ${damage} HP: ${secondPerson.hp.current}/${secondPerson.hp.total}`,
        `${name} пытался что-то сказать, но вдруг, неожиданно ${nameSecond} со скуки, разбил бровь сопернику. Damage: ${damage} HP: ${secondPerson.hp.current}/${secondPerson.hp.total}`,
    ];

    return logs[random(logs.length) - 1];
}