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
  { number: '01', title: 'Planner do Terreno', prompt: 'Antes de começar...', text: 'Meça, desenhe e organize seu espaço no papel antes de marcar o chão.', photo: 'bonus-photo-planner.png', page: 'bonus-pages/bonus-01-planner-do-terreno-kenji-3.png', pageLabel: 'O que já existe?', stage: 'LEIA O ESPAÇO', labels: ['MEÇA', 'MARQUE', 'SETORES'] },
  { number: '02', title: 'Guia de Plantio do Sisteminha', prompt: 'Terminei de montar. O que eu planto?', text: 'Ajuda a escolher os cultivos e começar sem tentar plantar tudo de uma vez.', photo: 'bonus-photo-plantio.png', page: 'bonus-pages/bonus-02-guia-de-plantio-do-sisteminha-kenji-10.png', pageLabel: 'Escolha poucas para começar', stage: 'PLANTE COM CALMA', labels: ['1 FOLHA', '1 TEMPERO', '1 RAIZ'] },
  { number: '03', title: 'Lista de Compras por Tamanho', prompt: 'O que eu realmente preciso comprar?', text: 'Organiza materiais por projeto e por etapa para evitar compras no chute.', photo: 'bonus-photo-compras.png', page: 'bonus-pages/bonus-03-lista-de-compras-por-tamanho-kenji-07.png', pageLabel: 'Lista específica para o projeto', stage: 'SEPARE POR ETAPA', labels: ['MARCAR', 'MONTAR', 'PLANTAR'] },
  { number: '04', title: 'Calendário de Plantio', prompt: 'Será que faz sentido plantar isso agora?', text: 'Material de apoio para consultar épocas de plantio considerando região e particularidades das culturas.', photo: 'bonus-photo-calendario.png', page: 'bonus-pages/bonus-04-calendario-de-plantio-kenji-3.png', pageLabel: 'Como conferir a época', stage: 'CONFIRA ANTES', labels: ['CULTURA', 'ÉPOCA', 'REGIÃO'] },
  { number: '05', title: 'SOS Horta', prompt: 'Tem alguma coisa errada com a planta. E agora?', text: 'Ajuda a observar folhas amarelando, murcha, furos, crescimento parado e excesso de água antes de tentar corrigir.', photo: 'bonus-photo-sos.png', page: 'bonus-pages/bonus-05-sos-horta-kenji-02.png', pageLabel: 'Pare. Olhe. Toque. Anote.', stage: 'OBSERVE PRIMEIRO', labels: ['PARE', 'OLHE', 'TOQUE'] }
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
document.querySelector('.hero-benefits').insertAdjacentHTML('afterend', `
  <aside class="hero-bonus-callout" aria-label="Cinco bônus práticos inclusos na coleção">
    <div class="hero-bonus-callout-copy">
      <span>VOCÊ TAMBÉM LEVA 5 BÔNUS PRÁTICOS</span>
      <b>Planeje, plante, compre e cuide sem ficar travado na próxima dúvida.</b>
    </div>
    <div class="hero-bonus-books" aria-hidden="true">
      ${bonuses.map((bonus, index) => `
        <figure style="--book-tilt:${[-2, 1.5, -1, 1.25, -1.5][index]}deg">
          <img src="public/images/${bonus.page}" alt="" width="993" height="1404" decoding="async">
          <i>${bonus.number}</i>
        </figure>
      `).join('')}
    </div>
    <a href="#bonus">VER OS 5 BÔNUS EM DETALHE →</a>
  </aside>
`);

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
  { page: 'inside-01-divida.png', photo: 'inside-photo-layout.png', stage: 'ORGANIZE O TERRENO', sceneTitle: 'Cada setor tem um lugar.', sceneText: 'Horta, água, composto e passagem.', question: 'Onde coloco cada coisa?', source: 'Projeto 10 m² · página 06', visual: 'zones', visualTitle: 'Leitura do espaço', labels: ['HORTA · 6 m²', 'ÁGUA · 1 m²', 'COMPOSTO · 1 m²', 'ACESSO · 2 m²'] },
  { page: 'inside-02-marque.png', photo: 'inside-photo-marking.png', stage: 'MARQUE ANTES', sceneTitle: 'O retângulo começa certo.', sceneText: 'Medida, estaca e barbante antes de cavar.', question: 'Como marco no terreno?', source: 'Projeto 10 m² · página 05', visual: 'measure', visualTitle: 'Marcação no chão', labels: ['2 × 5 m', 'ESTACAS', 'BARBANTE', 'DIAGONAIS IGUAIS'] },
  { page: 'inside-03-terra.png', photo: 'inside-photo-soil.png', stage: 'PREPARE A TERRA', sceneTitle: 'Faça uma etapa por vez.', sceneText: 'Limpe, solte e nivele o canteiro.', question: 'O que faço depois de marcar?', source: 'Projeto 10 m² · página 09', visual: 'steps', visualTitle: 'Preparo simples', labels: ['01 LIMPE', '02 SOLTE', '03 NIVELE'] },
  { page: 'inside-04-plante.png', photo: 'inside-photo-planting.png', stage: 'PLANTE COM CALMA', sceneTitle: 'Comece com poucas culturas.', sceneText: 'O começo cabe na sua rotina.', question: 'O que planto primeiro?', source: 'Guia de Plantio · página 10', visual: 'plant', visualTitle: 'Plantio possível', labels: ['1 FOLHA', '1 TEMPERO', '1 RAIZ'] },
  { page: 'inside-05-confira.png', photo: 'inside-photo-layout.png', stage: 'PARE E CONFIRA', sceneTitle: 'O corredor também é projeto.', sceneText: 'Alcance as plantas sem pisar no canteiro.', question: 'Como sei que fiz certo?', source: 'Projeto 10 m² · página 08', visual: 'path', visualTitle: 'Medidas para circular', labels: ['CANTEIRO · 70 cm', 'CORREDOR · 40 cm', 'COMPRIMENTO · 2,40 m'] },
  { page: 'inside-06-cuide.png', photo: 'inside-photo-care.png', stage: 'CUIDE OBSERVANDO', sceneTitle: 'Antes de corrigir, entenda.', sceneText: 'Olhe, toque e compare.', question: 'E depois, como cuido?', source: 'SOS Horta · página 02', visual: 'observe', visualTitle: 'Rotina de observação', labels: ['PARE', 'OLHE', 'TOQUE'] }
];
const previewRail = document.getElementById('previews');
const previewMarkup = previewItems.map(({ page, photo, stage, sceneTitle, sceneText, question, source, labels, visual, visualTitle }) => `<figure class="preview-card preview-card--${visual}"><div class="preview-scene"><img src="public/images/${photo}" alt="Cena de campo ilustrativa: ${question}" width="1024" height="1536" loading="lazy"><span class="preview-scene-kicker">${stage}</span><div class="preview-scene-copy"><strong>${sceneTitle}</strong><span>${sceneText}</span></div><div class="preview-visual" aria-label="${visualTitle}"><span>${visualTitle}</span><div class="preview-labels">${labels.map(label => `<b>${label}</b>`).join('')}</div></div></div><div class="preview-proof"><img src="public/images/${page}" alt="Página real do material: ${question}" width="1240" height="1754" loading="lazy"><figcaption><b>${question}</b><span>${source}</span></figcaption></div></figure>`).join('');
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
bonusGrid.innerHTML = bonuses.map((bonus, index) => `<article class="bonus-card bonus-card--${bonus.number}" style="--tilt:${[-1.1, .7, -.5, .9, -.7][index]}deg"><div class="bonus-scene"><img src="public/images/${bonus.photo}" alt="Situação ilustrativa de uso do ${bonus.title}" width="1536" height="1024" loading="lazy"><span class="bonus-number">BÔNUS ${bonus.number}</span><span class="bonus-stage">${bonus.stage}</span><div class="bonus-labels" aria-label="Etapas sugeridas">${bonus.labels.map(label => `<b>${label}</b>`).join('')}</div></div><div class="bonus-proof"><img src="public/images/${bonus.page}" alt="Página real do ${bonus.title}: ${bonus.pageLabel}" width="993" height="1404" loading="lazy"><div><span>PÁGINA REAL</span><b>${bonus.pageLabel}</b></div></div><div class="bonus-copy"><h3>${bonus.title}</h3><p>“${bonus.prompt}”</p><small>${bonus.text}</small></div></article>`).join('');
bonusGrid.insertAdjacentHTML('afterend', '<div class="bonus-controls" aria-label="Navegação dos bônus"><button type="button" data-bonus-direction="previous" aria-label="Bônus anterior">←</button><span>Deslize para conhecer os 5 bônus</span><button type="button" data-bonus-direction="next" aria-label="Próximo bônus">→</button></div>');
document.getElementById('offer-list').innerHTML = [`Guia 00 — Qual Sisteminha é para mim?`, ...projects.map(project => `Projeto ${project.size}`), ...bonuses.map(bonus => bonus.title)].map(item => `<p>${item}</p>`).join('');
document.querySelector('.offer-card > span').insertAdjacentHTML('afterend', '<div class="offer-collection-visual" aria-label="Coleção: Guia 00, 7 projetos e 5 bônus"><img src="public/images/ebook-cover-01.png" alt="Capa da coleção O Sisteminha do Kenji" width="1241" height="1754" loading="lazy"><div><b>GUIA 00</b><b>7 PROJETOS</b><b>5 BÔNUS</b></div></div>');
document.getElementById('faq-grid').innerHTML = faqs.map(([question, answer]) => `<details class="faq-item"><summary>${question}</summary><p>${answer}</p></details>`).join('');

const testimonialRail = document.getElementById('testimonials-rail');
const testimonialMarkup = testimonials.map(([image, quote, author]) => `<article class="testimonial-card"><div class="testimonial-photo"><img src="public/images/${image}" alt="Leitor do Sisteminha do Kenji" width="340" height="270" loading="lazy"><span>DEPOIMENTO REAL</span></div><blockquote>${quote}</blockquote><footer><b>${author}</b></footer></article>`).join('');
testimonialRail.innerHTML = testimonialMarkup + testimonials.map(([image, quote, author]) => `<article class="testimonial-card" aria-hidden="true"><div class="testimonial-photo"><img src="public/images/${image}" alt="" width="340" height="270" loading="lazy"><span>DEPOIMENTO REAL</span></div><blockquote>${quote}</blockquote><footer><b>${author}</b></footer></article>`).join('');
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
