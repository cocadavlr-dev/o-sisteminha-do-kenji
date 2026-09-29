const checkout = 'https://pay.hotmart.com/G107731658H';

const projects = [
  { size: '10 m²', image: 'project-10m2-aerial.png', name: 'Primeiro Sisteminha', quote: 'Quero começar pequeno.', focus: 'Horta compacta, água, compostagem e circulação.', points: ['Horta compacta', 'Água planejada', 'Compostagem', 'Circulação'] },
  { size: '20 m²', image: 'project-20m2-aerial.png', name: 'Horta ampliada', quote: 'Quero plantar em etapas.', focus: 'Mais área de horta e plantio escalonado.', points: ['Mais canteiros', 'Plantio em etapas', 'Espaço organizado', 'Rotina possível'] },
  { size: '30 m²', image: 'project-30m2-aerial.png', name: 'Horta diversificada', quote: 'Quero diversificar.', focus: 'Canteiros, cultivo vertical e plantas de maior permanência.', points: ['Canteiros', 'Cultivo vertical', 'Plantas perenes', 'Circulação'] },
  { size: '50 m²', image: 'project-50m2-aerial.png', name: 'Quintal produtivo', quote: 'Quero integrar horta e perenes.', focus: 'Horta e área para frutíferas ou perenes.', points: ['Horta', 'Perenes', 'Setores claros', 'Começo gradual'] },
  { size: '100 m²', image: 'project-100m2-aerial.png', name: 'Sistema diversificado', quote: 'Tenho mais espaço e quero organizar.', focus: 'Organização por setores e circulação.', points: ['Setores', 'Circulação', 'Água planejada', 'Mais clareza'] },
  { size: '250 m²', image: 'project-250m2-aerial.png', name: 'Sistema familiar', quote: 'Quero integrar mais módulos.', focus: 'Horta, pomar ou perenes, organização e área reservada para módulo de aves.', points: ['Horta', 'Pomar ou perenes', 'Área reservada', 'Módulos'] },
  { size: '500 m²', image: 'project-500m2-aerial.png', name: 'Sistema expandido', quote: 'Quero organizar uma área maior.', focus: 'Setores, circulação, água, pomar ou perenes, área reservada para aves e expansão em etapas.', points: ['Setores', 'Água', 'Expansão gradual', 'Área reservada'] }
];

const bonuses = [
  { number: '01', title: 'Planner do Terreno', prompt: 'Antes de começar...', text: 'Meça, desenhe e organize seu espaço no papel antes de marcar o chão.' },
  { number: '02', title: 'Guia de Plantio do Sisteminha', prompt: 'Terminei de montar. O que eu planto?', text: 'Ajuda a escolher os cultivos e começar sem tentar plantar tudo de uma vez.' },
  { number: '03', title: 'Lista de Compras por Tamanho', prompt: 'O que eu realmente preciso comprar?', text: 'Organiza materiais por projeto e por etapa para evitar compras no chute.' },
  { number: '04', title: 'Calendário de Plantio', prompt: 'Será que faz sentido plantar isso agora?', text: 'Material de apoio para consultar épocas de plantio considerando região e particularidades das culturas.' },
  { number: '05', title: 'SOS Horta', prompt: 'Tem alguma coisa errada com a planta. E agora?', text: 'Ajuda a observar folhas amarelando, murcha, furos, crescimento parado e excesso de água antes de tentar corrigir.' }
];

