let form = document.querySelector("#popupForm");
let result = document.querySelector(".result");
let mistake = document.querySelector(".mistake")

let resultPop = document.querySelector(".result")
let mistakePop = document.querySelector(".mistake")

function openForm() {
    form.style.display = 'block';

}

function validateForm() {
    let name = document.forms["form"].name.value;
    let city = document.forms["form"].city.value;
    let mail = document.forms["form"].mail.value;
    let paymentMethod = document.forms["form"].paymentMethod.value;
    let cuantity = document.forms["form"].cuantity.value;
    let numCuantity = Number(cuantity);
    let comment = document.forms["form"].comment.value;

    if (name === "" || paymentMethod === "selectCard" || city === "selectCity" || mail === "" || cuantity === ""){
        console.log("not all is filled");
        mistake.style.display = 'block';
        mistakePop.innerHTML += `<h1>Не всі дані введено</h1>`;
    }else if(numCuantity <= 0 || numCuantity > 100){
        mistake.style.display = 'block';
        mistakePop.innerHTML += `<h1>Невірна кількість</h1>`;
        console.log("wrong number");
    }else{
        mistake.style.display = 'none';
        result.style.display = 'block';
        resultPop.innerHTML += `<li>ПІБ: ${name}</li>`;
        resultPop.innerHTML += `<li>Місто: ${city}</li>`;
        resultPop.innerHTML += `<li>Склад Нової пошти: ${mail}</li>`;
        resultPop.innerHTML += `<li>Кількість: ${cuantity}</li>`;
        resultPop.innerHTML += `<li>Коментар: ${comment}</li>`;
    }
}
