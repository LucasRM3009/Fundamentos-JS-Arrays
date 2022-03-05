const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPyhton = [7, 3.5, 8, 9.5];

function mediaSala(notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acumulador, valorAtual) => valorAtual + acumulador, 0);
    return somaDasNotas/notasDaSala.length; 
}

console.log(`Média da sala JavaScript ${mediaSala(salaJS)}`);
console.log(`Média da sala Java ${mediaSala(salaJava)}`);
console.log(`Média da sala Python ${mediaSala(salaPyhton)}`);
