// exercício nota escolar
// obter a média a partir de um array
// 0-59 = F
// 60-69 = D
// 70-79 = C
// 80-89 = B
// 90 - 100 = A

const array = [80,85,80];

console.log(mediaDoAluno(array));

function mediaDoAluno(notas) {
    const media = calcularMedia(notas);

    if (media < 59) return 'failed! your note is F';
    if (media < 69) return 'failed! your note is D';
    if (media < 79) return 'approved! your note is C, study more';
    if (media < 89) return 'approved! your note is B';
    return 'approved! your note is A'
}

function calcularMedia(array) {
    let soma = 0;
    for (let valor of array) {
        soma += valor;
    }
    return soma/(array.length);
}