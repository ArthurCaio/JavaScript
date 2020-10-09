var pessoa = {nome: 'josé' ,
 sexo:'M' , 
 peso: 84.8,
 engordar (p=0) {
     console.log('Engordou')
     this.peso += p
 }}
pessoa.engordar(2)
console.log(`${pessoa.nome} pesa ${pessoa.peso}Kg.`)