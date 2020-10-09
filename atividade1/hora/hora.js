function carregar(){
    var msg = window.document.querySelector('div#msg')
    var img = window.document.getElementById('image')
    var data = new Date()
    var hora = data.getHours()
    msg.innerText = `A hora atual é ${hora}h`
    if ( hora >= 0 && hora < 12){
        img.src = 'horamanha.png'
        document.body.style.background = '#e2cd9f'
    }else if (hora >= 12 && hora < 18){
        img.src = 'horatarde.png'
        document.body.style.background = '#b9846f'
    }else{
        img.src = 'horanoite.png'
        document.body.style.background = '#515154'
    }
}