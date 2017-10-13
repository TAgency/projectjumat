let DARAH = document.getElementById('enemyhealth2').clientWidth //244

function attack(value) {
    document.getElementById('enemyhealth2').style.width = DARAH - value;
    DARAH -= value;
}

document.getElementById('atk').onclick = function() {
    attack(40)
}
document.getElementById('atk2').onclick = function() {
    attack(0)
}
document.getElementById('atk3').onclick = function() {
    attack(20)
}