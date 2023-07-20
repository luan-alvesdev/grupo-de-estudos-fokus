const focoBtn = document.querySelector(".foco")
const shortBtn = document.querySelector('.descanso-curto')
const longBtn = document.querySelector('.descanso-longo')
const html = document.querySelector('html')
const banner = document.querySelector(".troca-banner")
const titulo = document.querySelector("#app__title")
const buttons = document.querySelectorAll('.botoes-contexto');
const musicaFocoInput = document.querySelector('#alternar-musica');
const musica = new Audio('/sons/luna-rise-part-one.mp3');


mostrarTempo()

focoBtn.addEventListener("click", () => {
    alterarContexto('foco')
    focoBtn.classList.add('active')
})

shortBtn.addEventListener("click", () => {
    alterarContexto('short-break')
    shortBtn.classList.add('active')
})

longBtn.addEventListener("click", () => {
    alterarContexto('long-break')
    longBtn.classList.add('active')
})

function alterarBanner(contexto) {
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `/imagens/${contexto}.png`)
    switch (contexto) {  
        case "foco":
            titulo.innerHTML = `
                Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
            `
            break;
        case "short-break":
            titulo.innerHTML = `
                Que tal dar uma respirada? <br>
                <strong class="app__title-strong">Faça uma pausa curta!.</strong>
            `
            break;
        case "long-break":
            titulo.innerHTML = `
                Hora de voltar à superfície. <br>
                <strong class="app__title-strong">Pare para uma pausa longa.</strong>
            `
            break;


        default:
            break;
    }

}

function alterarContexto(contexto) {
    alterarBanner(contexto)
    mostrarTempo()
    buttons.forEach(function (contexto) {
        contexto.classList.remove('active');
    });
}
