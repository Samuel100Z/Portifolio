'use strict';

const arvoreDialogos = {
  inicio: {
    texto: 'Olá, viajante. Você abriu meu portfólio e, sem saber, começou uma conversa. Eu sou Samuel — o "Dev" do título. Escolha uma pergunta e eu te conto um pedaço da história.',
    escolhas: [
      { texto: 'Quem é você?',                 proximo: 'sobre' },
      { texto: 'O que você sabe fazer?',       proximo: 'habilidades' },
      { texto: 'Me mostra seus projetos',      proximo: 'projetos', secao: 'projetos' },
      { texto: 'Como faço para te contatar?',  proximo: 'contato',  secao: 'contato'  },
      { texto: "Por que \"Five Nights at Dev's\"?", proximo: 'origemNome' }
    ]
  },
  origemNome: {
    texto: 'A ideia veio porque aprender a programar é como sobreviver a cinco noites: cada projeto é uma noite, cada bug é um animatronic tentando te pegar. Esse portfólio é o registro das minhas noites até aqui.',
    escolhas: [{ texto: 'Faz sentido. Próxima pergunta.', proximo: 'inicio' }]
  },
  sobre: {
    texto: 'Comecei no Técnico em Desenvolvimento de Sistemas do SENAC MedTec querendo entender como as páginas funcionavam por dentro. Hoje construo interfaces que funcionam no celular, no teclado e no leitor de tela.',
    escolhas: [
      { texto: 'O que te trouxe para a tecnologia?', proximo: 'sobreOrigem' },
      { texto: 'O que você quer aprender agora?',    proximo: 'sobreFuturo' },
      { texto: 'E os seus primeiros passos?',        proximo: 'sobreInicio' },
      { texto: 'Voltar',                             proximo: 'inicio' }
    ]
  },
  sobreOrigem: {
    texto: 'Um dia eu abri o "inspecionar" do navegador por curiosidade e nunca mais parei. Ficava tentando entender como aqueles blocos de código viravam uma página bonita na tela. Foi aí que decidi que queria construir isso também.',
    escolhas: [{ texto: 'E agora?', proximo: 'sobreFuturo' }, { texto: 'Voltar', proximo: 'inicio' }]
  },
  sobreInicio: {
    texto: 'Meu primeiro "Hello, world" foi em HTML, num caderno, desenhando tags antes de escrever. Levou um tempo até eu entender CSS de verdade — Flexbox e Grid mudaram minha forma de montar layout.',
    escolhas: [{ texto: 'E o que vem depois?', proximo: 'sobreFuturo' }, { texto: 'Voltar', proximo: 'sobre' }]
  },
  sobreFuturo: {
    texto: 'Meu próximo passo é consolidar JavaScript — eventos, arrays, DOM — e praticar acessibilidade de verdade. Também quero aprender versionamento com Git como um profissional.',
    escolhas: [
      { texto: 'Ver habilidades', proximo: 'habilidades', secao: 'habilidades' },
      { texto: 'Ver projetos',    proximo: 'projetos', secao: 'projetos' },
      { texto: 'Voltar',          proximo: 'inicio' }
    ]
  },
  habilidades: {
    texto: 'Meu kit atual: HTML semântico, CSS com Flexbox e Grid, JavaScript para interatividade, Figma para prototipar, Git para versionar. Sendo honesto: "confortável" no que já fiz várias vezes, "praticando" no que estou aprendendo agora.',
    escolhas: [
      { texto: 'Detalhar cada habilidade',  proximo: 'habilidadesDetalhes', secao: 'habilidades' },
      { texto: 'O que você ainda não sabe?', proximo: 'habilidadesFalta' },
      { texto: 'Qual é a mais difícil?',     proximo: 'habilidadesDificil' },
      { texto: 'Voltar',                     proximo: 'inicio' }
    ]
  },
  habilidadesDetalhes: {
    texto: 'Ali embaixo tem a lista completa com meu nível em cada tecnologia. Não sou especialista em nada — ainda. Cada "iniciante" ali é um convite para o próximo passo.',
    escolhas: [
      { texto: 'E o que falta aprender?', proximo: 'habilidadesFalta' },
      { texto: 'Ver projetos',            proximo: 'projetos', secao: 'projetos' },
      { texto: 'Voltar',                  proximo: 'inicio' }
    ]
  },
  habilidadesFalta: {
    texto: 'Ainda quero aprender React (depois de dominar o JS puro), testes automatizados, um pouco de Node.js e acessibilidade a fundo — de leitores de tela a navegação por teclado em apps complexos.',
    escolhas: [
      { texto: 'Ver projetos', proximo: 'projetos', secao: 'projetos' },
      { texto: 'Sobre mim',    proximo: 'sobre', secao: 'sobre' },
      { texto: 'Voltar',       proximo: 'inicio' }
    ]
  },
  habilidadesDificil: {
    texto: 'JavaScript. CSS é mais visual — você mexe e vê o resultado. JS exige raciocínio sobre estado, eventos, fluxo de dados. Mas justamente por isso é a que mais quero dominar.',
    escolhas: [{ texto: 'Ver projetos', proximo: 'projetos', secao: 'projetos' }, { texto: 'Voltar', proximo: 'inicio' }]
  },
  projetos: {
    texto: 'Esses são os projetos que fiz durante o curso. Não são projetos de fim de semana: são entregas reais, com prazo, requisitos e correções. Os três primeiros são protótipos no Figma; os três últimos têm código publicado.',
    escolhas: [
      { texto: 'Qual foi o mais difícil?', proximo: 'projetosDificil' },
      { texto: 'Você usou IA em algum?',   proximo: 'projetosIA' },
      { texto: 'Tem algum favorito?',      proximo: 'projetosFavorito' },
      { texto: 'Ver a lista completa',     proximo: 'inicio', secao: 'projetos' },
      { texto: 'Voltar',                   proximo: 'inicio' }
    ]
  },
  projetosDificil: {
    texto: 'O Site de Notícias foi o primeiro em que precisei pensar em layout responsivo de verdade — notícia longa, imagem, coluna lateral, menu. Errei feio na primeira versão, mas refiz do zero com Grid e ficou muito melhor.',
    escolhas: [{ texto: 'E os outros?', proximo: 'projetos' }, { texto: 'Voltar', proximo: 'inicio' }]
  },
  projetosIA: {
    texto: 'Usei IA como apoio em revisões — entender por que um erro acontecia, revisar lógica de funções. Mas todo o código eu sei explicar linha por linha. A regra do curso é clara: código que não sei explicar não conta como meu.',
    escolhas: [{ texto: 'E o favorito?', proximo: 'projetosFavorito' }, { texto: 'Voltar', proximo: 'inicio' }]
  },
  projetosFavorito: {
    texto: 'A Calculadora de Notas — é o projeto em que mais me diverti construindo. Juntou lógica de JavaScript, validação de entrada e feedback visual de aprovação. Foi o primeiro em que senti que o código tinha "vida própria".',
    escolhas: [{ texto: 'Ver a lista de projetos', proximo: 'inicio', secao: 'projetos' }, { texto: 'Voltar', proximo: 'inicio' }]
  },
  contato: {
    texto: 'Se você chegou até aqui, o jogo deu certo. O formulário abaixo é uma demonstração: ele valida os campos no navegador mas não envia nada de verdade.',
    escolhas: [
      { texto: 'E a política de dados?',  proximo: 'contatoLGPD' },
      { texto: 'Você tem GitHub?',         proximo: 'contatoGitHub' },
      { texto: 'Ir para o formulário',     proximo: 'inicio', secao: 'contato' },
      { texto: 'Voltar',                   proximo: 'inicio' }
    ]
  },
  contatoLGPD: {
    texto: 'O formulário não envia para nenhum servidor. Ele só valida no seu navegador e mostra mensagens de erro locais. Nenhum dado é armazenado, transmitido ou compartilhado.',
    escolhas: [{ texto: 'E o GitHub?', proximo: 'contatoGitHub' }, { texto: 'Voltar', proximo: 'inicio' }]
  },
  contatoGitHub: {
    texto: 'Sim! Todos os projetos com código estão no meu GitHub: github.com/Samuel100Z. Lá você encontra os repositórios das UCs, incluindo os que estão linkados aqui no portfólio.',
    escolhas: [{ texto: 'Voltar', proximo: 'inicio' }]
  }
};

