let btnFetch = document.querySelector("#btn-fetch");
let outputArea = document.querySelector(".output-area");

btnFetch.addEventListener('click', () => {
    fetch("https://randomsuser.me/api/")
        .then(res => {
        if (!res.ok) {
            throw Error(res.statusText);
        }
            return res.json();
        })
        .catch(err => {
            console.log(err.message);
            outputArea.textContent = err.message;
    })
})
