'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const botoes = document.querySelectorAll('.opt-btn');
  const volume = document.getElementById('volume');
  const volValue = document.getElementById('volValue');
  const reset = document.getElementById('resetConfig');
  const status = document.getElementById('status');

  function marcarAtivos() {
    const cfg = carregarConfig();
    botoes.forEach((btn) => {
      const chave = btn.dataset.config;
      const valor = btn.dataset.valor;
      btn.classList.toggle('ativo', cfg[chave] === valor);
    });
    if (volume) {
      volume.value = cfg.volume;
      volValue.textContent = cfg.volume + '%';
    }
  }

  botoes.forEach((btn) => {
    btn.addEventListener('click', () => {
      const chave = btn.dataset.config;
      const valor = btn.dataset.valor;
      atualizarConfig(chave, valor);
      marcarAtivos();
      mostrarStatus(`✓ ${chave} atualizado.`);
    });
  });

  if (volume) {
    volume.addEventListener('input', (e) => {
      const v = Number(e.target.value);
      volValue.textContent = v + '%';
      atualizarConfig('volume', v);
    });
  }

  if (reset) {
    reset.addEventListener('click', () => {
      salvarConfig({ ...CONFIG_PADRAO });
      aplicarConfig({ ...CONFIG_PADRAO });
      marcarAtivos();
      mostrarStatus('✓ Configurações restauradas.');
    });
  }

  let t;
  function mostrarStatus(msg) {
    status.textContent = msg;
    clearTimeout(t);
    t = setTimeout(() => { status.textContent = ''; }, 2500);
  }

  marcarAtivos();

  document.addEventListener('click', () => {
    if (typeof iniciarAmbiente === 'function') iniciarAmbiente();
  }, { once: true });
});