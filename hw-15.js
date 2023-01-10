const postNumber = prompt("Type in post id: ");

function getComment() {
    
fetch(`https://jsonplaceholder.typicode.com/posts/`+ `${postNumber}`)
    .then((response) => {
        if (response.ok) {
            return response.json();
        }
        return response.json().then(error => {
            const err = new Error("Wrong id")
            let result = document.getElementById('result');
            result.innerHTML = "Помилка: " + err
            err.data = error
            throw err
            
        })
    })
    .then((response) => {
        console.log(response);
        let result = document.getElementById('result');
        result.innerHTML = "User Id: " + response.id + '</br>' + "User title: " + response.title + "</br>" +
        "User Body: " + response.body
    })

}