let DARAH = document.getElementById('enemyhealth2').clientWidth //244
let DARAH2 = document.getElementById('playerhealth2').clientWidth //244

function attack(value,value2) {
    document.getElementById('enemyhealth2').style.width = DARAH - value;
    DARAH -= value;
    document.getElementById('playerhealth2').style.width = DARAH2 - value;
    DARAH2 -= value2;
}

document.getElementById('atk').onclick = function() {
    attack(40,20)
}
document.getElementById('atk2').onclick = function() {
    attack(10,40)
}
document.getElementById('atk3').onclick = function() {
    attack(20,10)
}