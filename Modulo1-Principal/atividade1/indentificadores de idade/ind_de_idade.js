function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('tano')
    var res = document.querySelector('div#res')
    if (Number(fano.value) == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else {
        var sex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(sex[0].checked){
            genero = 'Homem'   
            if (idade >= 0 && idade<= 13){
                res.innerText = `Um Menino de ${idade} anos`
                img.setAttribute('src', 'criancahomen.png')
            }else if(idade >= 14 && idade < 30){
                img.setAttribute('src', 'jovemhomen.png')
            }else if(idade >= 30 && idade < 60){
                img.setAttribute('src', 'adultohomen.png')
            }else{
                img.setAttribute('src', 'idosohomen.png')
            }
        }else if (sex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade<= 13){
                img.setAttribute('src', 'criancamulher.png')
            }else if(idade >= 14 && idade < 30){
                img.setAttribute('src', 'jovemmulher.png')
            }else if(idade >= 30 && idade < 60){
                img.setAttribute('src', 'adultomulher.png')
            }else{
                img.setAttribute('src', 'idosomulher.png')
            }
        }else{
            window.alert('[ERRO] Verifique os dados e tente novamente')
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} de ${idade} anos`
        res.appendChild(img)
    }
}