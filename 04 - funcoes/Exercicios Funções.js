function escrevaNome(nome) {
    console.log('Meu nome é ' + nome);
}
escrevaNome('Igor');

function maiorIdade(idade) {
    if (idade < 18) {
        return 'menor idade';
    } else (idade >= 18)
    return 'maior idade';
}

(function () {
    const idade = 19;

    console.log(maiorIdade(idade));
})();