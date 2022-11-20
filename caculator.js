const OperationValue = prompt("Type in your operation: ");
const FirstNumber = prompt("Type in your first number: ");
const SecondNumber = prompt("Type in your second number: ");
const num1 = parseInt(FirstNumber);
const num2 = parseInt(SecondNumber);
const add = (num1 + num2);
const sub = (num1 - num2);
const mult = (num1 * num2);
const div = (num1 / num2);
switch (OperationValue) {
    case "add":
    case "+":
        alert(`${FirstNumber} + ${SecondNumber} = ${add}`);
        break;
    case "sub":
    case "-":
        alert(`${FirstNumber} - ${SecondNumber} = ${sub}`);
        break;
    case "mult":
    case "*":
        alert(`${FirstNumber} * ${SecondNumber} = ${mult}`);
        break;
    case "div":
    case "/":
    case ":":
        alert(`${FirstNumber} / ${SecondNumber} = ${div}`);
        break;
    default:
        alert(`Sorry, we don't understand ${OperationValue}`);
        break;
}