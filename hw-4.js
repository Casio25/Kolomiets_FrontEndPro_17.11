const birthDate = prompt("Введіть свій вік: ");
const age = (2022 - Number(birthDate));

if (age == undefined || age == "") {
    alert("ви не ввели свій вік");
}else if(isNaN(age)){
    alert(`${birthDate} is not a number`);
}else{
    alert(`Вам, ${age}`)
}

const city = prompt("Введіть своє місто: ");
switch (city) {
    case "Київ":
        alert("Ти живеш у столиці України");
        break;
    case "Вашингтон":
        alert("Ти живеш у столиці США");
        break;
    case "Лондон":
        alert("Ти живеш у столиці Великобританії");
        break;
    case null:
    case "":
        alert("Ви не ввели назву міста");
        break;
    default:
        alert(`Ти живеш у місці ${city}`);
        break;
}

const sport = prompt("Введіть свій удюблений вид спорту: ");
switch (sport) {
    case "Футбол":
        alert("Круто! Хочеш стати Мессі?");
        break;
    case "Баскетбол":
        alert("Круто! Хочеш стати Майклом Джорданом?");
        break;
    case "Бокс":
        alert("Круто! Хочеш стати Тайсоном?");
        break;
    case null:
    case "":
        alert("Ви не ввели назву свого улюбленого виду спорту");
        break;
    default:
        alert("Круто! Спорт це здорово");
        break;
}
