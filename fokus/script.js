const html = document.querySelector('html');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const musicaFocoInput = document.querySelector('#alternar-musica');
const musica = new Audio('sons/luna-rise-part-one.mp3');

const tipoFoco = document.querySelectorAll('[data-botaoTipoFoco]');
const focoBt = tipoFoco[0];
const curtoBt = tipoFoco[1];
const longoBt = tipoFoco[2];

musica.loop = true;
musicaFocoInput.addEventListener('change', () => {
    if (musicaFocoInput.checked) {
        musica.play();
    } else {
        musica.pause();
    }
});

focoBt.addEventListener('click', () => {
    alterarContexto('foco', focoBt);
});

curtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto', curtoBt);
});

longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo', longoBt);
});

function alterarContexto(contexto, botao) {
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `imagens/${contexto}.png`);
    
    tipoFoco.forEach((bt) => {
        bt.classList.remove('active');
    });
    botao.classList.add('active');

    switch (contexto) {
        case 'foco':
            titulo.innerHTML = `Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`;
            break;
        case 'descanso-curto':
            titulo.innerHTML = `Que tal dar uma respirada?<br>
            <strong class="app__title-strong">Faça uma pausa curta!</strong>`;
            break;
        case 'descanso-longo':
            titulo.innerHTML = `Hora de voltar à superfície.<br>
            <strong class="app__title-strong">Faça uma pausa longa!</strong>`;
            break;
        default:
            break;
    }

}
