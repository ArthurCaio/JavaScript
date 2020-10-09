var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()
console.log(`Agora são ${hora}:${minuto}h`)
if (hora < 12 && hora > 6){
    console.log('Bom Dia.')
}else if (hora <= 18 && hora >= 13){
    console.log('Boa Tarde.')
}else if (hora > 18 ){
    console.log('Boa Noite.')
}else if (hora >= 0){
    console.log('Boa Madrugada.')
}