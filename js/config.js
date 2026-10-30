'use strict';

const CONFIG_KEY = 'devquest-config';

const CONFIG_PADRAO = {
  tema: 'dark',
  contraste: 'normal',
  fonte: 'vt323',
  tamanho: 'medio',
  volume: 50
};

function carregarConfig() {
  try {
    const salvo = localStorage.getItem(CONFIG_KEY);
    return salvo ? { ...CONFIG_PADRAO, ...JSON.parse(salvo) } : { ...CONFIG_PADRAO };
  } catch { return { ...CONFIG_PADRAO }; }
}

function salvarConfig(cfg) {
  try { localStorage.setItem(CONFIG_KEY, JSON.stringify(cfg)); } catch {}
}

function aplicarConfig(cfg) {
  const html = document.documentElement;
  html.setAttribute('data-tema', cfg.tema);
  html.setAttribute('data-contraste', cfg.contraste);
  html.setAttribute('data-fonte', cfg.fonte);
  html.setAttribute('data-tamanho', cfg.tamanho);

  if (window.ambienteGain) {
    window.ambienteGain.gain.value = (cfg.volume / 100) * 0.025;
  }
  if (window.ambienteGain2) {
    window.ambienteGain2.gain.value = (cfg.volume / 100) * 0.015;
  }
  if (window.ambienteNoiseGain) {
    window.ambienteNoiseGain.gain.value = (cfg.volume / 100) * 0.008;
  }
}

function atualizarConfig(chave, valor) {
  const cfg = carregarConfig();
  cfg[chave] = valor;
  salvarConfig(cfg);
  aplicarConfig(cfg);
  return cfg;
}

let audioIniciado = false;

function iniciarAmbiente() {
  if (audioIniciado) return;
  const Ctx = window.AudioContext || window.webkitAudioContext;
  if (!Ctx) return;
  audioIniciado = true;

  const ctx = new Ctx();

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'sawtooth';
  osc.frequency.value = 45;
  gain.gain.value = 0.012;
  osc.connect(gain).connect(ctx.destination);
  osc.start();

  const osc2 = ctx.createOscillator();
  const gain2 = ctx.createGain();
  osc2.type = 'sine';
  osc2.frequency.value = 55;
  gain2.gain.value = 0.008;
  osc2.connect(gain2).connect(ctx.destination);
  osc2.start();

  const bufferSize = ctx.sampleRate * 2;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;

  const noise = ctx.createBufferSource();
  noise.buffer = buffer;
  noise.loop = true;

  const noiseFilter = ctx.createBiquadFilter();
  noiseFilter.type = 'lowpass';
  noiseFilter.frequency.value = 300;

  const noiseGain = ctx.createGain();
  noiseGain.gain.value = 0.004;

  noise.connect(noiseFilter).connect(noiseGain).connect(ctx.destination);
  noise.start();

  window.ambienteCtx = ctx;
  window.ambienteGain = gain;
  window.ambienteGain2 = gain2;
  window.ambienteNoiseGain = noiseGain;

  const cfg = carregarConfig();
  aplicarConfig(cfg);
}

document.addEventListener('DOMContentLoaded', () => {
  aplicarConfig(carregarConfig());
});