const faqs = [
  ['Preciso ter experiência?', 'Não. Os materiais foram organizados para serem práticos e guiados, inclusive para quem está começando. Você segue o projeto por etapas.'],
  ['Como sei qual tamanho escolher?', 'Comece pelo Guia 00. Ele ajuda a medir o espaço disponível e observar fatores como sol, água, drenagem, acesso e obstáculos antes de escolher entre 10, 20, 30, 50, 100, 250 ou 500 m².'],
  ['Tenho 500 m². Preciso fazer o projeto de 500 m²?', 'Não. Você pode começar por uma área menor e ampliar depois. O tamanho do terreno não obriga você a utilizar tudo.'],
  ['Meu terreno não tem exatamente o formato do desenho. E agora?', 'As plantas servem como bases didáticas. O material também orienta a observar o espaço real e adaptar a implantação às condições do terreno.'],
  ['O que eu recebo?', 'Você recebe o Guia 00, sete projetos de 10 a 500 m² e cinco bônus de apoio, totalizando 13 materiais digitais.'],
  ['Os materiais são físicos?', 'Não. São materiais digitais em PDF.'],
  ['Posso acessar pelo celular?', 'Sim. Os PDFs podem ser acessados em celular, tablet ou computador.'],
  ['Como recebo?', 'O acesso aos materiais digitais é liberado após a confirmação do pagamento pela plataforma.'],
  ['E se eu não gostar?', 'Você tem 7 dias de garantia. Dentro desse prazo, poderá solicitar o reembolso conforme as condições da plataforma.'],
  ['Os projetos garantem uma quantidade de produção?', 'Não. Produção depende de cultura, clima, solo, manejo, água e outras condições. Os materiais orientam a implantação e o manejo, não prometem rendimento fixo.']
];

const testimonials = [
  ['testimonial-1.jpg', '“Agora tenho minha horta em casa. Obrigado, Kenji!”', 'João M. · SP'],
  ['testimonial-2.jpg', '“Conteúdo simples e muito prático. Já estou aplicando!”', 'Marcia L. · PR'],
  ['testimonial-3.jpg', '“Projeto de 250 m² já em andamento. Está dando certo!”', 'Rafael S. · MG'],
  ['testimonial-4.jpg', '“Nunca imaginei que seria tão simples. Hoje colho meus próprios alimentos!”', 'Fernanda A. · SC'],
  ['testimonial-5.jpg', '“Explicações claras e objetivas. Show!”', 'Seu Antônio · GO'],
  ['testimonial-6.jpg', '“Já tenho minhas galinhas e minha horta. O livro me ajudou demais!”', 'Cleide R. · BA'],
  ['testimonial-7.jpg', '“Informação de qualidade e sem enrolação. Recomendo!”', 'Tiago F. · RS'],
  ['testimonial-8.jpg', '“Organizei meu terreno com as dicas do livro. Hoje tá tudo produzindo!”', 'Juliana P. · RJ'],
  ['testimonial-9.jpg', '“Vale cada página. Conhecimento que realmente funciona na prática.”', 'Nilson T. · ES']
];

const situations = [
  ['TENHO POUCO ESPAÇO.', 'Comece por uma área que você realmente consegue observar e cuidar.'],
  ['TENHO TERRENO, MAS NÃO SEI POR ONDE COMEÇAR.', 'O Guia 00 ajuda a olhar para o espaço antes de escolher um projeto.'],
  ['NUNCA FIZ UMA HORTA ASSIM.', 'O caminho aparece em etapas, sem exigir que você monte tudo de uma vez.'],
  ['QUERO ORGANIZAR MELHOR O QUE JÁ TENHO.', 'Use o projeto como base para enxergar setores, circulação e próximos passos.'],
  ['TENHO UMA ÁREA GRANDE, MAS QUERO COMEÇAR MENOR.', 'O tamanho disponível não obriga você a ocupar tudo agora.']
];

const method = [
  ['Veja o desenho', 'Entenda como o espaço será organizado.'],
  ['Confira as medidas', 'Veja onde marcar e quanto espaço cada parte ocupa.'],
  ['Faça uma etapa de cada vez', 'O material mostra o que fazer primeiro e o que pode esperar.'],
  ['Plante', 'Escolha os cultivos e comece sem querer fazer tudo de uma vez.'],
  ['Cuide', 'Observe umidade, crescimento e a rotina do Sisteminha.']
];

