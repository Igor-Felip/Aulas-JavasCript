/*
2) O IMC - Indice de Massa Corporal é um criterio da OMS para dar uma indicação sobre 
a condição de peso de uma pessoa adulta.

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo;

IMC adultos condição:
- abaixo de 18,5 abaixo do peso;
- entre 18,5 e 25 peso normal;
- entre 25 e 30 acima do peso;
- entre 30 e 40 Obeso;
- acima de 40 Obesidade Grave;
*/

const peso = 90;
const altura = 1.81;
const IMC = peso / (altura * altura);

console.log(IMC.toFixed(2));

if (IMC < 18.5) {
    console.log('abaixo do peso');
} else if (IMC >= 18.5 && IMC < 25) {
    console.log('peso normal');
} else if (IMC >= 25 && IMC < 30) {
    console.log('acima do peso');
} else if (IMC >= 30 && IMC < 40) {
    console.log('Obeso');
}else {
console.log('Obesidade Grave')
}