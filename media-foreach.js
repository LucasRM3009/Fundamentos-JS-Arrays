const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

// forEach - é uma função que chama outra função
// callback - função que retorna true ou false
notas.forEach(nota => {
    somaDasNotas += nota;
});

// notas.forEach(function(nota) {
//     somaDasNotas += nota;
// });

let media = somaDasNotas/notas.length;

console.log(media)
