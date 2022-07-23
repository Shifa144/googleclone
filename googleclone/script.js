const searchInput = document.querySelector("#search-input");



searchInput.addEventListener("keydown", function(event) {
    if(event.code === "Enter"){
    search();
}
});

function search() {

    window.location.href ="https://www.google.com/search?gs_ssp=eJzj4tTP1TcwtkgxqTJg9OLIyc9LLEvMSQQAP1UGXQ&q=lonavala&oq=lona&aqs=chrome.1.69i57j46i131i433i512j0i131i433i512l3j46i131i433i512j0i131i433i512l3.4591j0j15&sourceid=chrome&ie=UTF-8"
}