const journey = [
  ['FAÇA', ['Escolha o local', 'Marque o espaço', 'Organize os setores', 'Prepare os canteiros', 'Pense água, composto e circulação']],
  ['PLANTE', ['Escolha o que sua casa consome', 'Organize os cultivos', 'Plante sem ocupar tudo de uma vez', 'Observe o espaço de cada cultura']],
  ['CUIDE', ['Observe o solo', 'Ajuste a rega', 'Acompanhe os primeiros dias', 'Mantenha uma rotina', 'Observe antes de tentar corrigir']]
];

const journeyMap = [
  ['ANTES DE COMEÇAR', 'Guia 00 + Planner'],
  ['PARA MONTAR', 'Projeto do tamanho escolhido'],
  ['PARA PLANTAR', 'Guia de Plantio + Calendário'],
  ['PARA SEPARAR E COMPRAR', 'Lista de Compras'],
  ['QUANDO APARECER UMA DÚVIDA', 'SOS Horta']
];

document.querySelectorAll('.checkout').forEach(link => link.href = checkout);
document.getElementById('year').textContent = new Date().getFullYear();
document.querySelector('.hero-benefits').insertAdjacentHTML('afterend', '<aside class="hero-bonus-callout"><span>+ 5 BÔNUS PRÁTICOS INCLUSOS</span><b>Planeje, plante, compre e cuide com materiais de apoio.</b><a href="#bonus">CONHEÇA OS 5 BÔNUS →</a></aside>');

document.querySelectorAll('.collection-book img, .final-art img').forEach(image => {
  image.width = 1241;
  image.height = 1754;
});
document.querySelector('.collection-book img')?.setAttribute('fetchpriority', 'high');

document.getElementById('situations').innerHTML = situations.map(([title, text]) => `<article class="situation"><b>${title}</b><span>${text}</span></article>`).join('');
document.getElementById('method-flow').innerHTML = method.map(([title, text]) => `<li><b>${title}</b><p>${text}</p></li>`).join('');
document.getElementById('journey-grid').innerHTML = journey.map(([title, items], index) => `<article class="journey-card"><span>0${index + 1}</span><h3>${title}</h3><ul>${items.map(item => `<li>${item}</li>`).join('')}</ul></article>`).join('');
document.getElementById('journey-map').innerHTML = journeyMap.map(([title, text]) => `<article class="map-step"><span>${title}</span><b>${text}</b></article>`).join('');

const previewItems = [
  ['preview-guia-00.png', 'Guia 00: o que observar no terreno'],
  ['preview-10m2.png', 'Projeto 10 m²: confira antes de cavar'],
  ['preview-20m2.png', 'Projeto 20 m²: medidas da horta'],
  ['preview-30m2.png', 'Projeto 30 m²: organização dos canteiros'],
  ['preview-50m2.png', 'Projeto 50 m²: leitura do terreno'],
  ['preview-100m2.png', 'Projeto 100 m²: caminho principal'],
  ['preview-250m2.png', 'Projeto 250 m²: marcação do retângulo'],
  ['preview-500m2.png', 'Projeto 500 m²: dimensões do espaço']
];
const previewRail = document.getElementById('previews');
const previewMarkup = previewItems.map(([image, label], index) => `<figure class="preview-card" style="--rotate:${[-2, 1.5, -1, 1, -1.5, 1.2, -1, 1.5][index]}"><img src="public/images/${image}" alt="Página real do material: ${label}" width="778" height="1100" loading="lazy"><figcaption>${label}</figcaption></figure>`).join('');
previewRail.innerHTML = previewMarkup;
previewRail.scrollTo({ left: 0, behavior: 'auto' });

let previewPaused = false;
let activePreview = 0;
const reducedPreviewMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
function showPreview(index, behavior = 'smooth') {
  const cards = previewRail.querySelectorAll('.preview-card');
  activePreview = (index + cards.length) % cards.length;
  previewRail.scrollTo({ left: cards[activePreview].offsetLeft, behavior });
}
function movePreviewRail() {
  if (!previewPaused && !reducedPreviewMotion.matches) showPreview(activePreview + 1);
}
['mouseenter', 'focusin', 'touchstart', 'pointerdown'].forEach(event => previewRail.addEventListener(event, () => { previewPaused = true; }, { passive: true }));
['mouseleave', 'focusout', 'touchend', 'pointerup'].forEach(event => previewRail.addEventListener(event, () => { previewPaused = false; }, { passive: true }));
document.addEventListener('visibilitychange', () => { previewPaused = document.hidden; });
window.setInterval(movePreviewRail, 5500);

