/* 
1) Faça um algoritmoque dado as 3 notas tiradas por um aluno em um semestre de faculdade
calcule e imprima a sua media e a sua classificação conforme a tabela abaixo.

media = (N1 + N2 + N3) / 3;

Classificação:
- media menor que 5, reprovado;
- media entre 5 e 7, recuperação;
- media acima de 7, passou de semestre;
*/

const N1 = 5;
const N2 = 10;
const N3 = 8;
const media = (N1 + N2 + N3) / 3;

console.log(media.toFixed(2));

if (media < 5) {
    console.log('reprovado');
} else if (media > 7) {
    console.log('aprovado');
} else {
    console.log('recuperação');
}