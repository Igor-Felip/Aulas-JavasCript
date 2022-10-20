/* 
3)Elabore um algoritmo que calcule o que deve ser pago por um produrto, considerando o preço normal de etiqueta
e a escolha da condição de pagamento.
Utilize os codigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o calculo
adequado.

Código condição de pagamento:
1 - A vista Debito, recebe 10% de desconto;
2 - A vista no Dinheiro ou PIX , 15% de desconto;
3 - Em duas vezes , preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta com juros de 10%;
*/

const precoEtiqueta = 100;
const tipoPagamento = ('')
const DPE = ((precoEtiqueta * 10) / 100);
const QPE = ((precoEtiqueta * 15) / 100);
const duasPE = (precoEtiqueta / 2);

if (tipoPagamento === '1') {
    console.log(precoEtiqueta - DPE);
} else if (tipoPagamento === '2') {
    console.log(precoEtiqueta - QPE);
} else if (tipoPagamento === '3') {
    console.log('O valor da compra foi ' + precoEtiqueta + ' e ficaria ' + duasPE + ' em 2X sem juros.');
} else {
    console.log('O valor da compra foi ' + precoEtiqueta + ' e ficaria ' + (precoEtiqueta + DPE) + ' podendo parcelar de 3 a 10x.' );
}
