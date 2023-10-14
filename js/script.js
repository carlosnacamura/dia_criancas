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
/* Jogo do cebolinha */
const canvas = document.createElement("canvas");
const dimensao = canvas.getContext("2d");
const aba_jogos = document.querySelector(".jogos")
canvas.width = 600;
canvas.height = 300;
aba_jogos.appendChild(canvas);

let bgReady = false;
const bgImage = new Image();
bgImage.onload = () => {
  bgReady = true;
};
bgImage.src =
  "https://img.freepik.com/fotos-premium/jogo-de-video-de-fundo-abstrato-de-esports-scifi-gaming-cyberpunk-vr-simulacao-de-realidade-virtual-e-cena-do-metaverso-suporte-pedestal-palco-ilustracao-3d-renderizacao-futurista-sala-de-brilho-de-neon_42100-4107.jpg";
let heroReady = false;
let heroImage = new Image();
heroImage.onload = () => {
  heroReady = true;
};
heroImage.src = "imgs/shrek.png";
let monsterReady = false;
let monsterImage = new Image();
monsterImage.onload = () => {
  monsterReady = true;
};
monsterImage.src = "imgs/cebola.png";

const hero = {
  speed: 256,
  x: 0,
  y: 0,
};
const monster = {
  x: 0,
  y: 0,
};
let monstrosPegos = 0;

const keysDown = {};

addEventListener("keydown", (evt) => {
  keysDown[evt.key] = true;
});
addEventListener("keyup", (evt) => {
  delete keysDown[evt.key];
});

const reset = () => {
  hero.x = canvas.width / 2;
  hero.y = canvas.height / 2;
  monster.x = 32 + Math.random() * (canvas.width - 32);
  monster.y = 32 + Math.random() * (canvas.height - 32);
};

const update = (modificador) => {
  if (keysDown["w"]) {
    hero.y -= hero.speed * modificador;
  }
  if (keysDown["s"]) {
    hero.y += hero.speed * modificador;
  }
  if (keysDown["a"]) {
    hero.x -= hero.speed * modificador;
  }
  if (keysDown["d"]) {
    hero.x += hero.speed * modificador;
  }

  if (
    hero.x <= monster.x + 32 &&
    monster.x <= hero.x + 32 &&
    hero.y <= monster.y + 32 &&
    monster.y <= hero.y + 32
  ) {
    ++monstrosPegos;
    reset();
  }
};

const render = () => {
  if (bgReady) {
    dimensao.drawImage(bgImage, 0, 0);
  }
  if (heroReady) {
    dimensao.drawImage(heroImage, hero.x, hero.y);
  }
  if (monsterReady) {
    dimensao.drawImage(monsterImage, monster.x, monster.y);
  }
  dimensao.fillStyle = "rgb(250,250,250)";
  dimensao.font = "24px Helvetica";
  dimensao.textAlign = "left";
  dimensao.textBaseline = "top";
  dimensao.fillText("Monstros pegos: " + monstrosPegos, 32, 32);
};

const main = () => {
  const now = Date.now();
  const delta = now - then;

  update(delta / 1000);
  render();

  then = now;
  requestAnimationFrame(main);
};

const w = window;
const requestAnimationFrame =
  w.requestAnimationFrame || w.webkitRequestAnimationFrame;
let then = Date.now();
reset();
main();