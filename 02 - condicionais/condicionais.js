const etanol = 2.97;
const gasolina = 4.84;
const distancia = 1000;
const KML = 35;
const TC = 'G';
const QLU = (distancia / KML);
const PE = (QLU * etanol);
const PG = (QLU * gasolina);

console.log(QLU + ' Litros usados.');

if (TC === 'E') {
    console.log('Seu gasto com Etanol foi ' + (PE.toFixed(2)));
} else if (TC === 'G') {
    console.log('Seu gasto com Gasolina foi ' + (PG.toFixed(2)));
} else {
    console.log('Valor invalido.')
};