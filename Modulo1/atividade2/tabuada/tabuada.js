let titulo = window.document.getElementById('titulo')
let tab = window.document.getElementById('tab')
titulo.innerHTML = 'Tabuada'
function tabuada(){
    let num = window.document.getElementById('txtn')
    if(num.value.length === 0){
        alert('[ERRO] É necessario um valor para continuar')
    }else{
        let n = (num.value)
        tab.innerHTML= ''
        for(let c = 1;c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
}