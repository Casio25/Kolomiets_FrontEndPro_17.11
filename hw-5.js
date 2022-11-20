let numOrStr = prompt('input number or string');
console.log(numOrStr)

switch (isNaN(numOrStr)|| numOrStr) {
    case null:
        alert("Ви скасували");
        break;
    case "":
        alert("Empty String");
        break;
    case true:
        alert("number is Ba_NaN");
        break;
    default:
        alert("Ok")
        break;
}