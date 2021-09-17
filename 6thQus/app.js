const btnToggleTheme = document.querySelector("#btn-toggle-theme");
let initialTheme = "white";
btnToggleTheme.addEventListener("click", () => {
    if (initialTheme == 'white') {
        initialTheme = 'black';
        document.body.style.backgroundColor = initialTheme;
    } else {
        initialTheme = 'white';
        document.body.style.backgroundColor = initialTheme;
    }
})