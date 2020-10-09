let num = window.document.getElementById('fnum')
let lista = window.document.getElementById('flista')
let res = window.document.getElementById('res')
let valores = []
function isNumber(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
    }
}

function adicionar(){
    if(isNumber(num.value) && !inLista(num.value, valores) ){
        let n = Number(num.value)
        valores.push(n)
        let valor = document.createElement('option')
        valor.text = `Valor ${n} adicionado.`
        lista.appendChild(valor)
        res.innerHTML = ''
    }else{
        alert('[ERRO] Valor invalido ou já encontrado lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length === 0){
        alert('[ERRO] Adicione um valor para prossegir.')
    }else{
        let total = valores.length
        let mn = valores[0]
        let mr = valores[0]
        let soma = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > mr){
                mr = valores[pos]
            }
            if(valores[pos] < mn){
                mn = valores[pos]
            }
        }
        let media = soma/total
        res.innerHTML = ''
        res.innerHTML += `<p>O total de numeros adicionados são ${total}.</p>`
        res.innerHTML += `<p>O menor numero é ${mn}.</p>`
        res.innerHTML += `<p>O maior numero é ${mr}.</p>`
        res.innerHTML += `<p>A soma dos numero é ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores são ${media}.</p>`
    }
}