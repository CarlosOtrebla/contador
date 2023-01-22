const verificaEntrada = (entrada, id) => {
    if(entrada == ''){
        document.getElementById(id).innerHTML = 'preencha este campo.'
    }else {
        document.getElementById('idFaltouInicio').innerHTML = ''
    }
}


const contar = () => {
    let inicio = document.getElementById('idInicio').value
    let fim = document.getElementById('idFim').value
    let passo = document.getElementById('idPasso').value
    let resultado =  document.getElementById('idResultado')

    verificaEntrada(inicio, 'idFaltouInicio')
    verificaEntrada(fim,'idFaltouFim')
    verificaEntrada(passo,'idFaltouPasso')


    
}

const mudou = (campo) => {
    document.getElementById(campo).innerHTML = ''
}