const verificaEntrada = (entrada, id) => {
    if(entrada == ''){
        document.getElementById(id).innerHTML = 'preencha este campo.'
    }else {
        document.getElementById(id).innerHTML = ''
    }
}

let inicio = document.getElementById('idInicio')
let fim = document.getElementById('idFim')
let passo = document.getElementById('idPasso')
let resultado =  document.getElementById('idResultado')

const contar = () => {  
    verificaEntrada(inicio.value, 'idFaltouInicio')
    verificaEntrada(fim.value,'idFaltouFim')
    verificaEntrada(passo.value,'idFaltouPasso')
}

const mudou = (value, id) => {

    verificaEntrada(value,id)

}
