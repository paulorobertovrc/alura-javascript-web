const robotron = document.querySelector("#robotron");

robotron.addEventListener("click", (evento) => {
    console.log(evento);
});

function dizerOi(nome) {
    console.log("O Robotron foi clicado e disse oi, " + nome + "!");
}
