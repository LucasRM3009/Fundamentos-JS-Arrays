const nomes = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const notas = [7, 4.5, 8, 7.5];

// filter() - Cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

// retorna um booleano (true ou false)

                 //retorno       //parâmetros     // retorno booleano
const reprovados = nomes.filter((alunos, indice) => notas[indice] < 5); 
// const reprovados = nomes.filter((_, indice) => notas[indice] < 5);

console.log(`Reprovados: ${reprovados}`);
