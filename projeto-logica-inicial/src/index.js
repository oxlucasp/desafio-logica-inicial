const heroi = "perro en llamas";
let heroiXP = 11000;
let nivel;
let mensagem;

// Estrutura de decisão, conforme heroiXP
if (heroiXP < 1000) {
  nivel = "Ferro";
  mensagem = "Parabéns, você desbloqueou a picareta";
} else if (heroiXP >= 1000 && heroiXP <= 2000) {
  nivel = "Bronze";
  mensagem = "Parabéns, agora você tem uma espada";
} else if (heroiXP >= 2001 && heroiXP <= 5000) {
  nivel = "Prata";
  mensagem = "Parabéns, você desbloqueou a adaga";
} else if (heroiXP >= 6001 && heroiXP <= 7000) {
  nivel = "Ouro";
  mensagem = "Parabéns, você desbloqueou a skin lendária";
} else if (heroiXP >= 7001 && heroiXP <= 8000) {
  nivel = "Platina";
  mensagem = "Parabéns, você agora pode ter defesa, ataque e magia aumentada em 10.000";
} else if (heroiXP >= 8001 && heroiXP <= 9000) {
  nivel = "Ascendente";
  mensagem = "Parabéns, agora você receberá menos dano de picareta, espada e adagas";
} else if (heroiXP >= 9001 && heroiXP <= 10000) {
  nivel = "Imortal";
  mensagem = "Parabéns, sua arma principal causará mais dano, e lançará chamas ao bater em inimigos";
} else {
  nivel = "Radiante";
  mensagem = "Parabéns, você está no auge do poder, sua arma principal causará mais dano e lançará chamas ao bater em inimigos!";
}

// Mensagem de saída
console.log("O heroi de nome " + heroi + " está no nível de " + nivel + ". " + mensagem);