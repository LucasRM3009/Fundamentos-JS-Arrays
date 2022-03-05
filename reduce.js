/* 
 * const callback = (
 *  acumulador, 
 *  elementoAtual, 
 *  indexAtual, 
 *  arrayOriginal
 * ) => {};
 * 
 * const valorInicial = XX;
 * const lista = [];
 * 
 * const reducedValue = lista.reduce(
 *  callback(
 *      acumulador, 
 *      elementoAtual, 
 *      indexAtual, 
 *      arrayOriginal
 *  ), 
 *  valorInicial
 * );
 * 
 * Temos: temos a função callback, o valor inicial do reduce e a lista ao qual
 * iremos iterar chamando o callback.
 * Na função callback podemos passar quatro argumentos:
 * - A variável que vai servir como acumuladora (que é o valor retornado na ultima iteração e inicia com o valor inicial)     (obrigatório).
 * - O valor do atual elemento sendo iterado (obrigatório).
 * - O índice do elemento atual (não é obrigatório).
 * - O array original (não é obrigatório).
 * 
*/

// Rotornar a soma(acumulador), valor atual(numero), índice(indice) e array(original) a cada loop
console.log('Soma do array\n');
var numeros = [0, 1, 2, 3];
var total = numeros.reduce((acumulador, numero, indice, original) => {
    console.info(`${acumulador} total até o momento`);
    console.log(`${numero} valor atual`);
    console.log(`${indice} indice atual`);
    console.log(`${original} array original`);
    return acumulador += numero;
}, 0);
console.warn('acaboooou');
console.log(total);

console.log('\n=============================================\n');

// Somar as duas listas
console.log('Somar as duas listas\n');
const a = [1, 2, 3, 4, 5], b = [6, 7, 8, 9, 10];
var ab = a.reduce((acumulador, elemento) => acumulador += elemento,
         b.reduce((acumulador, elemento) => acumulador += elemento, 0));

console.log(ab);