const projetos = [
  { icone: '🏥', titulo: 'Site de Hospital (Figma)', descricao: 'Protótipo navegável de um site hospitalar, com páginas de início, especialidades e agendamento.', tecnologias: ['Figma'], link: 'https://www.figma.com/proto/RUKt49gRWApFVDKPCHh8I4/hospital-site?node-id=37-4&starting-point-node-id=245%3A2', linkTexto: 'Ver protótipo no Figma', externo: true },
  { icone: '✨', titulo: 'Site Aura (Figma)', descricao: 'Protótipo de um e-commerce fictício de venda de "aura". Paleta suave e foco na experiência do usuário.', tecnologias: ['Figma'], link: 'https://www.figma.com/proto/CPbtWRBjadwQAChbSrf3YD/Aura-Site?node-id=21-18&starting-point-node-id=21%3A18', linkTexto: 'Ver protótipo no Figma', externo: true },
  { icone: '🧩', titulo: 'Jogo do Labirinto (Figma)', descricao: 'Protótipo interativo de um jogo de labirinto. Em desenvolvimento — o fluxo de telas ainda está incompleto.', tecnologias: ['Figma'], link: 'https://www.figma.com/proto/75gjD3jxGym58Fn5nvqOgK/Jogo-do-labirinto?node-id=1-2&starting-point-node-id=1%3A2', linkTexto: 'Ver protótipo no Figma', externo: true },
  { icone: '📰', titulo: 'Site de Notícias', descricao: 'Página de notícias construída com HTML semântico e CSS puro, com layout responsivo e foco em legibilidade.', tecnologias: ['HTML', 'CSS'], link: 'projeto1.html', linkTexto: 'Ver projeto', externo: false },
  { icone: '📚', titulo: 'Planejador Escolar', descricao: 'Aplicação em JavaScript para organizar tarefas escolares, com adição, conclusão e remoção de atividades.', tecnologias: ['HTML', 'CSS', 'JavaScript'], link: 'projeto2.html', linkTexto: 'Ver projeto', externo: false },
  { icone: '🧮', titulo: 'Calculadora de Notas', descricao: 'Calculadora de notas escolares com média automática, validação de entrada e feedback visual de aprovação.', tecnologias: ['HTML', 'CSS', 'JavaScript'], link: 'projeto3.html', linkTexto: 'Ver projeto', externo: false }
];

