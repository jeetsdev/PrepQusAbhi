let userText = document.querySelector("#user-text");
let btnIncrease = document.querySelector("#btn-increase");
let btnDecrease = document.querySelector("#btn-decrease");
let outputPara = document.querySelector(".output-para");

let initalSize = parseInt(window.getComputedStyle(userText).fontSize);
btnIncrease.addEventListener('click', () => {
    outputPara.textContent = userText.value;
    console.log(initalSize);
    initalSize = initalSize + 2;
    if (initalSize % 5 == 0) {
        outputPara.style.color = 'red';
    } else {
        outputPara.style.color = 'black';
    }
    outputPara.style.fontSize = `${initalSize}px`;
})
btnDecrease.addEventListener('click', () => {
    outputPara.textContent = userText.value;
    console.log(initalSize);
    initalSize = initalSize - 2;
    if (initalSize % 5 == 0) {
        outputPara.style.color = 'red';
    } else {
        outputPara.style.color = 'black';

    }
    outputPara.style.fontSize = `${initalSize}px`;
})