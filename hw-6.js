/*Виводимо числа з кроком 0.5, від 20 до 30 */
console.log('Task 1')
let number = 19.5;
let numberArray = [];
while (number < 30) {
    number += 0.5;
    numberArray.push(number);
}
console.log(numberArray);

/*Віводимо вартість в гривнах від 10 до 100 долларів */
console.log("Task 2");
let money = 0;
let moneyArray = []
while (money < 100) {
    money += 10;
    value = money * 27;
    moneyArray.push(value);
}
console.log(moneyArray)

/* Виводимо числа, квадрат яких не перевищує squareNumber*/
console.log("Task 3");
let squareNumber = prompt("Введіть ціле число для 3 завдання");
let i = 0;
const squareArray = []
while (Math.pow(i, 2) <= squareNumber && i <= 100) {
    i+=1;
    squareArray.push(i);
}
let squareArrayFixed = squareArray.pop();
console.log(squareArray);

/* Виводимо повідомлення, чи є число простим */
console.log("Task 4")
let primeNumber = prompt("Введіть число для 4 завдання");
let primeCheck = false;
if (primeNumber == 1){
    console.log("1 is not a prime number");
}
 if (primeNumber > 1){
    for (let i = 2; i < primeNumber/2; i++){
        if (primeNumber % i == 0){
            primeCheck = true;
            break;
        }
    }
    if (primeCheck == true){
        console.log(`${primeNumber} is not a prime number`)
    } else{
        console.log(`${primeNumber} is a prime number`);
    }
 }
 else{
    console.log(`${primeNumber} is zero or negative`);
 }

 /*  Визначаємо, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. */
console.log("Task 5");
let threeNumber = prompt("Введіть число, кратне 3, для 5 завдання");
let isThree = false;
/*Функція, що відповідає за пошук логарифму */
function calculateLogarithm(base, x) {
    var a = Math.log(x);
    var b = Math.log(base);

    return a / b;
}

/*Робимо так, щоб логарифм, в основі якого стоїть 3, виводився як ціле число */
let log =  Number(calculateLogarithm(3, threeNumber));
let fixedLog = log.toFixed(3);
for (let i = 1; i < threeNumber; i++){
    if (fixedLog % i == 0){
        isThree = true;
        break;
    }
} if (isThree == true) {
    console.log(`${threeNumber} можна отримати, звевши число 3 у ступінь ${Number(fixedLog)}`);
} else {
    console.log("Число не підходить");
}
