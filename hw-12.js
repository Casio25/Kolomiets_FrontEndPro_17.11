
let urls = ['https://www.youtube.com', '//lms.ithillel.ua/']
function urlCheck(string) {
    let url;
    try {
        url = new URL(string);
    } catch (e) {
        return 'false here is right ' + "https:" + string;
    }
    return "true  " + string;
}

let popUrl = document.querySelector('.urlPlace')
function gotoLink(link){
    window.open(link);
}
for (let i = 0; i < urls.length; i++){
    popUrl.innerHTML += `<button onclick="gotoLink('`+ `${urls[i]}` + `')">${urlCheck(String(urls[i])) }</button>`+ `<br/>`;
}
