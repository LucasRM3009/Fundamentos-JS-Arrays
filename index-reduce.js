function reduceDefault() {
    const numeros = [43, 50, 65, 12];
    
    const soma = numeros.reduce((acum, atual) => atual + acum, 0);
    
    console.log('reduce() padrão: ' + soma); //170
}

function reduceExtenso() {
    const numeros = [43, 50, 65, 12];
    const soma = numeros.reduce(function (acum, atual) {
        return atual + acum;
    }, 0);
    
    console.log('reduce() mais extenso: ' + soma);
}

function functionCallbackForaDoReduce() {
    const numeros = [43, 50, 65, 12];
    function operacaoNumerica(acum, atual) {
        return atual + acum;
    }
       
    const soma = numeros.reduce(operacaoNumerica, 0);

    console.log('Função callback fora do reduce(): ' + soma);
}

reduceDefault();
reduceExtenso();
functionCallbackForaDoReduce();
