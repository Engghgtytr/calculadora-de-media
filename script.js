const nota1 = document.getElementById("nota1")
const nota2 = document.getElementById("nota2")
const nota3 = document.getElementById("nota3")
const nota4 = document.getElementById("nota4")

const resultado = document.getElementById("resultado")
const status = document.getElementById("status")

const calcular = document.getElementById("calcular")
const verificar = document.getElementById("verificar")

let media = 0

function calcularMedia(){
    const n1 = Number(nota1.value)
    const n2 = Number(nota2.value)
    const n3 = Number(nota3.value)
    const n4 = Number(nota4.value)

    media = (n1 + n2 + n3 + n4) / 4
    resultado.innerText = `Média: ${media.toFixed(1)}`
}

function verificarResultado(){
    if(media >= 6){
        status.innerText = "APROVADO"
        status.style.color = "lime"
    } else {
        status.innerText = "REPROVADO"
        status.style.color = "red"
    }
}

calcular.addEventListener("click", calcularMedia)
verificar.addEventListener("click", verificarResultado)
