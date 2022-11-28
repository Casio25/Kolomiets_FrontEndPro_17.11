let userArray = [];
let arrayLength = prompt('Введіть кількість елементів для масиву');
for (let i = 1, j = 0; i <= arrayLength; i++, j++){
    userArray.push(prompt(`write ${i} element with index ${j}`));
}
alert(`Невідсортованний масив ${userArray}`);
sortedArray = userArray.sort();
alert(`Bідсортованний масив ${sortedArray}`);
deletedArray = sortedArray.splice(1, 3);
alert(`Тoй самий масив, з видаленими елементами, з ідексами від 1 до 3 ${sortedArray}`);

