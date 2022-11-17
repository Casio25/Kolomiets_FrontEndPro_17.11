//створюємо елементи лайк/дизлайк

var likeImage = document.getElementById('roflan_like');
var dislikeImage = document.getElementById('roflan_dislike');

//Функції що віповідають за показ лайків/дизлайків
function showLikePicture() {
    likeImage.style.display = 'block';
    dislikeImage.style.display = 'none';
}

function showDislikePicture() {
    dislikeImage.style.display = 'block';
    likeImage.style.display = 'none';
}
