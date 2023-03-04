//retorna objetos com arrays das repetidas e nao repetidas
function verificarRepetidas(array) {
    naoRepete = []
    repetidas = []
    //nenhuma repetdida
    for(let c = 0; c < array.length; c++) {
        let letra =array[c]
        // vê cada letra de não repete
        var contadorNenhumRepetida = 0
        for(let c2 = 0; c2 < array.length; c2++) {
            if (letra == naoRepete[c2]){
                repetidas = repetidas.concat(letra)
                break
            } if (letra != naoRepete[c2]) {
                contadorNenhumRepetida++//somente se já btiver verificado todas ele concatena a letra
                if (contadorNenhumRepetida >= (array.length - 1)) {
                    naoRepete = naoRepete.concat(letra)
                    break
                }
                
            } 
        }
    
    }
    
    return {naoRepete:naoRepete, repetidas:repetidas}
}


function fatorial (n) {
    let fatorial = 1
    while (n > 0) {
        fatorial *= n
        n--
    }
    return fatorial
}


function nenhumaRepetida(array) {
    const repete = verificarRepetidas(array)
    let teste = []
    if (repete.repetidas.length == 0) {
        let resultado = fatorial(array.length)
        return resultado
    } else {
        return false
    }
   
}


function comRepetiodos(array) {
    const repete = verificarRepetidas(array)
    let fatorialCima = fatorial(array.length)
    let fatorialBaixo = 1
    const alfabetico = repete.repetidas.sort()
    c = 0
    while (c < alfabetico.length) {
        let letra = alfabetico[0]
        let c2 = 1//contador para cada letra repetida, uso ele e depois descarto
        while (true) {
            if (letra == alfabetico[0]) {
                c2 ++
                alfabetico.shift()
                //console.log(alfabetico, c2)
            } else {
                break
            }
        }
        try {
            fatorialBaixo *= fatorial(c2)
            //console.log('FB ='+ fatorialBaixo)
        } catch(e) {
            //console.log('nao foi o fatorial')
            break
        }
        //console.log(fatorialBaixo)
        
    }
    let resultado = fatorialCima / fatorialBaixo
    return resultado


}


function anagramas(palavra) {
    const repeteOuNao = verificarRepetidas(palavra)
    if (repeteOuNao.repetidas.length == 0) {
        var r = nenhumaRepetida(palavra)
    } else {
        var r = comRepetiodos(palavra)
    }

    return r
}

//vsi para o HTML
function mostrarAnagramas() {
    var mostrar = document.getElementById('mostrar')
    var usuario = document.getElementById('num')
    var palavraUsuario = String(usuario.value)
    palavraUsuario = palavraUsuario.toLowerCase()//todas as letras iguais (tamanho)
    palavraArray = palavraUsuario.split('')// '' faz um array quebrando a cada palavra

    const resulado = anagramas(palavraUsuario)
    mostrar.innerHTML = `A Palavra ${palavraUsuario} tem:<br>
    ${resulado} Anagramas`




}

/*
//TESTES FINAIS
console.log(anagramas('nhe'))
console.log(anagramas('nhee'))
console.log(anagramas('Brasil'))
console.log(anagramas('sorte'))
console.log(anagramas('analistas'))
console.log(anagramas('Banana'))
console.log(anagramas('Pateta'))





console.log(comRepetiodos('nheee'))
//Testes
p = 'nhe'
console.log(nenhumaRepetida('Victorr'))
console.log(verificarRepetidas(p))


var a = [1]
console.log(!!a)



// Já tá funcionando sem ter nenhum repetido
//terminei 22:59 03/10/2022
*/