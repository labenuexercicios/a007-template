//ISSO É UM COMENTÁRIO
/*
Um comentário é ignorado no momento em que o programa é rodado
*/
//- 01
/*
console.log(`Olá mundo!`)
prompt(`Qual seu nome?`)
*/
// 02
/*
const nome = prompt(`Qual seu nome?`)
console.log(`Seu nome é ${nome}`)
*/
// 03
/*
let idade = 25
idade = 50
idade = 20,75
let nome = "Jucimara"
nome = "Antonio"
nome = "Jacira"
console.log(idade, nome)
*/
//Nesse caso tem que declarar let pois a mesma variável recebe vários valores
// 04
/*
const nome = "Jonas"
const idade = 28
console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos`)
*/
//05
/*
const pet = prompt(`Você tem algum pet? Sim ou não?`)
const validar = pet === "sim"
console.log(validar)
*/
// Nesse exemplo eu crie uma lógica booleana, para imprimir true se o usuário responder que sim. Declarei com o nome de (validar)
//06
/*
const pet = prompt(`Você tem algum pet? Sim ou não?`)
if(pet === "sim"){
    const nomePet = prompt(`Qual o nome dele?`)
    console.log(`Você deve amar muito o ${nomePet}`)
    const validar = pet === "sim"
console.log(validar)
} else{
    alert(`Tudo bem então.`)
}
*/
// Para guardar um dado recebido pelo usuário, utilizo muito o prompt.
//A questão do ter pet ou não pode ser utilziado uma variável do tipo booleana
// 07
/*
const numero = 30
const numero2 = 28.75
const nome = `Antonio`
const boolean = 8 === true
console.log (typeof numero)
console.log(typeof nome)
console.log(typeof numero2)
console.log(typeof boolean)
*/
//08
/*
const nome = prompt(`Qual seu nome?`)
const idade = prompt(`Qual sua idade?`)
console.log(`A variável nome é do tipo ${typeof nome} e a variável idade é do tipo ${typeof idade}`)
*/
//Dessa maneira, ele interpreta a variável idade da maneira errada pois diz que ela é uma string

//A correção para esse caso seria usa o argumento Number antes do prompt -> "const idade = Number(prompt(`Qual sua idade?`))"

// Fixação 01
/*
const string = "Meu carro é cinza"
let number = 1
let boolean = string === "cinza"
console.log(typeof string, typeof number, typeof boolean)
*/

//Fixação 02
let a = 45
let b = 53
let c 
c=a
a=b
b=c
console.log(`O novo valor de a é ${a}`)
console.log(`O novo valor de b é ${b}`)