const Listadepecas = ["pecas de teste", "AB", "peca b"]

console.log("quantidade de caracteres")

if (Listadepecas.length <=10){
console.log("as peças podem ser cadastradas")
} 
console.log("quantidade de caracteres")

for(let index = 0; index < Listadepecas.length; index++){
    const pecatual = Listadepecas[index];
 if (pecatual.length<3){
console.log(pecatual + ": a peca possui nome inferior a 3 caracteres e não pode ser cadastrada")
} else{
console.log(pecatual + ": a peça pode ser cadastrada")
}
}
console.log("peso da peça")
const pesodaspecasemgramas = 50
if (pesodaspecasemgramas >=100){
console.log("peso suficiente")
} else{
    console.log("peso insuficiente")
}
