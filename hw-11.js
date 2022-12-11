
let photoObj = ['./images/img1.jpg', './images/img2.jpg', './images/img3.jpg',
    './images/img4.jpg', './images/img5.jpg'];

function getRandomNumber(min, max){
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min; 

    return result
}
let popPhotos = document.querySelector(".imageplace");
let index = getRandomNumber(0, photoObj.length-1);

popPhotos.innerHTML = `<img src='${photoObj[index]}'>`;