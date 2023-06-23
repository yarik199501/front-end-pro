// 1) С помощью prompt спрашиваем у пользователя что он хочет сделать (+ - * /).
// 2) С помощью prompt спрашиваем у пользователя первае число.
// 3) С помощью prompt спрашиваем у пользователя второе число.
// 4) С помощью alert выводим результат действий со всеми операндами.

const action = prompt('Enter action +,-,*,/');
const operandA = Number(prompt('Enter operant A'));
const operandB = Number(prompt('Enter operant B'));
let res;

if (action === '+') {
    res = operandA + operandB
}
else if (action === '-') {
    res = operandA - operandB
}
else if (action === '*') {
    res = operandA * operandB
}
else if (action === '/') {
    res = operandA / operandB
}
alert(`${operandA} + ${operandB} = ${res}`)

