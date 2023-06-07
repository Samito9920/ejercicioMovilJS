const readline = require('readline-sync');

let response = '';

do {
    let resulta = 0;
    console.log('1. Suma');
    console.log('2. Resta');
    console.log('3. Multiplicación');
    console.log('4. División');
    console.log('5. Salir');

    response = readline.question('Selecciona la operación');

    if (response !== '5') {
        const firstNumber = readline.question('escriba el numero 1: ');
        const secondNumber = readline.question('escriba el numero 2: ');

        switch (response) {
            case "1":
                resulta = parseInt(firstNumber) + parseInt(secondNumber);
                console.log('El resultado es : ' + resulta);
                break;
            case "2":
                resulta = parseInt(firstNumber) - parseInt(secondNumber);
                console.log('El resultado es : ' + resulta);
                break;
            case "3":
                resulta = parseInt(firstNumber) * parseInt(secondNumber);
                console.log('El resultado es : ' + resulta);
                break;
            case "4":
                resulta = parseInt(firstNumber) / parseInt(secondNumber);
                console.log('El resultado es : ' + resulta);
                break;
        }
    }
} while (response !== "5");