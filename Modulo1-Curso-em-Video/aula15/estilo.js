function media(){
    let tn = [window.document.getElementById('txtn1'),window.document.getElementById('txtn2'),window.document.getElementById('txtn3'),window.document.getElementById('txtn4')]
    let res = window.document.getElementById('res')
    if (tn[0].value.length === 0 || tn[1].value.length === 0 || tn[2].value.length === 0 || tn[3].value.length === 0){
        alert('[ERRO] é necessario colocar numeros para continuar.')
    }else if (Number(tn[0].value) >= 11 || Number(tn[1].value) >= 11 || Number(tn[2].value) >= 11 || Number(tn[3].value) >= 11 ){
        alert('[ERRO] só pode numeros  menores que ou iguais a 10')
    }else{
        let n1 = Number(tn[0].value)
        let n2 = Number(tn[1].value)
        let n3 = Number(tn[2].value)
        let n4 = Number(tn[3].value)
        m = (n1+n2+n3+n4)/4
        res.innerHTML = `Sua media foi ${m} <br>`
        if(m <= 5){
            res.innerHTML += 'Você foi <strong>REPROVADO</strong>'
        }else{
            res.innerHTML += 'Você foi <strong>APROVADO</strong>'
        }
    }
}