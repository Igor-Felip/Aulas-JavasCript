
/* faça um programa para calcular o valor gasto de combustivel em uma viagem.

voce tera 3 variaveis. Sendo elas:
1 - Preço do combustivel;
2 - gasto medio de combustivel do carro por KM;
3 - distancia em KM da viagem;

imprima no console o valor que sera gasto para realizar esta viagem.

*/
const precoCombustivel = 4.69;
const mediaCombustivel = 40;
const distancia = 100;

const litros = (distancia/mediaCombustivel);
const gasto = (litros*precoCombustivel);
console.log(gasto.toFixed(2));


