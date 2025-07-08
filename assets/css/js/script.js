const imagens = [
  'assets/imagens/foto1.jpg',
  'assets/imagens/foto2.jpg',
  // adicione mais imagens aqui, ex: 'assets/imagens/foto3.jpg',
];

const slider = document.getElementById('slider');
let current = 0;

imagens.forEach((src, i) => {
  const img = document.createElement('img');
  img.src = src;
  img.classList.add('slide');
  img.style.opacity = 0;
  if (i === 0) {
    img.classList.add('active');
    img.style.transition = 'opacity 1s ease-in-out';
    setTimeout(() => {
      img.style.opacity = 1;
    }, 100);
  }
  slider.appendChild(img);
});

setInterval(() => {
  const slides = document.querySelectorAll('.slide');
  slides[current].style.opacity = 0; // fade out
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
  slides[current].style.transition = 'opacity 1s ease-in-out';
  slides[current].style.opacity = 1; // fade in
}, 4000);

const whatsBtn = document.getElementById('whatsapp-btn');
const numero = '47999471966';
const urlApp = window.location.href;
const mensagemTexto = 
  'Oi vida, criei esse app para não deixar passar em branco, não é um presente grandioso, mas fiz com muito carinho! 💖\n' +
  'Veja com carinho aqui: ' + urlApp;

const mensagem = encodeURIComponent(mensagemTexto);
whatsBtn.href = `https://wa.me/${numero}?text=${mensagem}`;
