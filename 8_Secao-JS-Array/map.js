// Map é como um For com proposito
// retorna um array com tamanho igual, porém com valores alterados
// array.map()
// o map recebe default 3 parametros (elemento, indice, array)
// map precisa ter um return, caso contratio ira retornar um array com undefined
//Exemplo 1


const nums = [1, 2, 3, 4, 5]
let resultado = nums.map(function (e) {
    // armazena na variavel resultado os valores de nums[e] * 2
    //multiplica todos os valores por 2
    return e * 2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
// transforma valor recebido para até duas casas decimais e troca o . por ,
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

// map encadeado
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)

Array.prototype.map2 = function (callback) {
    const newArray = []
    for (i =0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}
resultado = nums.map2(soma10).map2(triplo).map2(paraDinheiro)
console.log(resultado)

// Exercicio 

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit de Lapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}',
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const result = carrinho.map(paraObjeto).map(apenasPreco)
console.log(result)

