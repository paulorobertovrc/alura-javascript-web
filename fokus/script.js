const html = document.querySelector('html');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');

const musicaFocoInput = document.querySelector('#alternar-musica');
const musica = new Audio('sons/luna-rise-part-one.mp3');
const somPlay = new Audio('sons/play.wav');
const somPause = new Audio('sons/pause.mp3');
const somFim = new Audio('sons/beep.mp3');

const tipoFoco = document.querySelectorAll('[data-botaoTipoFoco]');
const focoBt = tipoFoco[0];
const curtoBt = tipoFoco[1];
const longoBt = tipoFoco[2];

const startPauseBt = document.querySelector('#start-pause');
const startPauseBtTexto = document.querySelector('#start-pause span');
const startPauseImg = document.querySelector('#start-pause img');

const tempoRestante = document.querySelector('#timer');

let tempoDecorridoEmSegundos = 1500;
let intervaloId = null;

musica.loop = true;
musicaFocoInput.addEventListener('change', () => {
    if (musicaFocoInput.checked) {
        musica.play();
    } else {
        musica.pause();
    }
});

focoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 1500;
    alterarContexto('foco', focoBt);
});

curtoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 300;
    alterarContexto('descanso-curto', curtoBt);
});

longoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 900;
    alterarContexto('descanso-longo', longoBt);
});

function alterarContexto(contexto, botao) {
    exibirTemporizador();
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

const contagemRegressiva = () => {
    if (tempoDecorridoEmSegundos <= 0) {
        somFim.play();
        alert('Acabou!');
        pararTemporizador();
        startPauseBtTexto.textContent = 'Reiniciar';
        startPauseImg.setAttribute('src', 'imagens/play_arrow.png');
        return;
    }

    tempoDecorridoEmSegundos -= 1;
    exibirTemporizador();
}

startPauseBt.addEventListener('click', iniciarTemporizador);

function iniciarTemporizador() {
    if (intervaloId) {
        somPause.play();
        startPauseBtTexto.textContent = 'Retomar';
        startPauseImg.setAttribute('src', 'imagens/play_arrow.png');
        pararTemporizador();
        return;
    }
    
    somPlay.play();
    intervaloId = setInterval(contagemRegressiva, 1000);
    startPauseBtTexto.textContent = 'Pausar';
    startPauseImg.setAttribute('src', 'imagens/pause.png');
}

function pararTemporizador() {
    clearInterval(intervaloId);
    intervaloId = null;
}

function exibirTemporizador() {
    const tempo = new Date(tempoDecorridoEmSegundos * 1000).toLocaleTimeString('pt-BR', {
        minute: '2-digit',
        second: '2-digit',
    });
    tempoRestante.innerHTML = `${tempo}`;
}

exibirTemporizador();
