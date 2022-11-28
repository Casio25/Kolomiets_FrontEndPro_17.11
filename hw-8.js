let users = [
    {
        "index": 0,
        "isActive": true,
        "balance": "$2,226.60",
        "name": "Eugenia Sawyer",
        "gender": "female",
        "phone": "+1 (840) 583-3207",
        "address": "949 John Street, Rose, Puerto Rico, 1857"
    },
    {
        "index": 1,
        "isActive": true,
        "balance": "$2,613.77",
        "name": "Pauline Gallegos",
        "gender": "female",
        "phone": "+1 (985) 593-3328",
        "address": "328 Greenpoint Avenue, Torboy, North Dakota, 6857"
    },
    {
        "index": 2,
        "isActive": false,
        "balance": "$3,976.41",
        "name": "Middleton Chaney",
        "gender": "male",
        "phone": "+1 (995) 591-2478",
        "address": "807 Fleet Walk, Brutus, Arkansas, 9783"
    },
    {
        "index": 3,
        "isActive": true,
        "balance": "$1,934.58",
        "name": "Burns Poole",
        "gender": "male",
        "phone": "+1 (885) 559-3422",
        "address": "730 Seba Avenue, Osage, Alabama, 6290"
    },
    {
        "index": 4,
        "isActive": true,
        "balance": "$3,261.65",
        "name": "Mcfadden Horne",
        "gender": "male",
        "phone": "+1 (942) 565-3988",
        "address": "120 Scholes Street, Kirk, Michigan, 1018"
    },
    {
        "index": 5,
        "isActive": false,
        "balance": "$1,790.56",
        "name": "Suzette Lewis",
        "gender": "female",
        "phone": "+1 (837) 586-3283",
        "address": "314 Dunne Place, Bawcomville, Guam, 9053"
    }
]


/* Початок виконання дз*/
/*Функція, що буде конвертувати значeння Object в Number*/
/*Виявилась  марною у нашому випадку*/
function convertIntObj(obj) {
    const res = {}
    for (const key in obj) {
        res[key] = {};
        for (const prop in obj[key]) {
            const parsed = parseInt(obj[key][prop], 10);
            res[key][prop] = isNaN(parsed) ? obj[key][prop] : parsed;
        }
    }
    return res;
}



/*Get an Object's Key by its Value  */
/*Виявилась  марною у нашому випадку*/
function getObjKey(obj, value) {
    return Object.keys(obj).find(key => obj[key] === value);
}

let lengthArray = ((Number(Object.keys(users).length)) - 1);

let richArray = [];
let numberArray = [];
for (let i = 0; i <= lengthArray; i++){
    let money = (users[i].balance.slice(1));
    let output = parseFloat(money.replace(/,/g, ''));
    if ( output > 2000){
        richArray.push(output);
        numberArray.push(users[i].phone);
    }
}
console.log(`There are ${(richArray).length} people with balance, more than $2000. Their balnces are ${richArray.join(', ')}. The sum will be ${(richArray.reduce((a, b) => a + b, 0)).toFixed(2)}`);
console.log(`Their numbers are ${numberArray.join(', ')}`)
