//adicionado variáveis
const heroi = "perro en llamas"
let heroiXP = 11000
let nivel;

//Estrutura de decisão, conforme XP

if (heroiXP < 1000) {
    nivel = "Ferro";
} else if (heroiXP >= 1000 && heroiXP <= 2000) {
    nivel = "Bronze";
} else if (heroiXP >= 2001 && heroiXP <= 5000) {
    nivel = "Prata";
} else if (heroiXP >= 6001 && heroiXP <= 7000) {
    nivel = "Ouro";
} else if (heroiXP >= 7001 && heroiXP <= 8000) {
    nivel = "Platina";
} else if (heroiXP >= 8001 && heroiXP <= 9000) {
    nivel = "Ascendente";
} else if (heroiXP >= 9001 && heroiXP <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

//mensagem de saída
console.log("O heroi de nome " + heroi + "está no nível de " + nivel)
