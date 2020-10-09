function contador(){
    let ini = window.document.getElementById('tini')
    let fim = window.document.getElementById('tfim')
    let passos = window.document.getElementById('tpass')
    let res = window.document.getElementById('res')
    if(ini.value.length === 0 || fim.value.length === 0 || passos.value.length === 0){
        alert('[ERRO] Verifique os dados abaixo')
    }else{
        res.innerHTML = `Contando: <br>`
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passos.value)
        let s = 0 
        if(p <= 0){
            alert('Passo invalido. Considerado PASSO 1 ')
            p = 1
        }
        if(i < f){
            for (let c = i; c <= f; c += p){
                res.innerHTML += ` \u{1F449}${c}`
                s += c
            }
        }else{
            for (let c = i;c >= f; c -= p){
                res.innerHTML += ` \u{1F449}${c} `
                s += c 
            }
        }
        res.innerHTML += `\u{270B} <br>`
        res.innerHTML += `A soma entre todos os valores é de ${s}`
    }
}