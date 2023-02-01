// sempre retorna uma quantidade < = ao tamanho do array base
// array.filter()
// o filter recebe default 3 parametros (elemento, indice, array)
//Exemplo 1

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plastico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function (e) {
    return e.preco >= 20
}))

const fragil = produto => produto.fragil
const caro = produto => produto.preco > 500

console.log(produtos.filter(fragil).filter(caro))