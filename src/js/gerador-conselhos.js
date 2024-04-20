const botaoDado = document.querySelector('.bgn-dado')

const idConselho = document.getElementById('id-conselho')

const descricaoConselho = document.getElementById('descricao-conselho')

async function gerarConselho() {
    const url = "https://api.adviceslip.com/advice"
    const response = await fetch(url)
    const json = await response.json()
    let id = json.slip.id
    let conselho = json.slip.advice

    idConselho.innerText = `Advice #${id}`
    descricaoConselho.innerText = `"${conselho}"`
}
gerarConselho()
botaoDado.addEventListener('click', () =>
    gerarConselho())