function igual(){
    let tn1 = window.document.getElementById('txtn1')
    let tn2 = window.document.getElementById('txtn2')
    if (tn1.value.length === 0 || tn2.value.length === 0){
        alert('[ERRO] Verifique abaixo para continuar.')
    }else{
        let n1 = Number(tn1.value)
        let n2 = Number(tn2.value)
        let s = 0
        let conta = document.getElementsByName('asdm')
        let res = document.getElementById('res')
        if (conta[0].checked){
            s = n1 + n2
            res.innerHTML = `${n1} + ${n2} = ${s}`
        }else if(conta[1].checked){
            s = n1 - n2
            res.innerHTML = `${n1} - ${n2} = ${s}`
        }else if (conta[2].checked){
            s = n1 * n2
            res.innerHTML = `${n1} x ${n2} = ${s}`
        }else if (conta[3].checked){
            s = n1 / n2
            res.innerHTML = `${n1} ÷ ${n2} = ${s}` 
        }
    }
}