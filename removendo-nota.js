const notas = [10, 7, 8, 5, 10];
notas.pop();      //remove um elemento do final da lista
console.log(notas);

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(`A média é ${media}`);

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
