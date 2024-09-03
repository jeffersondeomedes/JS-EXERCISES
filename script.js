function fibonacci(num) {
    let a = 0, b = 1, c = a + b;

    while (c <= num){
        if (c === num){
            return `O NUMERO INFORMADO: ${num}, PERTENCE A SEQUENCIA!`;
        }
        a = b;
        b = c;
        c = a + b;
    }

    return `O NUMERO INFORMADO: ${num}, NAO PERTENCE A SEQUENCIA!`;
}

function vrfLetra(lt) {

    let count = 0;
    for (let i = 0; i < lt.length; i++) {
        if (lt[i] === 'a'){
            count++;
        }
    }

    if (count > 0) {
        return `A LETRA 'A' CONSTA ${count} VEZES NA STRING`;
    } else {
        return `A LETRA 'A' NÃO FOI ENCONTRADA`;
    }


}

let numer = 1;
console.log(fibonacci(numer));

let ltr = "amalia";
console.log(vrfLetra(ltr));