const tabs = document.getElementById('project-tabs');
const showcase = document.getElementById('project-showcase');
const projectCount = document.getElementById('project-count');
let activeProject = 0;
function renderProject(index) {
  activeProject = (index + projects.length) % projects.length;
  const project = projects[activeProject];
  tabs.innerHTML = projects.map((item, itemIndex) => `<button class="project-tab" type="button" role="tab" aria-controls="project-showcase" aria-selected="${itemIndex === activeProject}" tabindex="${itemIndex === activeProject ? '0' : '-1'}" data-project-index="${itemIndex}">${item.size}</button>`).join('');
  projectCount.textContent = `${activeProject + 1} / ${projects.length}`;
  showcase.setAttribute('aria-label', `Projeto de ${project.size}: ${project.name}`);
  showcase.innerHTML = `<figure class="project-aerial"><img src="public/images/${project.image}" alt="Vista aérea panorâmica ilustrativa de como pode ficar um Sisteminha de ${project.size}" width="1440" height="1080" loading="lazy"><figcaption>VISTA AÉREA ILUSTRATIVA · ORGANIZAÇÃO POSSÍVEL PARA ${project.size}</figcaption></figure><div class="project-copy"><p class="project-number">PROJETO ${String(activeProject + 1).padStart(2, '0')} · ${project.size}</p><h3>${project.name}</h3><p class="project-quote">“${project.quote}”</p><p class="project-focus">${project.focus}</p><ul>${project.points.map(point => `<li>${point}</li>`).join('')}</ul></div>`;
  tabs.querySelectorAll('[data-project-index]').forEach(button => button.addEventListener('click', () => renderProject(Number(button.dataset.projectIndex))));
}
renderProject(0);
document.querySelectorAll('[data-project-direction]').forEach(button => button.addEventListener('click', () => renderProject(activeProject + (button.dataset.projectDirection === 'next' ? 1 : -1))));
let projectPaused = false;
['mouseenter', 'focusin', 'touchstart', 'pointerdown'].forEach(event => showcase.addEventListener(event, () => { projectPaused = true; }, { passive: true }));
['mouseleave', 'focusout', 'touchend', 'pointerup'].forEach(event => showcase.addEventListener(event, () => { projectPaused = false; }, { passive: true }));
window.setInterval(() => { if (!projectPaused && !reducedPreviewMotion.matches) renderProject(activeProject + 1); }, 6200);

document.getElementById('offer-stack').innerHTML = `<article class="stack-block"><span>GUIA 00</span><h3>Escolha seu começo</h3><p>Observe o espaço real antes de abrir um projeto.</p></article><article class="stack-block"><span>7 PROJETOS COMPLETOS</span><h3>10 a 500 m²</h3><div class="stack-numbers">${projects.map(item => `<b>${item.size.replace(' m²', '')}</b>`).join('')}</div></article><article class="stack-block"><span>5 BÔNUS PRÁTICOS</span><h3>Apoio para continuar</h3><p>Materiais para planejar, plantar, comprar e observar.</p></article>`;
const bonusGrid = document.getElementById('bonus-grid');
bonusGrid.innerHTML = bonuses.map((bonus, index) => `<article class="bonus-card"><div class="bonus-top" style="--tilt:${[-2, 1.2, -1, 1.5, -1.5][index]}deg"><span class="bonus-number">BÔNUS ${bonus.number}</span><h3>${bonus.title}</h3></div><p>“${bonus.prompt}”</p><small>${bonus.text}</small></article>`).join('');
bonusGrid.insertAdjacentHTML('afterend', '<div class="bonus-controls" aria-label="Navegação dos bônus"><button type="button" data-bonus-direction="previous" aria-label="Bônus anterior">←</button><span>Deslize para conhecer os 5 bônus</span><button type="button" data-bonus-direction="next" aria-label="Próximo bônus">→</button></div>');
document.getElementById('offer-list').innerHTML = [`Guia 00 — Qual Sisteminha é para mim?`, ...projects.map(project => `Projeto ${project.size}`), ...bonuses.map(bonus => bonus.title)].map(item => `<p>${item}</p>`).join('');
document.querySelector('.offer-card > span').insertAdjacentHTML('afterend', '<div class="offer-collection-visual" aria-label="Coleção: Guia 00, 7 projetos e 5 bônus"><img src="public/images/ebook-cover-01.png" alt="Capa da coleção O Sisteminha do Kenji" width="1241" height="1754" loading="lazy"><div><b>GUIA 00</b><b>7 PROJETOS</b><b>5 BÔNUS</b></div></div>');
document.getElementById('faq-grid').innerHTML = faqs.map(([question, answer]) => `<details class="faq-item"><summary>${question}</summary><p>${answer}</p></details>`).join('');

