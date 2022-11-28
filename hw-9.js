let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

function generateKey(length, data){
    
    data.split("");
    let letArray = [];
    for (let i = 0; i <= data.length - 1; ++i) {
        letArray.push(data[i]);
    }let shafArray = shuffle(letArray);
    let slicedArray = shafArray.slice(0, length);
    return slicedArray;
}


let key = generateKey(16, characters);
console.log(key);
