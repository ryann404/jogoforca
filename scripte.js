let telaTentativas = document.querySelector('#saidaTentativas')
let telaDescartados = document.getElementById('saidaDescartados')
let campoDigito = document.getElementById('inpChute')
let btnTestar = document.getElementById('btnEnviar')
let statusMensagem = document.querySelector('#status')



let listaNomes = [
    "abacaxi",
    "cachalote",
    "betoneira",
    "maquina-removedora-de-lona-de-freio",
    "violeta",
    "nome"
]

let codigoSecreto = Math.round(Math.random() * 5)
// selecionando numero entre 0 e 3, aprendi essa cm o jogo do jairo
codigoSecreto = listaNomes[codigoSecreto]


let tentativasRestantes = 6
let partesBoneco = ["cabeca", "corpo", "bracoEsq", "bracoDir", "pernaEsq", "pernaDir"]
let codigoOculto = []


for (let i = 0; i < codigoSecreto.length; i++){
    codigoOculto.push("*")
}
// 5 caracteres = "*****" (5 asteriscos)
// 4 caracteres = "****" (4 asteriscos)


let codigo = document.getElementById('saidaPalavraOculta')
// codigo.innerHTML = codigoOculto.join(" ")


btnTestar.addEventListener("click", testarCodigo)

function testarCodigo(){
    if(tentativasRestantes <= 0){
        return
    }
    let digito = campoDigito.value
    // pega o texto que o usuario digita
    campoDigito.value = ""
    // pega o valor e limpa a caixa
    campoDigito.focus()

    if(digito == ""){
        return
    }

    let encontrou = false

    for (let i = 0; i < codigoSecreto.length; i++){
        if(codigoSecreto[i] == digito){
            codigoOculto[i] = digito
            encontrou = true
        }
    }

    if(encontrou){
        codigo.innerText = codigoOculto.join(" ")
    } else{
        tentativasRestantes--
        telaTentativas.innerText = tentativasRestantes
        telaDescartados.innerText += `${digito}`

        // NOVO: mostra a próxima parte do boneco
        let erros = partesBoneco.length - tentativasRestantes
        document.getElementById(partesBoneco[erros - 1]).style.display = "inline"
    }
    }

    if(tentativasRestantes <= 0) {
        statusMensagem.innerHTML = `<p style="color: red;"><strong>Ish...</strong>`
        btnTestar.disabled = true
        campoDigito.disabled = true
    } else if(!codigoOculto.includes("*")){
        statusMensagem.innerHTML = `<p style="color: blue;"><strong>Você foi salvo!</strong>`
        btnTestar.disable = true
        campoDigito.disable = true
    }
