const cumprimentar = texto => console.log('Olá,' + texto + '!')
cumprimentar('Maria')

const converterIdadeEmAnosParaDias = anos => console.log(anos * 365)
converterIdadeEmAnosParaDias(25)

const calcularSalario = (quantidadePorMes, valorPorHora) => console.log(`Salário igual a R$ ${quantidadePorMes * valorPorHora}`)
calcularSalario(150, 40.5)

const nomeDoMes = mes => {
    switch (mes) {
        case 1:
            return "janeiro";
        case 2:
            return "fevereiro";
        case 3:
            return "março";
        case 4:
            return "abril";
        case 5:
            return "maio";
        case 6:
            return "junho";
        case 7:
            return "julho";
        case 8:
            return "agosto";
        case 9:
            return "setembro";
        case 10:
            return "outubro";
        case 11:
            return "novembro";
        case 12:
            return "dezembro";
    }
}

const maiorOuIgual = (num1, num2) => {
    return console.log(num1 >= num2)
}

//desisti 

