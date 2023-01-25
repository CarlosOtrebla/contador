let contar = () => {
    let inicio = document.getElementById('idInicio')
    let fim = document.getElementById('idFim')
    let passo = document.getElementById('idPasso')
    let resultado = document.getElementById('idMsg')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resultado.innerHTML = 'Impossível contar'
    } else {
        resultado.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1 ')
            p = 1 
        }
        if (i < f) {

            // Contatem crescente

            for (let cont = i; cont <= f; cont += p) {
                resultado.innerHTML += `${cont} \u{1f449}`
            }
        } else {
            // Contagem regressiva
            for (let cont = i; cont >= f; cont -= p) {
                resultado.innerHTML += `${cont} \u{1f449}`
            }

        }
        resultado.innerHTML += `\u{1f3c1}`
    }

}


// const verificaEntrada = (entrada, id) => {
    
//     if(entrada == ''){
//         document.getElementById(id).innerHTML = 'preencha este campo.'
//     }else {
//         document.getElementById(id).innerHTML = ''
        
//     }
//     exibeResultado(Number(inicio.value),Number(fim.value),Number(passo.value))
// }


// const contar = () => {  
//     verificaEntrada(Number(inicio.value), 'idFaltouInicio')
//     verificaEntrada(Number(fim.value),'idFaltouFim')
//     verificaEntrada(Number(passo.value),'idFaltouPasso')

// }

// const mudou = (value, id) => {

//     verificaEntrada(value,id)
// }



// let exibeResultado = (inicio,fim,passo) => {
//     for(let cont=inicio; cont <= fim; cont = cont + passo){
//     //    resultado.innerHTML = cont
//     let newSpan = document.createElement("span")
//     newSpan.innerHTML = '10'
//     resultado.appendChild

//     }}



