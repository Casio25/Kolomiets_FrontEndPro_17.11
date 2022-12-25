let result = document.querySelector(".result");
let resultPop = document.querySelector(".result")


function validateForm(){
    let firstName = document.forms["form"].firstName.value;
    let secondName = document.forms["form"].secondName.value;
    let date = document.forms["form"].date.value;
    let gender = document.forms["form"].gender.value
    let city = document.forms["form"].city.value;
    let mail = document.forms["form"].mail.value;
    let listOfCheck = [checked1, checked2, checked3];
    let listOfLang = [language1, language2, language3];
    result.style.display = 'block';
    resultPop.innerHTML += `<li>Ім'я: ${firstName}</li>`;
    resultPop.innerHTML += `<li>Прізвище: ${secondName}</li>`;
    resultPop.innerHTML += `<li>Дата народження: ${date}</li>`;
    resultPop.innerHTML += `<li>Стать: ${gender}</li>`;
    resultPop.innerHTML += `<li>Місто: ${city}</li>`;
    resultPop.innerHTML += `<li>Адреса: ${mail}</li>`;
    for (let i=0; i<listOfLang.length+1; i++){
        if (listOfCheck[i] == true) {
            resultPop.innerHTML += `<li>Мова ${i+1} : ${listOfLang[i].value}</li>`;
        }
    }
}
let language1 = document.getElementById('language1');
let language2 = document.getElementById('language2');
let language3 = document.getElementById('language3');
function saved() {
    localStorage.setItem('language1', language1.checked);
    localStorage.setItem('language2', language2.checked);
    localStorage.setItem('language3', language3.checked);


}
let checked1 = JSON.parse(localStorage.getItem('language1'));
let checked2 = JSON.parse(localStorage.getItem('language2'));
let checked3 = JSON.parse(localStorage.getItem('language3'));
function load() {
    document.getElementById("language1").checked = checked1;
    document.getElementById("language2").checked = checked2;
    document.getElementById("language3").checked = checked3;
}

load();

const save = document.getElementsByName('gender');
for (var i = 0; i < save.length; i++) {
    save[i].onclick = function () {
        localStorage.setItem('Radio', this.value);
    }
}
if (localStorage.getItem('Radio')) {
    let Radio = localStorage.getItem('Radio');
    document.querySelector('input[name="gender"][value="' + Radio + '"]').setAttribute('checked', 'checked');
}