const testimonialRail = document.getElementById('testimonials-rail');
const testimonialMarkup = testimonials.map(([image, quote, author]) => `<article class="testimonial-card"><img src="public/images/${image}" alt="Leitor do Sisteminha do Kenji" width="340" height="270" loading="lazy"><blockquote>${quote}</blockquote><footer><b>${author}</b></footer></article>`).join('');
testimonialRail.innerHTML = testimonialMarkup + testimonials.map(([image, quote, author]) => `<article class="testimonial-card" aria-hidden="true"><img src="public/images/${image}" alt="" width="340" height="270" loading="lazy"><blockquote>${quote}</blockquote><footer><b>${author}</b></footer></article>`).join('');
let testimonialsPaused = false;
let testimonialLastFrame = 0;
function moveTestimonials(timestamp) {
  if (!testimonialsPaused && !reducedPreviewMotion.matches && !document.hidden) {
    const elapsed = Math.min(timestamp - testimonialLastFrame, 32);
    testimonialRail.scrollLeft += elapsed * .035;
    if (testimonialRail.scrollLeft >= testimonialRail.scrollWidth / 2) testimonialRail.scrollLeft = 0;
  }
  testimonialLastFrame = timestamp;
  window.requestAnimationFrame(moveTestimonials);
}
['mouseenter', 'focusin', 'touchstart', 'pointerdown'].forEach(event => testimonialRail.addEventListener(event, () => { testimonialsPaused = true; }, { passive: true }));
['mouseleave', 'focusout', 'touchend', 'pointerup'].forEach(event => testimonialRail.addEventListener(event, () => { testimonialsPaused = false; }, { passive: true }));
window.requestAnimationFrame(moveTestimonials);
document.querySelectorAll('[data-testimonial-direction]').forEach(button => button.addEventListener('click', () => testimonialRail.scrollBy({ left: (button.dataset.testimonialDirection === 'next' ? 1 : -1) * testimonialRail.clientWidth * .82, behavior: 'smooth' })));

document.querySelectorAll('[data-bonus-direction]').forEach(button => button.addEventListener('click', () => bonusGrid.scrollBy({ left: (button.dataset.bonusDirection === 'next' ? 1 : -1) * bonusGrid.clientWidth * .82, behavior: 'smooth' })));

document.querySelectorAll('[data-rail]').forEach(button => button.addEventListener('click', () => { if (button.dataset.rail === 'previews') { showPreview(activePreview + (button.classList.contains('next') ? 1 : -1)); return; } const rail = document.getElementById(button.dataset.rail); rail.scrollBy({ left: (button.classList.contains('next') ? 1 : -1) * rail.clientWidth * .72, behavior: 'smooth' }); }));

const menu = document.querySelector('.menu'); const nav = document.getElementById('nav');
menu.addEventListener('click', () => { const isOpen = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(isOpen)); });
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }));
