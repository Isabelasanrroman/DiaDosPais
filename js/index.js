const carrossel = document.querySelector(".carrossel");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dots = document.querySelectorAll(".dot");

let index = 0;

// Função para atualizar carrossel
function updateCarousel() {
  carrossel.scrollTo({
    left: index * carrossel.clientWidth,
    behavior: "smooth"
  });

  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

// Botão próximo
nextBtn.addEventListener("click", () => {
  index++;
  if (index >= slides.length) index = 0;
  updateCarousel();
});

// Botão anterior
prevBtn.addEventListener("click", () => {
  index--;
  if (index < 0) index = slides.length - 1;
  updateCarousel();
});

// Clique nos dots
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    updateCarousel();
  });
});

// Auto-play devagarinho
setInterval(() => {
  index++;
  if (index >= slides.length) index = 0;
  updateCarousel();
}, 2500); // 5 segundos




const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});




const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

let tocando = false;

musicBtn.addEventListener("click", () => {
  if (!tocando) {
    bgMusic.play();
    musicBtn.classList.add("playing");
    musicBtn.innerText = "🎵";
    tocando = true;
  } else {
    bgMusic.pause();
    musicBtn.classList.remove("playing");
    musicBtn.innerText = "🎵";
    tocando = false;
  }
});











const chatMessages = document.getElementById("chatMessages");

const conversa = [
  { tipo: "filha", texto: "Oi pai... 💙" },
  { tipo: "mae", texto: "Oi filha ☺️" },
  { tipo: "filha", texto: "Eu só queria dizer que eu te amo muito." },
  { tipo: "mae", texto: "Eu também te amo demais filha 😭💕" },
  { tipo: "filha", texto: "Obrigada por tudo que você fez por mim..." },
  { tipo: "filha", texto: "Obrigada por estar sempre comigo e me proteger." },
  { tipo: "mae", texto: "Você é o maior presente que Deus me deu 💞" },
  { tipo: "filha", texto: "Eu tenho muito orgulho de ser sua filha." },
  { tipo: "mae", texto: "E eu tenho orgulho da mulher incrível que você está se tornando 💗" },
  { tipo: "filha", texto: "Feliz dia dos pai, papai 💙✨" },
  { tipo: "mae", texto: "Obrigada Bela... você também é muito especial pra mim! 😭💖" }
];

let i = 0;

function mostrarMensagem() {
  if (i >= conversa.length) return;

  const msg = document.createElement("div");
  msg.classList.add("msg", conversa[i].tipo);
  msg.innerText = conversa[i].texto;

  chatMessages.appendChild(msg);

  // sempre rolar pra baixo
  chatMessages.scrollTop = chatMessages.scrollHeight;

  i++;

  setTimeout(mostrarMensagem, 1300); // tempo entre mensagens
}

// começar quando carregar a página
window.addEventListener("load", () => {
  setTimeout(mostrarMensagem, 1000);
});









const frasesAgro = [

  "Você é forte, incansável e essencial 💙",

  "Seu esforço construiu tudo ao nosso redor 🚜",

  "Obrigada por nunca desistir da gente 🌾",

];

const bannerText =
  document.getElementById("bannerText");

let fraseAtual = 0;

function trocarMensagem() {

  bannerText.style.opacity = 0;

  setTimeout(() => {

    fraseAtual++;

    if(fraseAtual >= frasesAgro.length) {
      fraseAtual = 0;
    }

    bannerText.innerText =
      frasesAgro[fraseAtual];

    bannerText.style.opacity = 1;

  }, 400);
}

setInterval(trocarMensagem, 4000);









const giftBox =
document.getElementById("giftBox");

const giftArea =
document.querySelector(".gift-area");

giftBox.addEventListener("click",()=>{

  giftBox.classList.add("open");

  giftArea.classList.add("show");

});