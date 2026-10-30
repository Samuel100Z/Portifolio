'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const startPrompt = document.getElementById('startPrompt');
  const loadingScreen = document.getElementById('loadingScreen');
  const menuTitle = document.getElementById('menuTitle');
  const menuOptions = document.getElementById('menuOptions');
  const anoEl = document.getElementById('ano');
  const opcoes = Array.from(document.querySelectorAll('.menu-option'));
  const prefereMenosMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (anoEl) anoEl.textContent = new Date().getFullYear();

  let indice = 0;
  let menuLiberado = false;

  function selecionar(i) {
    if (!menuLiberado) return;
    indice = i;
    opcoes.forEach((op, idx) => {
      op.classList.toggle('ativo', idx === i);
      const cursor = op.querySelector('.cursor');
      if (cursor) {
        cursor.textContent = idx === i ? '>>' : '  ';
        cursor.setAttribute('aria-hidden', idx === i ? 'false' : 'true');
      }
    });
  }

  function acionar(op) {
    const target = op.dataset.target;
    const acao = op.dataset.action;

    if (acao === 'novo-jogo') {
      if (loadingScreen) {
        loadingScreen.hidden = false;
        setTimeout(() => { window.location.href = target; }, 2400);
      } else {
        window.location.href = target;
      }
    } else {
      window.location.href = target;
    }
  }

  function iniciarTitulo() {
    const texto = "Five\nNights\nat\nDev's";
    let i = 0;
    menuTitle.textContent = '';
    menuTitle.classList.add('typing');

    if (prefereMenosMovimento) {
      menuTitle.textContent = texto;
      menuTitle.classList.remove('typing');
      revelarMenu();
      return;
    }

    function passo() {
      if (i < texto.length) {
        menuTitle.textContent += texto.charAt(i);
        const charAdicionado = texto.charAt(i);
        i++;
        const delay = charAdicionado === '\n' ? 220 : 85;
        setTimeout(passo, delay);
      } else {
        menuTitle.classList.remove('typing');
        revelarMenu();
      }
    }
    passo();
  }

  function revelarMenu() {
    menuLiberado = true;
    opcoes.forEach((op, i) => {
      op.style.opacity = '0';
      op.style.transform = 'translateX(-14px)';
      op.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      setTimeout(() => {
        op.style.opacity = '1';
        op.style.transform = 'translateX(0)';
      }, i * 220);
    });
    setTimeout(() => {
      if (opcoes[0]) {
        opcoes[0].focus();
        selecionar(0);
      }
      iniciarGlitches();
    }, opcoes.length * 220 + 300);
  }

  function triggerGlitch() {
    const body = document.body;
    const line = document.getElementById('glitchLine');
    const burst = document.getElementById('glitchBurst');
    const character = document.querySelector('.menu-character');

    body.classList.add('glitching');
    if (character) character.classList.add('glitch-char');
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

    setTimeout(() => {
      body.classList.remove('glitching');
      if (character) character.classList.remove('glitch-char');
    }, 420);
  }

  function iniciarGlitches() {
    if (prefereMenosMovimento) return;

    function loop() {
      triggerGlitch();
      const proximo = 7000 + Math.random() * 9000;
      setTimeout(loop, proximo);
    }
    setTimeout(loop, 4000 + Math.random() * 4000);
  }

  function liberarSom() {
    if (!startPrompt) return;
    startPrompt.style.opacity = '0';
    if (typeof iniciarAmbiente === 'function') iniciarAmbiente();
    document.removeEventListener('click', liberarSom);
    document.removeEventListener('keydown', liberarSom);
    document.removeEventListener('touchstart', liberarSom);
    setTimeout(() => {
      startPrompt.hidden = true;
      iniciarTitulo();
    }, 450);
  }

  document.addEventListener('click', liberarSom);
  document.addEventListener('keydown', liberarSom);
  document.addEventListener('touchstart', liberarSom);

  opcoes.forEach((op, i) => {
    op.addEventListener('mouseenter', () => selecionar(i));
    op.addEventListener('focus', () => selecionar(i));
    op.addEventListener('click', () => {
      if (menuLiberado) acionar(op);
    });
  });

  document.addEventListener('keydown', (e) => {
    if (!startPrompt.hidden) return;
    if (!menuLiberado) return;
    if (e.key === 'ArrowDown') { e.preventDefault(); selecionar((indice + 1) % opcoes.length); }
    if (e.key === 'ArrowUp')   { e.preventDefault(); selecionar((indice - 1 + opcoes.length) % opcoes.length); }
    if (e.key === 'Enter')     { e.preventDefault(); acionar(opcoes[indice]); }
  });

  window.triggerGlitch = triggerGlitch;
});