const el = {
  greeting:      document.getElementById('greeting'),
  dialogue:      document.getElementById('dialogue'),
  dialogueSr:    document.getElementById('dialogue-sr'),
  choices:       document.getElementById('choices'),
  form:          document.getElementById('contact-form'),
  nome:          document.getElementById('nome'),
  email:         document.getElementById('email'),
  mensagem:      document.getElementById('mensagem'),
  consentimento: document.getElementById('consentimento'),
  success:       document.getElementById('success-message'),
  filter:        document.getElementById('filter'),
  projectsGrid:  document.getElementById('projects-grid'),
  noProjects:    document.getElementById('no-projects'),
  ano:           document.getElementById('ano'),
  backToTop:     document.getElementById('backToTop'),
  clock:         document.getElementById('clock'),
  themeToggle:   document.getElementById('theme-toggle')
};

const prefereMenosMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let tempoDigitacao = null;

function obterSaudacao(hora) {
  if (hora >= 5 && hora < 12)  return 'Bom dia';
  if (hora >= 12 && hora < 18) return 'Boa tarde';
  return 'Boa noite';
}

function atualizarSaudacao() {
  const hora = new Date().getHours();
  el.greeting.textContent = `${obterSaudacao(hora)}, viajante!`;
}

function atualizarRelogio() {
  if (!el.clock) return;
  const agora = new Date();
  const hh = String(agora.getHours()).padStart(2, '0');
  const mm = String(agora.getMinutes()).padStart(2, '0');
  el.clock.textContent = `${hh}:${mm}`;
}

