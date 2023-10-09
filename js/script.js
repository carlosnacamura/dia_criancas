/* Cursor diferenciado */
const position = {
  x: 0,
  y: 0,
};
const cursor = document.querySelector(".circulo");
const div_jogos = document.querySelector(".jogos");
addEventListener("mousemove", (evt) => {
  position.x = evt.clientX;
  position.y = evt.clientY;
  cursor.style.left = position.x + "px";
  cursor.style.top = position.y + "px";
});
addEventListener("mousedown", () => {
  cursor.style.background = "lightblue";
});
addEventListener("mouseup", () => {
  cursor.style.background = "";
});

/* Jogo de adivinhar número */
let numero_sort = Math.floor(Math.random() * 101);
const numero_tent = document.querySelector("input[type=number]");
const titulo_numeroSort = document.querySelector(".titulo_numeroSort");
let contagem = 0;
function tentarSorte() {
  if (numero_tent.value == numero_sort) {
    titulo_numeroSort.innerHTML = `PARABÉNS VOCÊ ACERTOU!!!!<br>Número de tentativas: ${contagem}`;
  } else if (numero_tent.value < numero_sort && numero_tent.value > 0) {
    titulo_numeroSort.textContent = "Seu número é menor que o sorteado";
    contagem += 1;
  } else if (numero_tent.value > numero_sort) {
    titulo_numeroSort.textContent = "Seu número é maior que o sorteado";
    contagem += 1;
  } else if (numero_tent.value <= 0) {
    titulo_numeroSort.textContent = "Por favor coloque um valor válido";
  }
}
function tentarResetar() {
  numero_sort = Math.floor(Math.random() * 101);
  titulo_numeroSort.textContent = "Número resetado";
}
addEventListener("keydown", (evt) => {
  if (evt.key === "Enter") {
    tentarSorte();
  } else if (evt.key === "r") {
    tentarResetar();
    contagem = 0
  }
});
