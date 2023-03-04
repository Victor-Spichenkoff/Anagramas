const fatorial = num => {
    let res = 1
    for (let cont = num; cont > 0; cont-- ) {
        res *= cont
    }
    return res
}//funcionando

function verSeRepete (palavra) {
    let array = palavra.split('')
    ///repete?
    for (let i in array) {
        let letraAtual = array[i]
        let repete = -1//sempre repete 1 vez
        for (let i2 in array) {
            if (array[i2] == letraAtual) {
                repete++
            }
            if (repete >= 1) {//repetiu 2 vezes é que realmente repete
                return true
            }
        }
    }
    return false
}

const fatorialCima = palavra => fatorial(palavra.length)

const fatorialBaixo = function(palavra) {
    let array = palavra.split('').sort()
    var fBaixo = 1
    for (let i = 0; i < array.length;i++) {
        let letraAtual = array[0]
        array.shift()
        let parcialFatorial = 1

        for (let i2 = 0; i2 < array.length; i2++) {
            if (letraAtual == array[i2]) {
                parcialFatorial += 1
            }
        
        }

        for (let cont = 0; cont < parcialFatorial-1; cont++) {array.shift()}
        fBaixo *= fatorial(parcialFatorial)
    }

    return [fBaixo, array]
}


console.log(fatorialBaixo('bbcc'))