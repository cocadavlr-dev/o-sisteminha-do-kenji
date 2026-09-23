const checkout = 'https://pay.hotmart.com/G107731658H';

document.querySelectorAll('.checkout').forEach((link) => { link.href = checkout; });
document.getElementById('year').textContent = new Date().getFullYear();

const upgradeStyles = document.createElement('link');
upgradeStyles.rel = 'stylesheet';
upgradeStyles.href = 'upgrade.css';
document.head.append(upgradeStyles);

document.querySelector('.hero-product').innerHTML = `
  <p class="paper-note">Terra que alimenta.<br>Vida que fica.</p>
  <div class="book-mockup" aria-label="Mockup do ebook O Sisteminha do Kenji">
    <i class="book-pages"></i><i class="book-spine"></i>
    <img src="public/images/ebook-cover-01.png" alt="Capa oficial do ebook O Sisteminha do Kenji">
  </div>
`;

const projectPlans = [
  ['plan-100', 'Projeto visual de um sisteminha compacto de 100 metros quadrados'],
  ['plan-250', 'Projeto visual de um sisteminha produtivo de 250 metros quadrados'],
  ['plan-500', 'Projeto visual de um sisteminha integrado de 500 metros quadrados']
];
document.querySelectorAll('.plot').forEach((plot, index) => {
  const [visualClass, label] = projectPlans[index];
  plot.classList.add('farm-plan', visualClass);
  plot.innerHTML = `<span role="img" aria-label="${label}"></span>`;
});

const finalImage = document.querySelector('.final img');
finalImage.outerHTML = `
  <div class="book-mockup final-book" aria-label="Mockup do ebook O Sisteminha do Kenji">
    <i class="book-pages"></i><i class="book-spine"></i>
    <img src="public/images/ebook-cover-01.png" alt="Capa oficial do ebook O Sisteminha do Kenji">
  </div>
`;

function enableMobileLoop(selector) {
  if (!window.matchMedia('(max-width: 620px)').matches) return;
  const rail = document.querySelector(selector);
  if (!rail || rail.querySelector('.mobile-loop-track')) return;
  const items = [...rail.children];
  const track = document.createElement('div');
  track.className = 'mobile-loop-track';
  items.forEach((item) => track.appendChild(item));
  items.forEach((item) => track.appendChild(item.cloneNode(true)));
  rail.appendChild(track);
}

enableMobileLoop('.sizes');
enableMobileLoop('.preview-grid');
enableMobileLoop('.bonus-grid');

const testimonials = Array.from({ length: 9 }, (_, index) => `
  <article class="testimonial-card"><img src="public/images/testimonial-${index + 1}.jpg" alt="Depoimento real de leitor do Sisteminha do Kenji"></article>
`).join('');
const proof = document.createElement('section');
proof.className = 'testimonials';
proof.id = 'depoimentos';
proof.innerHTML = `
  <div class="shell proof-heading">
    <p class="kicker dark">HISTÓRIAS REAIS</p>
    <h2>Resultados reais de pessoas reais</h2>
    <p>Gente de todo o Brasil colocando o sisteminha em prática no seu próprio espaço.</p>
  </div>
  <div class="testimonial-window" aria-label="Depoimentos reais em movimento contínuo">
    <div class="testimonial-track">${testimonials}${testimonials}</div>
  </div>
  <p class="marquee-note">Deslize para ver mais histórias reais <span>→</span></p>
`;
document.querySelector('.guarantee').before(proof);
document.querySelector('.hero').after(document.querySelector('#bonus'));

const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
menu.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', open);
});
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => nav.classList.remove('open')));

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) entry.target.classList.add('visible');
}), { threshold: .12 });
document.querySelectorAll('.reveal,.sizes article,.preview-grid article,.bonus-grid article,.guarantee-grid').forEach((element) => observer.observe(element));
