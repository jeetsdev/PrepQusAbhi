let userInput = document.querySelector("#user-pass");
let btnToggle = document.querySelector("#btn-toggle");

userInput.addEventListener('keyup', () => {
    let userPassword = userInput.value;
    if (userPassword.length>=10) {
        userInput.style.borderColor = "green";
    }
    else {
        userInput.style.borderColor = "black";
        
    }
})
btnToggle.addEventListener('click', () => {

    if(userInput.getAttribute('type')=='text'){
        userInput.setAttribute('type', 'password');
    }
    else {
        
        userInput.setAttribute('type', 'text');
    }
})
