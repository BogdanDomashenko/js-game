const buttons = document.querySelectorAll('button');
const $btn = document.getElementById('btn-kick');
const $btn1 = document.getElementById('btn-ulta');
const $logs = document.getElementById('logs');

const character = {
    name: 'Pikachu',
    type: 'electric',
    weakness: ['fighting', 'water', 'some'],
    hp: {
        current: 100,
        total: 100,
    },
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),

    renderHP: function() {
        this.renderHPLife();
        this.renderProgressbarHP();
    },
    
    renderHPLife: function(){
        this.elHP.innerText = this.hp.current + ' / ' + this.hp.total;
    },
    
    renderProgressbarHP: function() {
        this.elProgressbar.style.width = this.hp.current + '%';
    },
    
     changeHP: function(count){
        if (this.hp.current < count) {
            this.hp.current = 0;
            alert('Бедный '+ this.name +' проиграл бой!');
            $btn.disabled = true;
            $btn1.disabled = true;
        } else {
            this.hp.current -= count;
        }  
        const log = this === enemy ? generateLog(this, character, count) : generateLog(this, enemy, count);
        console.log(log);

        const $p = document.createElement('p');
        $p.innerText = log;
        $logs.appendChild($p);

        this.renderHP();
    
    },
    
     random: function(num) {
        return Math.ceil(Math.random() * num);
    }
}



const enemy = {
    name: 'Charmander',
    hp: {
        current: 100,
        total: 100,
    },
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
    
    renderHP: function() {
        this.renderHPLife();
        this.renderProgressbarHP();
    },
    
    renderHPLife: function(){
        this.elHP.innerText = this.hp.current + ' / ' + this.hp.total;
    },
    
     renderProgressbarHP: function() {
        this.elProgressbar.style.width = this.hp.current + '%';
    },
    
     changeHP: function(count){
        if (this.hp.current < count) {
            this.hp.current = 0;
            alert('Бедный'+ this.name +' проиграл бой!');
            $btn.disabled = true;
            $btn1.disabled = true;
        } else {
            this.hp.current -= count;
        }  
        const log = this === enemy ? generateLog(this, character, count) : generateLog(this, enemy, count);
        console.log(log);
        
        this.renderHP();
    },
    
     random: function(num) {
        return Math.ceil(Math.random() * num);
    }
}

const { name, type  = 'type isn\'t defined', weakness, ...rest } = character;
const { name: nameEnemy, ...restEnemy } = enemy;
console.log(name, weakness, type, rest);
console.log(nameEnemy, restEnemy);

function random(num) {
    return Math.ceil(Math.random() * num);
}


$btn.addEventListener('click', function () {
    console.log('Kick');
    character.changeHP(character.random(20), character);
    enemy.changeHP(enemy.random(20), enemy);
});

$btn1.addEventListener('click', function () {
    console.log('Kick');
    character.changeHP(character.random(70), character);
    enemy.changeHP(50, enemy);
});

let count = clickCounter(3);

buttons.forEach(button => button.addEventListener('click', () => {
    let currentCount = count();
    const $p = document.createElement('p');

    if(currentCount) {
        $p.innerText = "Осталось ударов: " + (currentCount.maxCount - currentCount.count);
        $logs.appendChild($p);
    }
    else {
        character.changeHP(100, character);

        $p.innerText = "Достигнут лимит ударов ";
        $logs.appendChild($p);
    }
}));

function clickCounter(maxCount) {
    let count = 0;

    return function() {
        if(count >= maxCount) {
            return false;
        }
        count++;
        return {count, maxCount};
    }
}


