let level = ""
let victorys = 150
let defeats =  67
let saldo = subtract(victorys, defeats)

function subtract(numA, numB){
    let calculation = numA - numB
    return calculation
}

switch (true){
    case saldo <= 10:
        level = "Ferro"
        break
    case saldo >= 11 && saldo <= 20:
        level = "Bronze"
        break
    case saldo >= 21 && saldo <= 50:
        level = "Prata"
        break
    case saldo >= 51 && saldo <= 80:
        level = "Ouro"
        break
    case saldo >= 81 && saldo <= 90:
        level = "Diamante"
        break
    case saldo >= 91 && saldo <= 100:
        level = "Lendário"
        break
    case saldo >= 101:
        level = "Imortal"
        break
}

console.log("O Herói tem saldo " + saldo + " e está no nível de " + level)