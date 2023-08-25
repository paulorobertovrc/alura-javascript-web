const html = document.querySelector('html');

const tipoFoco = document.querySelectorAll('[data-botaoTipoFoco]');
const focoBt = tipoFoco[0];
const curtoBt = tipoFoco[1];
const longoBt = tipoFoco[2];

focoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'foco');
});

curtoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto');
});

longoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo');
});
