const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Léo'];

// splice(indice que vai alterar, nº de elementos que serão removidos a partir da alteração, valor que será adiconado);
listaDeChamada.splice(1, 2, 'Rodrigo');
listaDeChamada.splice(2, 0, 'Rodrigo');

console.log(`Lista de chamada: ${listaDeChamada}`)
