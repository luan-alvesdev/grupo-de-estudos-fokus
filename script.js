const focoBtn = document.querySelector('#foco')
const shortBtn = document.querySelector('#descanso-curto')
const longBtn = document.querySelector('#descanso-longo')
const html = document.querySelector('html')

const banner = document.querySelector(".app__image")
const titulo = document.querySelector("#app__title")

function alterarBanner(contexto) {
    banner.setAttribute('src', `/imagens/${contexto}.png`)

    switch(contexto) {
        case "foco":
            titulo.innerHTML = `
            Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
            `
            break
        case "short-break":
            titulo.innerHTML = `
            Que tal dar uma respirada?<br> 
            <strong>Faça uma pausa curta!</strong>
            `
            break
        case "long-break":
            titulo.innerHTML = `
            Hora de voltar à superfície. <br>
            <strong>Pare para uma pausa longa.</strong>
            `
            break
    }

focoBtn.addEventListener("click", () => {
    html.setAttribute('data-contexto', 'foco')
    alterarBanner("foco")  
})

shortBtn.addEventListener("click", () => {
    html.setAttribute('data-contexto', 'short-break')
    alterarBanner("short-break")  
})

longBtn.addEventListener("click", () => {
    html.setAttribute('data-contexto', 'long-break')
    alterarBanner("long-break") 
})
}


const musicaFocoInput = document.querySelector('#alternar-musica');
const musica = new Audio('/sons/luna-rise-part-one.mp3');
musica.loop = true


musicaFocoInput.addEventListener('change', () => {
    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
})


function iniciarOuPausar() {
    if (intervaloId) {
        audioPause.play();
        return
    }
    audioPlay.play();
}
