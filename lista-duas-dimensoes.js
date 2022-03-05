const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const mediasDosAlunos = [10, 7, 9, 6];

// Arrays dentro de um array
let listaDeNotasEAlunos = [alunos, mediasDosAlunos];

console.log(`${listaDeNotasEAlunos[0][0]}, sua média é ${listaDeNotasEAlunos[1][0]}`);