function iniciarTema() {
  if (!el.themeToggle) return;
  const cfg = carregarConfig();
  el.themeToggle.textContent = cfg.tema === 'light' ? '☀️' : '🌙';
  el.themeToggle.setAttribute('aria-label', cfg.tema === 'light' ? 'Ativar tema escuro' : 'Ativar tema claro');
  el.themeToggle.addEventListener('click', () => {
    const atual = carregarConfig().tema;
    const novo = atual === 'light' ? 'dark' : 'light';
    atualizarConfig('tema', novo);
    el.themeToggle.textContent = novo === 'light' ? '☀️' : '🌙';
  });
}

function digitarTexto(texto, elemento) {
  clearTimeout(tempoDigitacao);
  elemento.textContent = '';
  elemento.classList.add('typing');
  if (prefereMenosMovimento) {
    elemento.textContent = texto;
    elemento.classList.remove('typing');
    return;
  }
  let i = 0;
  function passo() {
    if (i < texto.length) {
      elemento.textContent += texto.charAt(i++);
      tempoDigitacao = setTimeout(passo, 14);
    } else {
      elemento.classList.remove('typing');
    }
  }
  passo();
}

function renderizarDialogo(chave) {
  const no = arvoreDialogos[chave];
  if (!no) return;
  digitarTexto(no.texto, el.dialogue);
  el.dialogueSr.textContent = no.texto;
  el.choices.innerHTML = '';
  no.escolhas.forEach((escolha) => {
    const botao = document.createElement('button');
    botao.type = 'button';
    botao.className = 'choice';
    botao.textContent = escolha.texto;
    botao.addEventListener('click', () => {
      if (escolha.secao) {
        const secao = document.getElementById(escolha.secao);
        if (secao) secao.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      renderizarDialogo(escolha.proximo);
    });
    el.choices.appendChild(botao);
  });
}

function renderizarProjetos(filtro = 'Todos') {
  el.projectsGrid.innerHTML = '';
  let encontrados = 0;
  projetos.forEach((projeto) => {
    if (filtro !== 'Todos' && !projeto.tecnologias.includes(filtro)) return;
    encontrados++;
    const article = document.createElement('article');
    article.className = 'project-card';

    const thumb = document.createElement('div');
    thumb.className = 'project-thumb';
    thumb.setAttribute('aria-hidden', 'true');
    thumb.textContent = projeto.icone;

    const titulo = document.createElement('h3');
    titulo.textContent = projeto.titulo;

    const descricao = document.createElement('p');
    descricao.textContent = projeto.descricao;

    const techs = document.createElement('ul');
    techs.className = 'project-techs';
    projeto.tecnologias.forEach((t) => {
      const li = document.createElement('li');
      li.textContent = t;
      techs.appendChild(li);
    });

    let linkEl;
    if (projeto.link) {
      linkEl = document.createElement('a');
      linkEl.className = 'project-link';
      linkEl.href = projeto.link;
      linkEl.textContent = projeto.linkTexto;
      if (projeto.externo) {
        linkEl.target = '_blank';
        linkEl.rel = 'noopener noreferrer';
      }
    } else {
      linkEl = document.createElement('span');
      linkEl.className = 'project-link-em-breve';
      linkEl.textContent = projeto.linkTexto;
    }

    article.append(thumb, titulo, descricao, techs, linkEl);
    el.projectsGrid.appendChild(article);
  });
  el.noProjects.hidden = encontrados !== 0;
}

function renderizarFiltros() {
  const todasTechs = new Set();
  projetos.forEach(p => p.tecnologias.forEach(t => todasTechs.add(t)));
  const opcoes = ['Todos', ...todasTechs];
  el.filter.innerHTML = '';
  opcoes.forEach((tech, i) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'filter-btn' + (i === 0 ? ' ativo' : '');
    btn.textContent = tech;
    btn.setAttribute('aria-pressed', i === 0 ? 'true' : 'false');
    btn.addEventListener('click', () => {
      el.filter.querySelectorAll('.filter-btn').forEach((b) => {
        b.classList.remove('ativo');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('ativo');
      btn.setAttribute('aria-pressed', 'true');
      renderizarProjetos(tech);
    });
    el.filter.appendChild(btn);
  });
}

function limparErros() {
  ['erro-nome', 'erro-email', 'erro-mensagem', 'erro-consentimento'].forEach((id) => {
    const s = document.getElementById(id);
    if (s) s.textContent = '';
  });
  [el.nome, el.email, el.mensagem, el.consentimento].forEach((c) => c.classList.remove('invalido'));
}

function validarFormulario() {
  limparErros();
  let valido = true;

  if (el.nome.value.trim() === '') {
    document.getElementById('erro-nome').textContent = 'Informe seu nome.';
    el.nome.classList.add('invalido'); valido = false;
  }
  const email = el.email.value.trim();
  if (email === '') {
    document.getElementById('erro-email').textContent = 'Informe seu e-mail.';
    el.email.classList.add('invalido'); valido = false;
  } else if (!email.includes('@') || !email.includes('.')) {
    document.getElementById('erro-email').textContent = 'E-mail inválido (precisa de "@" e ".").';
    el.email.classList.add('invalido'); valido = false;
  }
  const msg = el.mensagem.value.trim();
  if (msg === '') {
    document.getElementById('erro-mensagem').textContent = 'Escreva uma mensagem.';
    el.mensagem.classList.add('invalido'); valido = false;
  } else if (msg.length < 20) {
    document.getElementById('erro-mensagem').textContent = `A mensagem precisa de pelo menos 20 caracteres (${msg.length}/20).`;
    el.mensagem.classList.add('invalido'); valido = false;
  }
  if (!el.consentimento.checked) {
    document.getElementById('erro-consentimento').textContent = 'É necessário concordar com o uso dos dados.';
    el.consentimento.classList.add('invalido'); valido = false;
  }
  return valido;
}

function aoEnviarFormulario(evento) {
  evento.preventDefault();
  el.success.hidden = true;
  if (validarFormulario()) {
    el.success.hidden = false;
    el.success.textContent = 'Mensagem registrada com sucesso! (Demonstração — nada é enviado de verdade.)';
    el.form.reset();
    limparErros();
  } else {
    const primeiro = el.form.querySelector('.invalido');
    if (primeiro) primeiro.focus();
  }
}

function controlarBotaoTopo() {
  el.backToTop.classList.toggle('visivel', window.scrollY > 400);
}

function voltarAoTopo() {
  window.scrollTo({ top: 0, behavior: prefereMenosMovimento ? 'auto' : 'smooth' });
}

function iniciarGlitches() {
  if (prefereMenosMovimento) return;

  function disparar() {
    const body = document.body;
    const line = document.getElementById('glitchLine');
    const burst = document.getElementById('glitchBurst');

    body.classList.add('glitching');
    if (line) {
      line.classList.remove('active');
      void line.offsetWidth;
      line.classList.add('active');
    }
    if (burst) {
      burst.classList.remove('active');
      void burst.offsetWidth;
      burst.classList.add('active');
    }
    setTimeout(() => body.classList.remove('glitching'), 420);
  }

  function loop() {
    disparar();
    setTimeout(loop, 9000 + Math.random() * 12000);
  }
  setTimeout(loop, 6000 + Math.random() * 5000);
}

function iniciar() {
  if (el.ano) el.ano.textContent = new Date().getFullYear();
  atualizarSaudacao();
  atualizarRelogio();
  setInterval(atualizarRelogio, 30000);
  iniciarTema();
  renderizarFiltros();
  renderizarProjetos();
  renderizarDialogo('inicio');
  if (el.form) el.form.addEventListener('submit', aoEnviarFormulario);
  if (el.backToTop) {
    window.addEventListener('scroll', controlarBotaoTopo, { passive: true });
    el.backToTop.addEventListener('click', voltarAoTopo);
    controlarBotaoTopo();
  }
  iniciarGlitches();
}

document.addEventListener('DOMContentLoaded', iniciar);