
let difficulty;
let	count = 0;
let userScore;
let scoreMultiplier = 1;
let scoreIncrease = 1;
let compTurn;
let playerTurn;

let cinnimonRoll = document.querySelector('.cinnimon-roll')
let bread = document.querySelector('.bread')
let fairyCake = document.querySelector('.fairy-cake')
let painAu = document.querySelector('.pain-au-chocolat')

let testOrder = [
    cinnimonRoll,
    bread,
    fairyCake,
    painAu
];

let flash;

let diffOption1 = document.querySelector('#DOption1');
let diffOption2 = document.querySelector('#DOption2');
let diffOption3 = document.querySelector('#DOption3');
let diffOption4 = document.querySelector('#DOption4');

diffOption1.addEventListener('click' (event) === {
    if (diffOption1 = checked) {
        difficulty == 3;
   
    }
})

diffOption2.addEventListener('click' (event) === {
    if (diffOption2 = checked) {
        difficulty == 2;
   
    }
})

diffOption3.addEventListener('click' (event) === {
    if (diffOption3 = checked) {
        difficulty == 1;
   
    }
})

diffOption4.addEventListener('click' (event) === {
    if (diffOption4 = checked) {
        difficulty == 0.5;
   
    }
})