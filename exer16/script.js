const operation = (operation) => {
    const number1 = Number(document.getElementsByName("number1")[0].value);
    const number2 = Number(document.getElementsByName("number2")[0].value);

    switch (operation) {
        case "sun":
            sun(number1, number2)
            break;
        case "division":
            division(number1, number2)
            break;
        case "multiplication":
            multiplication(number1, number2)
            break;
        case "subtraction":
            subtraction(number1, number2)
            break;
    }
}

const sun = (number1, number2) => {
    alert(`${number1} + ${number2} = ${number1+number2}`)
}

const division = (number1, number2) => {
    alert(`${number1} / ${number2} = ${number1/number2}`)
}

const multiplication = (number1, number2) => {
    alert(`${number1} * ${number2} =  ${number1*number2}`)
}

const subtraction = (number1, number2) => {
    alert(`${number1} - ${number2} = ${number1-number2}`)
}