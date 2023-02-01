//Percorre elementos ao invés de indices
// array.forEach()
// o forEach recebe default 3 parametros (elemento, indice, array)
//Exemplo 1

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// aprovados.forEach(function (nome, indice, array) {
//     console.log(`${indice + 1}) ${nome}, ${array}`)
// });


// aprovados.forEach(nome => console.log(nome))

// //pode se passar o resultado do funções
// const exibirAprovados = aprovados => console.log(aprovados)
// aprovados.forEach(exibirAprovados)

// Exercicio

Array.prototype.forEach2 = function(callback) {
    for (let i =0; i < this.length; i++) {
        // this[i] = indice
        // i = valor do elemento
        // this = todo o array
        callback(this[i], i, this)
    }
}

aprovados.forEach2(function (nome, indice, array) {
    console.log(`${indice + 1}) ${nome}, ${array}`)
});

